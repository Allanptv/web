import api from './api'

async function LoginService(email, password){
    const data = {
        email: email,
        password: password
    }
    JSON.stringify(data)
    console.log(data)
    const response = await api.get('/users/login', data)

    if(response.data)
        return response.data
    else{
        return [];
    }
}

export default LoginService