import React, { useState, useEffect } from 'react';
import { PageHeader, Layout } from 'antd';
import NavigationBar from '../../common/Header/header'
import { useHistory } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import './index.css';
import { LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend } from 'recharts';

  const { Content } = Layout 

  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: '100px',
      display: 'grid',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: '#674278',
      borderRadius: '20px'
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(0)',
    },
    title: {
      color: '#FFF',
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }));


const Home = (props) => {
  const classes = useStyles();

  const data = [
    {name: 'Janeiro', vendas: 24, amt: 2400},
    {name: 'Fevereiro', vendas: 14, amt: 2210},
    {name: 'Março', vendas: 98, amt: 2290},
    {name: 'Abril', vendas: 39, amt: 2000},
    {name: 'Maio', vendas: 48, amt: 2181},
  ];

  const tileData = [
    {
      img: process.env.PUBLIC_URL + "/images.jpg",
      title: 'Image',
      author: 'author',
    },
    {
      img: process.env.PUBLIC_URL + "/images.jpg",
      title: 'Image',
      author: 'author',
    },
    {
      img: process.env.PUBLIC_URL + "/images.jpg",
      title: 'Image',
      author: 'author',
    },
  ];

  let history = useHistory();
  
  if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
    localStorage.clear()
    history.push('/')
  }
  
  return (
    <React.Fragment>
      <Layout>
        <NavigationBar/>
        <Content>
          {/* <div className='carousel'> */}
           {/* <div className={classes.root}>
              <GridList className={classes.gridList} cols={1.2}>
                {tileData.map((tile) => (
                  <GridListTile key={tile.img}>
                    <img src={tile.img} alt={tile.title} />
                    <GridListTileBar
                      title={tile.title}
                      classes={{
                        root: classes.titleBar,
                        title: classes.title,
                      }}
                    />
                  </GridListTile>
                ))}
              </GridList>
            </div> */}
          {/* </div> */}
          <div className='grafico_container'>
            <h1>Histórico de Vendas nos últimos meses</h1>
            <div className="grafico">
              <LineChart
                width={600}
                height={300}
                data={data}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}
                >
                <Line
                  type='monotone'
                  dataKey='vendas'
                  stroke='#8884d8'
                  activeDot={{r: 8}}
                  />
                <CartesianGrid strokeDasharray='3 3'/>
                <Tooltip/>
                <YAxis/>
                <XAxis dataKey='name'/>
                <Legend />
              </LineChart>
            </div>
          </div>
        </Content>
      </Layout>
    </React.Fragment>
  );
};

export default Home;
