import api from './api'

async function ListarClienteService(id){
    const response = await api.get(`/clients/${id}`)
    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { ListarClienteService }