import React, { useState, useEffect } from 'react';
import { PageHeader } from 'antd';
import {NavigationBar} from '../../common/Header/header'
import './index.css';

const Home = (props) => {
  const [mapa, setMapa] = useState(null);

  useEffect(() => {}, []);

  
  return (
    <React.Fragment>
      <NavigationBar/>
      <PageHeader ghost={false} title="Página Inicial" />
    </React.Fragment>
  );
};

export default Home;
