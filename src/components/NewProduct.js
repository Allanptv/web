import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input, Form } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import { CadastrarProduto } from '../services/cadastrarProduto'
import './CreateProduct.css';


const { Content } = Layout 

const NewProduct = (props) => {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0.0)
    const [color, setColor] = useState('')
    const [weight, setWeight] = useState(0.0)
    const [brand, setBrand] = useState('')
    const [stock_amount, setStock_amount] = useState(0)



  useEffect(() => {}, []);

  async function handleClick(){
    const produto = {
        name, 
        code: 1,
        description, 
        price, 
        color, 
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
                    <h3>Novo Produto</h3>
                </div>
                <Form className="card_login">
                        <div className="divI1">
                            <Form.Item
                            label="Nome"
                            name="nome"
                            rules={[{required: true, message: 'Insira o nome do produto'}]}>
                            <Input className="inputt" onChange={e => setName(e.target.value)}/>
                            </Form.Item>
                        </div>
                        <div className="divI2">
                            <Form.Item
                            label="Descrição"
                            name="descricao"
                            rules={[{required: false, message: 'Insira a descrição (Opcional)'}]}>
                            <Input className="inputt" onChange={e => setDescription(e.target.value)}/>
                            </Form.Item>
                        </div>
                        <div className="divI3">
                            <Form.Item
                                label="Preço"
                                name="preco"
                                rules={[{required: true, message: 'Insira o preço'}]}
                            >
                                <Input onChange={e => setPrice(parseFloat(e.target.value))}/>
                            </Form.Item>
                        </div>
                        <div className="divI4">
                            <Form.Item
                                label="Cor"
                                name="cor"
                                rules={[{required: true, message: 'Insira a cor'}]}
                            >
                                <Input onChange={e => setColor(e.target.value)}/>
                            </Form.Item>
                        </div>
                        <div className="divI5">
                        <Form.Item
                            label="Peso"
                            name="peso"
                            rules={[{required: true, message: 'Insira o peso'}]}
                        >
                            <Input  onChange={e => setWeight(parseFloat(e.target.value))}/>
                        </Form.Item>
                        </div>


                        <div className="divI6">
                            <Form.Item
                                label="Modelo"
                                name="modelo"
                                rules={[{required: true, message: 'Insira o modelo'}]}
                            >
                                <Input  onChange={e => setBrand(e.target.value)}/>
                            </Form.Item>
                        </div>
                        <div className="divI7">
                            <Form.Item
                                label="Quantidade de itens"
                                name="quantidade"
                                rules={[{required: true, message: 'Insira a quantidade'}]}
                            >
                                <Input onChange={e => setStock_amount(parseInt(e.target.value))}/>
                            </Form.Item>
                        </div>
                    <div className="divBtn">
                        <Button onClick={() => handleClick()}>Cadastrar</Button>
                    </div>
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
