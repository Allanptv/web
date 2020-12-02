import React, { useState, useEffect } from 'react';
import { Layout, Button, Input, Form } from 'antd';
import NavigationBar from '../../../common/Header/header'
import {Footer} from '../../../common/Footer/footer'
import { CadastrarVenda } from '../../../services/cadastrarVenda'
import { useHistory } from "react-router-dom";
import './index.css';


const { Content } = Layout 

const NewSells = (props) => {

    const [nameClient, setName] = useState('')
    const [lNameClient, setLName] = useState('')
    const [nameProduct, setNameProduct] = useState('')
    const [numberItens, setNumberItens] = useState('')
    const [sale_date, setSale_date] = useState('')
    const [price, setPrice] = useState(0.0)
    const [off, setOff] = useState(0.0)
    const [freight, setFreight] = useState('')

    let history = useHistory();
  
    if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
      localStorage.clear()
      history.push('/')
    }


  useEffect(() => {}, []);

  async function handleClick(){
    const venda = {
        nameClient, 
        lNameClient,
        nameProduct, 
        numberItens, 
        sale_date, 
        price, 
        off,
        freight 
    };
    const result = await CadastrarVenda(venda)
  }


  return (
    <React.Fragment>
        <Layout>
            <NavigationBar/>
            <Content>
                <div className="card-new_sale">
                    <div className="card-header-new_sale"><h3>Cadastrar Venda</h3></div>
                    <form onSubmit={handleClick} className="form-new_sale">
                            <div className="first_row">
                                <div className="input_new_sale">
                                    <h1 className="text-new_sale">Nome Cliente: </h1>
                                    <input placeholder="Nome Cliente" value={nameClient} onChange={e => setName(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_sale">
                                    <h1 className="text-new_sale">Sobrenome Cliente: </h1>
                                    <input placeholder="Sobrenome Cliente" value={lNameClient} onChange={e => setLName(e.currentTarget.value)} />
                                </div>
                            </div>
                            <div className="second_row">
                                <div className="input_new_sale">
                                    <h1 className="text-new_sale">Nome produto: </h1>
                                    <input placeholder="Nome produto" value={nameProduct} onChange={e => setNameProduct(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_sale">
                                    <h1 className="text-new_sale">Numero de itens: </h1>
                                    <input placeholder="Numero de itens" value={numberItens} onChange={e => setNumberItens(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_sale">
                                    <h1 className="text-new_sale">Data da Venda: </h1>
                                    <input placeholder="Data da Venda" value={sale_date} onChange={e => setSale_date(e.currentTarget.value)} />
                                </div>
                            </div>
                            <div className="third_row">
                                <div className="input_new_sale">
                                        <h1 className="text-new_sale">Preço: </h1>
                                        <input placeholder="Preço" value={price} onChange={e => setPrice(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_sale">
                                    <h1 className="text-new_sale">Desconto: </h1>
                                    <input placeholder="Desconto" value={off} onChange={e => setOff(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_sale">
                                    <h1 className="text-new_sale">Frete: </h1>
                                    <input placeholder="Frete" value={freight} onChange={e => setFreight(e.currentTarget.value)} />
                                </div>
                            </div>
                        <button className="button-new_sale" type="submit">Cadastrar</button>
                    </form>
                </div>
            </Content>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default NewSells;
