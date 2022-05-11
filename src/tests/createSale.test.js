const request = require('supertest');
const app = require('../api/app');
const DATA = require('./testData');
const { resetDB, killDB } = require('./toolsDB');

describe('POST `/sale/create`', () => {
    beforeEach(() => resetDB());
    afterAll(() => killDB());

    it('Should receive status 201 and newSaleId', async () => {
        const loginResponse = await request(app).post('/user/login').send(DATA.usrLogin);
        const { body: { token } } = loginResponse;
        const response = await request(app)
            .post('/sale/create')
            .set('Authorization', token)
            .send(DATA.newSale);
        expect(response.status).toBe(201);
        expect(response.body.newSaleId).toBeDefined();
    });

    it('Should receive status 422 if userId is invalid', async () => {
        const loginResponse = await request(app).post('/user/login').send(DATA.usrLogin);
        const { body: { token } } = loginResponse;
        const response = await request(app)
            .post('/sale/create')
            .set('Authorization', token)
            .send({ ...DATA.newSale, userId: 7 });
        expect(response.status).toBe(422);
    });
});