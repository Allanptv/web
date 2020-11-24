import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader } from 'antd';
import MainMenu from './../common/menu'
import './Home.css';

const Home = (props) => {
  const [mapa, setMapa] = useState(null);

  useEffect(() => {}, []);

  
  return (
    <React.Fragment>
      <MainMenu/>
      <PageHeader ghost={false} title="Página Inicial" />
    </React.Fragment>
  );
};

export default Home;
