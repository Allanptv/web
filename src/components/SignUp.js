import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import './Home.css';

const { Content } = Layout 

const Logon = (props) => {

  useEffect(() => {}, []);

  
  return (
      
    <React.Fragment>
        <MainMenu/>
        <Layout>
            <Content>
                <div className="site-card-border-less-wrapper">
                    <Card className="card_login">
                        <div className="login_title">
                            <h3 >Criar Conta</h3>
                        </div>
                        <Input.Group size="large">
                            <Row gutter={8}>
                                <Col span={5}>
                                    <p>Nome: </p>
                                    <Input placeholder="Nome"  />
                                </Col>
                                <Col span={3}>
                                    <p>Sobrenome: </p>
                                    <Input placeholder="Sobrenome"  />
                                </Col>
                            </Row>
                        </Input.Group>
                        <p>Email: </p>
                        <Input placeholder="Email"/>
                        <p>Senha: </p>
                        <Input placeholder="Senha"/>
                        <br/>
                        <Button>Cadastrar</Button>
                    </Card>
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
