import React, { useState, useEffect } from 'react';
import { Layout, Descriptions, Divider} from 'antd';
import {Link} from 'react-router-dom';
import NavigationBar from '../../common/Header/header'
import {Footer} from '../../common/Footer/footer'
import { ListarClienteService } from '../../services/listarClienteService'
import { useHistory } from "react-router-dom";
import './index.css';


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


const { Content, Header } = Layout 
let index = 0
const Logon = (props) => {

    const [response, setResponse] = useState([]);

    let history = useHistory();
  
    if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
      localStorage.clear()
      history.push('/')
    }

    useEffect(() => {
       listarClientes()
    }, []);

    async function listarClientes(){
        let id = localStorage.getItem("user_id")
        const response = await ListarClienteService(id)
        console.log(response);
        if(response != null){
            setResponse(response)
        }
    }
    if (index == 0){
        listarClientes()
        index = index+1;
    }

    function MediaCard() {
        const classes = useStyles();
        let index = -1
        return response.map((item) => {
            index++;
            return (
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image= {process.env.PUBLIC_URL + "/image("+index+").jfif"}
                      title={item.email}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                          {item.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                          Telefone: {item.phone_number}
                          Endereço: {item.address}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button className="button_verMais" size="small" color="primary">
                      Ver mais
                    </Button>
                  </CardActions>
                </Card>
            )
        })
    }
      
  return (
    <React.Fragment >
        <Layout>
            <NavigationBar/>
            <Content>
                <div className="client_container">
                    <div className="clients_title">
                        <div className="client_title"><h1>Clientes</h1></div>
                        <Link to="/clients/create" className="new_client_button">
                            <button>
                                <span>+ Cliente</span>
                            </button>
                        </Link>
                    </div>
                    <div className="client_card">
                    {MediaCard()}
                    </div>
                </div>
            </Content>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};


export default Logon;
