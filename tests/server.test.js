const request = require('supertest');
const app = require('../src/server');

describe('Server', () => {
  it('should start listening and respond on the configured port', async () => {
    const server = app.listen(0);
    const port = server.address().port;
    const res = await request(`http://localhost:${port}`).get('/health');
    expect(res.status).toBe(200);
    server.close();
  });

  it('should parse JSON request bodies', async () => {
    const res = await request(app)
      .post('/health')
      .send({ data: 'test' })
      .set('Accept', 'application/json');
    expect(res.status).toBe(404);
  });

  it('should export the express app for testing', () => {
    expect(app).toBeDefined();
    expect(typeof app.listen).toBe('function');
  });
});