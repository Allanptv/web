import api from './api'

async function SignUpService(name, email, password){

    const data = {
        name: name,
        email: email,
        password: password
    }
    JSON.stringify(data)
    const response = await api.post('/users', data)

    if(response.data)
        return response.data
    else{
        return [];
    }
}

export default SignUpService