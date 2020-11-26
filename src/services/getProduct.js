import api from './api'

async function GetProduct(id){
    const response = await api.get(`/product/${id}`)
    debugger
    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { GetProduct }