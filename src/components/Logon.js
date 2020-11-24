import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import './Home.css';

const { Content } = Layout 

const Logon = (props) => {

  useEffect(() => {}, []);

  
  return (
    <React.Fragment>
        <Layout>
            <Content>
                <div className="site-card-border-less-wrapper">
                    <Card className="card_login">
                        <div className="login_title">
                            <h3 >Login</h3>
                        </div>
                        <p>Nome de Usuário / Email: </p>
                        <Input placeholder="Usuário" prefix={<UserOutlined />} />
                        <p>Senha: </p>
                        <Input placeholder="Senha" prefix={<UserOutlined />} />
                        <Button>Entrar</Button>
                    </Card>
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
