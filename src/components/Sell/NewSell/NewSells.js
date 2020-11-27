import React, { useState, useEffect } from 'react';
import { Layout, Button, Input, Form } from 'antd';
import {NavigationBar} from '../../../common/Header/header'
import {Footer} from '../../../common/Footer/footer'
import { CadastrarProduto } from '../../../services/cadastrarProduto'
import './index.css';


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
            <NavigationBar/>
            <Content>
                <div className="login_title">
                    <h3 >Cadastras Venda</h3>
                </div>
                <Form className="card_login"> 
                    <div className="divI1">
                        <Form.Item
                            label="Nome"
                            name="nome"
                            rules={[{required: true, message: 'Insira o nome do produto'}]}
                        >
                            <Input onChange={e => setName(e.target.value)}/>
                        </Form.Item>
                    </div>
                    <div className="divI2">
                        <Form.Item
                            label="Sobrenome"
                            name="sobrenome"
                            rules={[{required: false, message: 'Insira o sobrenome'}]}
                        >
                            <Input onChange={e => setLName(e.target.value)}/>
                        </Form.Item>
                    </div>
                    <div className="divI3">
                        <Form.Item
                            label="Nome do Produto"
                            name="nome produto"
                            rules={[{required: true, message: 'Insira o produto'}]}
                        >
                            <Input onChange={e => setPrice(e.target.value)}/>
                        </Form.Item>
                    </div>
                    <div className="divI4">
                        <Form.Item
                            label="Quantidade"
                            name="quantidade"
                            rules={[{required: true, message: 'Insira a quantidade'}]}
                        >
                            <Input onChange={e => setSale_date(e.target.value)}/>
                        </Form.Item>
                    </div>
                    <div className="divI5">
                        <Form.Item
                            label="Data da venda"
                            name="sale_date"
                            rules={[{required: true, message: 'Insira a data da venda'}]}
                        >
                            <Input onChange={e => setWeight(e.target.value)}/>
                        </Form.Item>
                    </div>
                    <div className="divI6">
                        <Form.Item
                            label="Preço"
                            name="preco"
                            rules={[{required: true, message: 'Insira o preço'}]}
                        >
                            <Input onChange={e => setBrand(e.target.value)}/>
                        </Form.Item>
                    </div>
                    <div className="divI7">
                        <Form.Item
                            label="Desconto"
                            name="desconto"
                            rules={[{required: true, message: 'Insira a desconto'}]}
                        >
                            <Input onChange={e => setStock_amount(e.target.value)}/>
                        </Form.Item>
                    </div>
                    <div className="divI8">
                        <Form.Item
                            label="Frete"
                            name="frete"
                            rules={[{required: true, message: 'Insira o frete'}]}
                        >
                            <Input onChange={e => setStock_amount(e.target.value)}/>
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
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default NewProduct;
