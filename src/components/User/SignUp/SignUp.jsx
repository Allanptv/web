import React, { useState, useEffect } from 'react';
import { Layout, Card, Button, Input, Row, Col } from 'antd';
import './index.css';

import { useHistory } from "react-router-dom";
import SignUpService from '../../../services/signUp'
const { Content } = Layout 



const Logon = (props) => {

  //useEffect(() => {}, []);
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  let history = useHistory();

  async function handleSignIn(e){
    e.preventDefault();
    let fullName= name+" "+lastName
    try{
        let res = await SignUpService(fullName, email, password);

        if(res != []){
            localStorage.setItem('user_id', res.id);
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
                <div className="card-signup">
                    <div className="card-header-signup"><h3 >Criar Conta</h3></div>
                    <div className="form-signup">
                        <form onSubmit={handleSignIn}>
                            <div className="row">
                                <div className="input-signup">
                                    <h1 className="text-signup">Nome: </h1>
                                    <input placeholder="Nome" value={name} onChange={e => setName(e.currentTarget.value)} />
                                </div>
                                <div className="input-signup">
                                    <h1 className="text-signup">Sobrenome: </h1>
                                    <input placeholder="Sobrenome" value={lastName} onChange={e => setLastName(e.currentTarget.value)} />
                                </div>
                            </div>
                            <div className="input-signup">
                                <h1 className="text-signup">Email: </h1>
                                <input placeholder="Email" value={email} onChange={e => setEmail(e.currentTarget.value)} />
                            </div>
                            <div className="input-signup">
                                <h1 className="text-signup">Senha: </h1>
                                <input placeholder="Senha" value={password} onChange={e => setPassword(e.currentTarget.value)} />
                            </div>
                            <button className="button-signup" type="submit">Cadastrar</button>
                        </form>
                    </div>
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Logon;
