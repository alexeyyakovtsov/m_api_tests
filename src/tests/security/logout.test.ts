import * as axios from 'axios'
import * as token from '../../helpers/token'
import * as dotenv from 'dotenv'

dotenv.config()

describe('Security - Logout', () => {

    it('should have content-type property ', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/security/logout', {
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

    it('should get status 200 ', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/security/logout', {
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

    it('should get status 401 ', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/security/logout')
            .catch(function (error) {
                expect(error.request.status).toBe(401)
            })
    });
});