import api from './api'

async function CadastrarProduto(dadosProduto){
    const data = {
        product: dadosProduto
    }
    console.log(dadosProduto)
    // const response = await api.post(`/products`, data)
    fetch(`http://localhost:8000/products`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    })

    // if(response.data)
    //     return response.data
    // else{
    //     return [];
    // }
}

export { CadastrarProduto }