import React, { useState, useEffect } from 'react';
import { Layout, Descriptions, Divider } from 'antd';
import {NavigationBar} from '../../common/Header/header'
import {Footer} from '../../common/Footer/footer'
import { ListarClienteService } from '../../services/listarClienteService'
import './index.css';

const { Content, Header } = Layout 
let index = 0
const Logon = (props) => {

    const [response, setResponse] = useState([]);

    useEffect(() => {
       listarClientes()
    }, []);

    async function listarClientes(){
        let id = "7311e8f3-82c2-4f5c-90bc-3a58eea6a240"
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
      
    <React.Fragment>
        <Layout>
            <NavigationBar/>
            <Content>
                
                <div className="page_title">
                    <h1>Clientes</h1>
                </div>
                
                <div>
                {clientDescription()}
                </div>
            </Content>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
