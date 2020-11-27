import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import { CadastrarProduto } from '../services/cadastrarProduto'
import './Home.css';


const { Content } = Layout 

const NewProduct = (props) => {

    const [name, setName] = useState('')
    const [lName, setLName] = useState('')
    const [price, setPrice] = useState(0.0)
    const [sale_date, setSale_date] = useState('')
    const [weight, setWeight] = useState(0.0)
    const [brand, setBrand] = useState('')
    const [stock_amount, setStock_amount] = useState(0)
    const [] = useState()



  useEffect(() => {}, []);

  async function handleClick(){
    const produto = {
        name, 
        code: 1,
        lName, 
        price, 
        sale_date, 
        weight, 
        brand, 
        stock_amount
    };
    const result = await CadastrarProduto(produto)
  }


  return (
    <React.Fragment>
        <Layout>
            <Content>
                <div className="login_title">
                    <h3 >Novo Produto</h3>
                </div>
                <Form>
                    <Form.Item
                        label="Nome"
                        name="nome"
                        rules={[{required: true, message: 'Insira o nome do produto'}]}
                    >
                        <Input onChange={e => setName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Sobrenome"
                        name="sobrenome"
                        rules={[{required: false, message: 'Insira o sobrenome'}]}
                    >
                        <Input onChange={e => setLName(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Nome do Produto"
                        name="nome produto"
                        rules={[{required: true, message: 'Insira o produto'}]}
                    >
                        <Input onChange={e => setPrice(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Quantidade"
                        name="quantidade"
                        rules={[{required: true, message: 'Insira a quantidade'}]}
                    >
                        <Input onChange={e => setSale_date(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Data da venda"
                        name="sale_date"
                        rules={[{required: true, message: 'Insira a data da venda'}]}
                    >
                        <Input onChange={e => setWeight(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Preço"
                        name="preco"
                        rules={[{required: true, message: 'Insira o preço'}]}
                    >
                        <Input onChange={e => setBrand(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Desconto"
                        name="desconto"
                        rules={[{required: true, message: 'Insira a desconto'}]}
                    >
                        <Input onChange={e => setStock_amount(e.target.value)}/>
                    </Form.Item>
                    <Form.Item
                        label="Frete"
                        name="frete"
                        rules={[{required: true, message: 'Insira o frete'}]}
                    >
                        <Input onChange={e => setStock_amount(e.target.value)}/>
                    </Form.Item>
                    <Button onClick={() => handleClick()}>Cadastrar</Button>
                </Form>
                
                
                {/* <div className="body">
                    <Card className="card_login">
                        <div className="login_title">
                            <h3 >Login</h3>
                        </div>
                        <p>Nome de Usuário / Email: </p>
                        <Input placeholder="Usuário" prefix={<UserOutlined />} />
                        <p>Senha: </p>
                        <Input placeholder="Senha" prefix={<LockOutlined />} />
                        <Button>Entrar</Button>
                        <div className="login_footer">
                            <p>Ainda não possui uma conta? </p> <a>Cadastre-se</a>
                        </div>
                    </Card>
                </div> */}
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default NewProduct;
