import api from './api'

async function GetClient(id){
    const response = await api.get(`/client/${id}`)
    debugger
    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { GetClient }