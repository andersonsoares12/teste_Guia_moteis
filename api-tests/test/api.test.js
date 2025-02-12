const request = require('supertest');
const baseUrl = 'https://jsonplaceholder.typicode.com';

describe('API Tests', () => {
  it('should return all users with GET /users', async () => {
    const response = await request(baseUrl).get('/users');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('should create a new user with POST /users', async () => {
    const newUser = {
      name: 'John Doe',
      username: 'johndoe',
      email: 'johndoe@example.com',
      address: {
        street: 'New Street',
        suite: 'Apt. 101',
        city: 'New City',
        zipcode: '12345'
      },
      phone: '1-234-567-8901',
      website: 'johndoe.org',
      company: {
        name: 'Doe Inc.',
        catchPhrase: 'Innovative solutions',
        bs: 'drive business growth'
      }
    };

    const response = await request(baseUrl)
      .post('/users')
      .send(newUser)
      .set('Accept', 'application/json');

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject(newUser);
  });

  it('should return 400 error for invalid POST /users', async () => {
    const invalidUser = {
      name: 'John Doe',
      username: '' // Missing username
    };

    const response = await request(baseUrl)
      .post('/users')
      .send(invalidUser)
      .set('Accept', 'application/json');

    expect(response.status).toBe(400);
  });

 
});
