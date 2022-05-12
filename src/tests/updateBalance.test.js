const request = require('supertest');
const app = require('../api/app');
const DATA = require('./testData');
const { resetDB, killDB } = require('./toolsDB');

describe('POST `/user/updateBalance`', () => {
    beforeEach(() => resetDB());
    afterAll(() => killDB());

    it('Should receive status 200 when admin updates balance', async () => {
        const adminLoginResponse = await request(app).post('/user/login').send(DATA.admLogin);
        const adminToken = adminLoginResponse.body.token;

        const response = await request(app)
            .post('/user/updateBalance')
            .set('Authorization', adminToken)
            .send(DATA.updateBalance);
        expect(response.status).toBe(200);
        expect(response.body).toBeGreaterThanOrEqual(DATA.updateBalance.adjustment);
    });

    it('Should receive status 404 when user doesnt exist', async () => {
        const adminLoginResponse = await request(app).post('/user/login').send(DATA.admLogin);
        const adminToken = adminLoginResponse.body.token;

        const response = await request(app)
            .post('/user/updateBalance')
            .set('Authorization', adminToken)
            .send({ ...DATA.updateBalance, id: 99 });
 
        expect(response.status).toBe(404);
    });

    it('Should receive status 401 when user updates balance', async () => {
        const userLoginResponse = await request(app).post('/user/login').send(DATA.usrLogin);
        const userToken = userLoginResponse.body.token;

        const response = await request(app)
            .post('/user/updateBalance')
            .set('Authorization', userToken)
            .send(DATA.updateBalance);
 
        expect(response.status).toBe(401);
    });
});