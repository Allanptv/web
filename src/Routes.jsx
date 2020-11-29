import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Master from "./components/Master";

import Logon from './components/User/Login/Logon';

import SignUp from './components/User/SignUp/SignUp';

import Home from './components/Home/Home';

import Client from './components/Client/Clients';
import CreateClient from './components/Client/NewClient/NewClient';


import Products from './components/Product/Products';
import CreateProduct from './components/Product/NewProduct/NewProduct';

import Sells from './components/Sell/Sells';
import NewSell from './components/Sell/NewSell/NewSells';

const initialPath = '/Estocy';

const paths = {
  index: initialPath + '/',
  home: initialPath + '/home',
  signUp: initialPath + '/signUp',
  teste: initialPath + '/teste'
};

export { paths };


export default function Routes(){
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Logon}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/signUp' component={SignUp}/>
        <Route exact path='/clients' component={Client}/>
        <Route exact path='/clients/create' component={CreateClient}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/products/create' component={CreateProduct}/>
        <Route exact path='/sells' component={Sells}/>
        <Route exact path='/sells/create' component={NewSell}/>      
      </Switch>
    </BrowserRouter>
  );
};