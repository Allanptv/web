import api from './api'

async function ListarVendasService(){
    const response = await api.get('/requests')
    debugger
    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { ListarVendasService }