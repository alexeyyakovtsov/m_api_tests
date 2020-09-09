import * as axios from 'axios'
import * as dotenv from 'dotenv'

dotenv.config()

export async function get_token(){
    const response = await axios.default
        .post(process.env.URL + '/api/security/token', {
            "username": process.env.EMAIL,
            "password": process.env.PASSWORD
        })

    return response.data["accessToken"]
}