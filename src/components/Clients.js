import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input, Row, Col, Descriptions, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import { ListarClienteService } from '../services/listarClienteService'
import './Home.css';

const { Content, Header } = Layout 

const Logon = (props) => {

    const [response, setResponse] = useState([]);

    useEffect(() => {
      listarClientes()
    }, []);

    async function listarClientes(){
        const response = await ListarClienteService()
        setResponse(response)
    }

    function clientDescription(){
        // const response = await ListarClienteService()
        return response.map((item) => {
            return(
                <div>
                    <Divider style={{ borderTop: '1px solid #444444'}} />
                    <Descriptions title="Dados do cliente">
                    <Descriptions.item label="Nome: " span={3}>{item.name}</Descriptions.item>
                        {/* <img></img> */}
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
            {/* <MainMenu/> */}
            <Content>
                
                <div className="page_title">
                    <h1>Clientes</h1>
                </div>
                
                <div>
                {clientDescription()}
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
