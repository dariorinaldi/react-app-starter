// @flow

type Endpoint = {
  method: string,
  url: string,
  headers: { [string]: any },
};

type FetchOptions = {
  query?: { [string]: any },
  credentials?: string,
  body?: string | FormData,
  headers: { [string]: any },
};

type Domains = {
  [string]: { [string]: Endpoint },
};

type Fetcher = (FetchOptions) => Promise<Response>;

const replaceQueryParams = (query: { [string]: any }, url: string): string => {
  return Object.keys(query).reduce((url: string, param: string) => {
    return url.replace(`{${param}}`, query[param]);
  }, url);
};

const createFetcher = (endpoint: Endpoint): Fetcher => async (options: FetchOptions): Promise<Response> => {
  if (options.query) {
    endpoint.url = replaceQueryParams(options.query, endpoint.url);
  }

  return await fetch(endpoint.url, {
    method: endpoint.method,
    body: options.body,
  });
};

const apiClient = (domains: Domains): { [string]: { [string]: Fetcher } } =>
  // domains: { users: { get: {}}, accounts: {get: {}} }
  Object.keys(domains).reduce((client: {}, domName: string): {} => {
    // domain: { get: {}}
    const domain: { [string]: Endpoint } = domains[domName];

    // domainEndpoints: {get: ()=>{}}
    const domainEndpoints: { [string]: Fetcher } = Object.keys(domain).reduce(
      (endpoints, currEndpoint) => ({ ...endpoints, [currEndpoint]: createFetcher(domain[currEndpoint]) }),
      {}
    );
    return { ...client, [domName]: domainEndpoints };
  }, {});

export default apiClient;
