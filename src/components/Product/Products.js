import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Button} from 'antd';
import NavigationBar from '../../common/Header/header'
import {Footer} from '../../common/Footer/footer'
import { ListarProdutosService } from '../../services/listarProdutosService'
import { useHistory } from "react-router-dom";
import './index.css';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const { Content, Header } = Layout 

const Products = (props) => {
    
    const [response, setResponse] = useState([]);
    const [pageTable, setPageTable] = useState(1);

    let history = useHistory();
  
    if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
      localStorage.clear()
      history.push('/')
    }

    useEffect(() => {
       listarProdutos()
    }, []);

    async function listarProdutos(){
        const response = await ListarProdutosService()
        
        setResponse(response)
        setPageTable(1);
    }

    const StyledTableCell = withStyles((theme) => ({
        head: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        body: {
          fontSize: 14,
        },
      }))(TableCell);
      
      const StyledTableRow = withStyles((theme) => ({
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow);

      const useStyles = makeStyles({
        table: {
          minWidth: 700,
      },
    });


    let rows = [{}]
    
    response.map((item) => {
        console.log(item)
        let code = item[0].code
        let name = item[0].name
        let description = item[0].description
        let price = item[0].price
        rows.push({
                code,
                name,
                description,
                price
        })
    })

    const classes = useStyles();
    function productDescription(){
        return(
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Código</StyledTableCell>
                            <StyledTableCell align="right">Nome</StyledTableCell>
                            <StyledTableCell align="right">Descrição</StyledTableCell>
                            <StyledTableCell align="right">Preço</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.code}>
                                <StyledTableCell align="right">{row.code}</StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.description}</StyledTableCell>
                                <StyledTableCell align="right">{row.price}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }

  
  return (
      
    <React.Fragment>
        <Layout>
            <NavigationBar/>
            <Content>
                <div className="product_container">
                    <div className="products_title">
                        <div className="product_title"><h1>Produtos</h1></div>
                        <Link to="/products/create" className="new_product_button">
                            <Button renderAs="button">
                                <span>+ Produtos</span>
                            </Button>
                        </Link>
                    </div>
                    
                    <div>
                    {productDescription()}
                    </div>
                </div>
            </Content>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default Products;
