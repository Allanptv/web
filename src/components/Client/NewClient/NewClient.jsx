import React, { useState, useEffect } from 'react';
import { Layout, Button, Input, Form } from 'antd';
import NavigationBar from '../../../common/Header/header'
import {Footer} from '../../../common/Footer/footer'
import { CadastrarCliente } from '../../../services/cadastrarCliente'
import { useHistory } from "react-router-dom";
import './index.css';


const { Content } = Layout 

const NewClient = (props) => {

    const [name, setName] = useState('')
    const [lastname, setSobrenome] = useState('')
    const [completName, setCompletName] = useState('')
    const [address, setEndereco] = useState('')
    const [phone_number, setTelefone] = useState('')
    const [email, setemail] = useState('')

    let user_id = localStorage.getItem("user_id");
    let history = useHistory();
  
    if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
      localStorage.clear()
      history.push('/')
    }


  async function handleClick(e){
    e.preventDefault();
    setCompletName(name + " " + lastname);
    const cliente = {
        user_id,
        name, 
        email, 
        phone_number,
        address,
    };
    const result = await CadastrarCliente(cliente)
    history.push('/clients')
  }


  return (
    <React.Fragment>
        <Layout>
            <NavigationBar/>
            <Content>
                <div className="card-new_client">
                    <div className="card-header-new_client"><h3>Cadastrar Cliente</h3></div>
                    <form onSubmit={handleClick} className="form-new_client">
                            <div className="third_row">
                                <div className="input_new_client">
                                    <h1 className="text-new_client">Nome: </h1>
                                    <input placeholder="Nome" value={name} onChange={e => setName(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_client">
                                    <h1 className="text-new_client">Sobrenome </h1>
                                    <input placeholder="Sobrenome" value={lastname} onChange={e => setSobrenome(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_client">
                                    <h1 className="text-new_client">Email </h1>
                                    <input placeholder="Email" value={email} onChange={e => setemail(e.currentTarget.value)} />
                                </div>
                            </div>
                            <div className="second_row">
                                <div className="input_new_client">
                                    <h1 className="text-new_client">Endereço: </h1>
                                    <input placeholder="Endereço" value={address} onChange={e => setEndereco(e.currentTarget.value)} />
                                </div>
                                <div className="input_new_client">
                                    <h1 className="text-new_client">Telefone: </h1>
                                    <input placeholder="Telefone" value={phone_number} onChange={e => setTelefone(e.currentTarget.value)} />
                                </div>
                            </div>
                        <button className="button-new_client" type="submit">Cadastrar</button>
                    </form>
                </div>
            </Content>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default NewClient;
