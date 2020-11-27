import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import './Home.css';

const { Content } = Layout 

const Logon = (props) => {

  useEffect(() => {}, []);

  function handleClick(e){
    var win = window.open(`${process.env.PUBLIC_URL}/clients`, '_blank');
    if (win.focus) {
        win.focus();
    }
}

  return (
    <React.Fragment>
        <Layout>
            <Content>
                <div className="site-card-border-less-wrapper">
                    <Card className="card_login">
                        <div className="login_title">
                            <h3 >Login</h3>
                        </div>
                        <p className="text">Nome de Usuário / Email: </p>
                        <Input placeholder="Usuário" prefix={<UserOutlined />} />
                        <p className="text" >Senha: </p>
                        <div className="div1">
                            <Input.Password placeholder="Senha" prefix={<LockOutlined />} />
                            <Button onClick={(e) => handleClick()}>Entrar</Button>
                        </div>
                        <div className="login_footer">
                            <p>Ainda não possui uma conta? </p><Button type="link">Cadastre-se</Button>
                        </div>
                    </Card>
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
