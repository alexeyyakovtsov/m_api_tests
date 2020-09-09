import * as axios from 'axios'
import * as dotenv from 'dotenv'
import * as token from '../../helpers/token'

dotenv.config()

describe('Users - Me', () => {
    
    it('should have content-type property', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/user/me', {
                headers: {
                    'Authorization': `Bearer ${tok}`
                }
            })
            .then(function (response) {
                expect(response.headers).toHaveProperty('content-type')
            })
            .catch((error) => {
                console.log(error)
            })
    });

    it('should get status 200', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/user/me', {
                headers: {
                    'Authorization': `Bearer ${tok}`
                }
            })
            .then(function (response) {
                expect(response.status).toBe(200)
            })
            .catch((error) => {
                console.log(error)
            })
    });

    it('should valid user data', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/user/me', {
                headers: {
                    'Authorization': `Bearer ${tok}`
                }
            })
            .then(function (response) {
                expect(response.data["email"]).toEqual(process.env.EMAIL)
                expect(response.data["username"]).toEqual(process.env.EMAIL)
                expect(response.data["firstName"]).toEqual("Alexey")
                expect(response.data["lastName"]).toEqual("Yakovtsov")
            })
            .catch((error) => {
                console.log(error)
            })
    });

    it('should get status 401', async () => {
        await axios.default
            .get(process.env.URL + '/api/user/me')
            .catch(function (error) {
                expect(error.request.status).toBe(401)
            })
    });
});