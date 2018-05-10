import * as people from '../src/fixtures/people';
const axios = jest.genMockFromModule('axios');

axios.get.mockImplementation(async (path, options) => {
  const routes = {
    '/api/v2/people.json': people.list,
  };
  const route = routes[path] || (() => {});
  return {
    status: 200,
    data: route(options),
  };
});

export default axios;
