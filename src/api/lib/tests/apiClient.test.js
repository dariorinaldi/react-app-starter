import apiClient from '../apiClient';

describe('apiClient', () => {
  describe('IF a list of domains has passed', () => {
    let domains;
    let client;

    beforeEach(() => {
      domains = {
        users: {
          get: { method: 'GET', url: '/users', headers: {} },
          getAll: { method: 'GET', url: '/users/{id}', headers: {} },
          add: { method: 'POST', url: '/users', headers: {} },
        },
        accounts: {
          get: { method: 'GET', url: '/users', headers: {} },
          getAll: { method: 'GET', url: '/users/{id}', headers: {} },
          delete: { method: 'DELETE', url: '/users', headers: {} },
        },
      };
      client = apiClient(domains);
    });

    it('THEN it should create an object with correct domains', () => {
      expect(client.users).toBeDefined();
      expect(client.accounts).toBeDefined();
    });

    it('THEN a domain should have its correct endpoints', () => {
      const userEndpoints = client.users;
      expect(userEndpoints.get).toBeDefined();
      expect(userEndpoints.getAll).toBeDefined();
      expect(userEndpoints.add).toBeDefined();
    });

    it('THEN each endpoint should be a function', () => {
      const userEndpoints = client.users;
      expect(typeof userEndpoints.get).toBe('function');
      expect(typeof userEndpoints.getAll).toBe('function');
      expect(typeof userEndpoints.add).toBe('function');
    });
  });

  describe('IF empty object has passed', () => {
    let client;

    beforeEach(() => {
      client = apiClient({});
    });

    it('THEN it should return an empty object', () => {
      expect(client).toEqual({});
    });
  });
});
