// @flow
import apiClient from './lib/apiClient';
import userApi from './user';

const client: {} = apiClient({
  user: userApi,
});

export default client;
