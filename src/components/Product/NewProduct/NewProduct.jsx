import React, { useState, useEffect } from 'react';
import { Layout, Button, Input, Form } from 'antd';
import NavigationBar from '../../../common/Header/header'
import {Footer} from '../../../common/Footer/footer'
import { CadastrarProduto } from '../../../services/cadastrarProduto'
import { useHistory } from "react-router-dom";
import './index.css';


const { Content } = Layout 

const NewProduct = (props) => {

    const [name, setName] = useState('')
    const [code, setCode] = useState(0.0)
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0.0)
    const [color, setColor] = useState('')
    const [weight, setWeight] = useState(0.0)
    const [brand, setBrand] = useState('')
    const [stock_amount, setStock_amount] = useState(0)

    let history = useHistory();
  
    if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
      localStorage.clear()
      history.push('/')
    }


  async function handleClick(e){
    e.preventDefault();
    const produto = {
        name, 
        code:Number(code),
        description, 
        price:Number(price), 
        color, 
        weight:Number(weight), 
        brand, 
        stock_amount:Number(stock_amount)
    };
    const result = await CadastrarProduto(produto)
    history.push('/products')
  }


  return (
    <React.Fragment>
        <Layout>
            <NavigationBar/>
            <Content>
                <div className="card-new_product">
                    <div className="card-header-new_product"><h3>Cadastrar Produto</h3></div>
                    <form onSubmit={handleClick} className="form-new_product">
                            <div className="third_row">
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Código: </h1>
                                    <input placeholder="Código" value={code} onChange={e => setCode(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Nome: </h1>
                                    <input placeholder="Nome" value={name} onChange={e => setName(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Descrição(Opcional): </h1>
                                    <input placeholder="Descrição" value={description} onChange={e => setDescription(e.currentTarget.value)} />
                                </div>
                            </div>
                            <div className="second_row">
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Preço: </h1>
                                    <input placeholder="Preço" value={price} onChange={e => setPrice(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Categorias(A FAZER): </h1>
                                    <input placeholder="Categoria" value={name} onChange={e => setName(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Cor: </h1>
                                    <input placeholder="Cor" value={color} onChange={e => setColor(e.currentTarget.value)} />
                                </div>
                            </div>
                            <div className="third_row">
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Modelo: </h1>
                                    <input placeholder="Modelo" value={brand} onChange={e => setBrand(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Peso: </h1>
                                    <input placeholder="Peso" value={weight} onChange={e => setWeight(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_product">
                                    <h1 className="text-new_product">Quantidade: </h1>
                                    <input placeholder="Quantidade" value={stock_amount} onChange={e => setStock_amount(e.currentTarget.value)} />
                                </div>
                            </div>
                        <button className="button-new_product" type="submit">Cadastrar</button>
                    </form>
                </div>
            </Content>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default NewProduct;
