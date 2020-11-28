import api from './api'

async function LoginService(email, pass){

    const response = await api.get(`/users/login/${email}/${pass}`)
    console.log(response)

    if(response.data)
        return response.data
    else{
        return [];
    }
}

export default LoginService