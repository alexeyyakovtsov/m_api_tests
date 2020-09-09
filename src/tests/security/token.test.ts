import * as axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

describe('Security - Token', () => {

    it('should have content-type property', async () => {
        await axios.default
            .post(process.env.URL + '/api/security/token', {
                "username": process.env.EMAIL,
                "password": process.env.PASSWORD
            })
            .then(function (response) {
                expect(response.headers).toHaveProperty('content-type')
            }).catch((error) => {
                console.log(error)
            })
    });

    it('should get status 200', async () => {
        await axios.default
            .post(process.env.URL + '/api/security/token', {
                "username": process.env.EMAIL,
                "password": process.env.PASSWORD
            })
            .then(function (response) {
                expect(response.status).toBe(200)
            }).catch((error) => {
                console.log(error)
            })
    });

    it('should get status 400 - no username', async () => {
        await axios.default
            .post(process.env.URL + '/api/security/token', {
                "password": process.env.PASSWORD
            })
            .catch(function (error) {
                expect(error.request.status).toBe(400)
            })
    });

    it('should get status 400 - no password', async () => {
        await axios.default
            .post(process.env.URL + '/api/security/token', {
                "username": process.env.EMAIL
            })
            .catch(function (error) {
                expect(error.request.status).toBe(400)
            })
    });
});