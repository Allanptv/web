import api from './api'

async function CadastrarCliente(dadosCliente){
    JSON.stringify(dadosCliente)
    
    const response = await api.post('/clients', dadosCliente)

    if(response.dadosCliente)
        return response.dadosCliente
    else{
        return [];
    }
}

export { CadastrarCliente }