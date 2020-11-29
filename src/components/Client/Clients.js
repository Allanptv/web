import React, { useState, useEffect } from 'react';
import { Layout, Descriptions, Divider, Button } from 'antd';
import {Link} from 'react-router-dom';
import NavigationBar from '../../common/Header/header'
import {Footer} from '../../common/Footer/footer'
import { ListarClienteService } from '../../services/listarClienteService'
import { useHistory } from "react-router-dom";
import './index.css';


const { Content, Header } = Layout 
let index = 0
const Logon = (props) => {

    const [response, setResponse] = useState([]);

    let history = useHistory();
  
    if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
      localStorage.clear()
      history.push('/')
    }

    useEffect(() => {
       listarClientes()
    }, []);

    async function listarClientes(){
        let id = localStorage.getItem("user_id")
        const response = await ListarClienteService(id)
        setResponse(response)
    }
    if (index == 0){
        listarClientes()
        index = index+1;
    }

    function clientDescription(){
        return response.map((item) => {
            return(
                <div>
                    <Divider style={{ borderTop: '1px solid #444444'}} />
                    <Descriptions title="Dados do cliente">
                    <Descriptions.item label="Nome: " span={3}>{item.name}</Descriptions.item>
                    <Descriptions.item label="Email: " span={3}>{item.email}</Descriptions.item>
                    <Descriptions.item label="Telefone: " span={3}>{item.phone_number}</Descriptions.item>
                    <Descriptions.item label="Endereço: " span={3}>{item.address}</Descriptions.item>
                    </Descriptions>
                </div>
            )
        })
    }

  
  return (
      
    <React.Fragment >
        <Layout>
            <NavigationBar/>
            <Content>
                <div className="client_container">
                    <div className="clients_title">
                        <div className="client_title"><h1>Clientes</h1></div>
                        <Link to="/clients/create" className="new_client_button">
                            <Button renderAs="button">
                                <span>+ Cliente</span>
                            </Button>
                        </Link>
                    </div>
                
                    <div>
                    {clientDescription()}
                    </div>
                </div>
            </Content>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
