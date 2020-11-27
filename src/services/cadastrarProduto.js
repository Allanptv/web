import api from './api'

async function CadastrarProduto(dadosProduto){
    const data = {
        product: dadosProduto,
        categories: []
    }
    JSON.stringify(data)
    console.log(data)
    const response = await api.post(`/products`, data)
    console.log(response)
    // fetch(`http://localhost:8080/products`, {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json'
    //     },
    //     body: data
    // })

    if(response.data)
        return response.data
    else{
        return [];
    }
}

export { CadastrarProduto }