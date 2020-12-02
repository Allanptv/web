import api from './api'

async function CadastrarVenda(dadosVenda){
    const data = {
        sells: dadosVenda,
        categories: []
    }
    JSON.stringify(data)
    
    const response = await api.post('/sells', data)

    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { CadastrarVenda }