import api from './api'

async function CadastrarCliente(dadosCliente){
    const data = {
        cliente: dadosCliente
    }
    JSON.stringify(data)
    
    const response = await api.post('/clients', data)

    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { CadastrarCliente }