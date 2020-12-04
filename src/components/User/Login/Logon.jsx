import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Card, Button, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';

import LoginService from '../../../services/login'

import { useHistory } from "react-router-dom";

const { Content } = Layout 

const Logon = (props) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  let history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try{
        let res = await LoginService(email, password);
        
        if(res != []){
            localStorage.setItem('user_id', res);
            localStorage.setItem('session', Date.now());
            history.push('/home')
        }
    }catch(err){
        console.log('ERRO: ',err.message)
    }
  }
  
  return (
    <React.Fragment>
        <Layout>
            <Content>
                <div className="card-logon">
                    <div className="card-header-logon">Login</div>
                    <div className="form-logon">
                        <form onSubmit={handleLogin} >
                            <div className="input-logon">
                                <h1 className="text-logon">Email: </h1>
                                <input placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                            </div>
                            <div className="input-logon">
                                <h1 className="text-logon">Senha: </h1>
                                <input type="password" placeholder="Senha"value={password} onChange={e => setPassword(e.currentTarget.value)}/>
                            </div>
                            <button className="button-logon" type="submit">Entrar</button>
                        </form>
                    </div>
                    <div className="card-footer-logon">
                        <span>Ainda não possui uma conta? </span>
                        <Link to="/signUp">
                                <span>Cadastre-se</span>
                        </Link>
                    </div>
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
