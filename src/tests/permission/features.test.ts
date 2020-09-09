import * as axios from 'axios'
import * as dotenv from 'dotenv'
import * as token from '../../helpers/token'

dotenv.config()

describe('Permission - Features', () => {
    
    it('should have content-type property', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/permission/features', {
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

    it('should get valid features property', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/permission/features', {
                headers: {
                    'Authorization': `Bearer ${tok}`
                }
            })
            .then(function (response) {
                expect(response.data[0]).toHaveProperty("name")
                expect(response.data[0]).toHaveProperty("title")
                expect(response.data[0]).toHaveProperty("category")
                expect(response.data[0]).toHaveProperty("value")
            })
            .catch((error) => {
                console.log(error)
            })
    });

    it('should get status 200', async () => {
        const tok = await token.get_token()
        await axios.default
            .get(process.env.URL + '/api/permission/features', {
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

    it('should get status 401', async () => {
        await axios.default
            .get(process.env.URL + '/api/permission/features')
            .catch(function (error) {
                expect(error.request.status).toBe(401)
            })
    });
});