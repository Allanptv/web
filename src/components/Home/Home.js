import React, { useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import NavigationBar from '../../common/Header/header'
import { useHistory } from "react-router-dom";
import './index.css';

const Home = (props) => {
  
  let history = useHistory();
  
  if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
    localStorage.clear()
    history.push('/')
  }
  
  return (
    <React.Fragment>
      <NavigationBar/>
      <PageHeader ghost={false} title="Página Inicial" />
    </React.Fragment>
  );
};

export default Home;
