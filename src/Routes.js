import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import RouteWithLayout from './components/RouteWithLayout';

import Master from "./components/Master";
import Logon from './components/Logon';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Client from './components/Clients';
import Products from './components/Products';

const initialPath = '/Estocy';

const paths = {
  index: initialPath + '/',
  home: initialPath + '/home',
  signUp: initialPath + '/signUp',
  teste: initialPath + '/teste'
};

export { paths };


const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Logon}/>
      <Route exact path='/signUp' component={SignUp}/>
      <Route exact path='/clients' component={Client}/>
      <Route exact path='/products' component={Products}/>
      {/* <RouteWithLayout
        component={Logon}
        exact
        layout={Master}
        StepName="Logon"
        StepValue={3}
        path={paths.index}
      />
      <RouteWithLayout
        component={Home}
        exact
        layout={Master}
        StepName="Home"
        StepValue={3}
        to={paths.home}
      /> */}
      
    </Switch>
  );
};

export default Routes;