import api from './api'

async function CadastrarProduto(dadosProduto){
    const data = {
        product: dadosProduto,
        categories: []
    }
    JSON.stringify(data)
    
    const response = await api.post('/products', data)

    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { CadastrarProduto }