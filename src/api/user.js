const userApi = {
  get: { method: 'GET', url: '/users', headers: {} },
  getAll: { method: 'GET', url: '/users/{id}', headers: {} },
  add: { method: 'POST', url: '/users', headers: {} },
};

export default userApi;
