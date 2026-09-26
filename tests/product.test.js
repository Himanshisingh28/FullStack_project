import request from 'supertest';
import app from '../app.js';

describe('Product API', () => {
  it('should get all products', async () => {
    const response = await request(app).get('/api/products');
    expect(response.statusCode).toBe(200);
  });
});
