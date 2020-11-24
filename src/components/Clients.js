import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import './Home.css';

const { Content } = Layout 

function clientDescription(){
    return(
        <div className="site-card-border-less-wrapper">
            <Card className="card_client">
                <p>Nome do cliente</p>
                {/* <img></img> */}
                <p>Email</p>
                <p>Telefone</p>
                <p>Endereço</p>
            </Card>
        </div>
    )
}

const Logon = (props) => {

  useEffect(() => {}, []);

  
  return (
      
    <React.Fragment>
        <Layout>
            <Content>
                <div className="page_title">
                    <h1>Clientes</h1>
                </div>
                <div>
                {clientDescription}
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
