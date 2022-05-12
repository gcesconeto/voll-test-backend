const request = require('supertest');
const app = require('../api/app');
const DATA = require('./testData');
const { resetDB, killDB } = require('./toolsDB');

describe('POST `/product/create`', () => {
    beforeEach(() => resetDB());
    afterAll(() => killDB());

    it('Should receive status 201 and newProduct', async () => {
        const loginResponse = await request(app).post('/user/login').send(DATA.admLogin);
        const { body: { token } } = loginResponse;
        const response = await request(app)
            .post('/product/create')
            .set('Authorization', token)
            .send(DATA.newProduct);
        expect(response.status).toBe(201);
        expect(response.body.id).toBeDefined();
    });

    it('Should receive status 422 if data is invalid', async () => {
        const loginResponse = await request(app).post('/user/login').send(DATA.admLogin);
        const { body: { token } } = loginResponse;
        const response = await request(app)
            .post('/product/create')
            .set('Authorization', token)
            .send({ ...DATA.newProduct, price: 'hello' });
        expect(response.status).toBe(422);
    });
});