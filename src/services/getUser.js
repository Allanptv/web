import api from './api'

async function GetUser(id){
    const response = await api.get(`/users/${id}`)
    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { GetUser }