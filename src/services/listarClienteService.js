import api from './api'

async function ListarClienteService(){
    const response = await api.get('/clients')
    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { ListarClienteService }