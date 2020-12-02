import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Button } from 'antd';
import NavigationBar from '../../common/Header/header'
import {Footer} from '../../common/Footer/footer'
import { ListarVendasService } from '../../services/listarVendasService'
import { GetClient } from '../../services/getClient'
import { GetProduct } from '../../services/getProduct'
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


const Sells = (props) => {

    let history = useHistory();
  
    if(Math.floor((Date.now() - localStorage.getItem("session"))/60000) > 30){
      localStorage.clear()
      history.push('/')
    }

    const [response, setResponse] = useState([]);
    const [pageTable, setPageTable] = useState([]);

    const vendas = [
        {
            code: 0,
            client: " ",
            product: " ",
            sale_date: " ",
            status: 0,
            price: 0.0,
        }
    ];
    
    useEffect(() => {
      listarProdutos()
    }, []);

    async function listarProdutos(){
        const response = await ListarVendasService()
        
        response.map((item) => {
            vendas[item.code].code = item.code;
            vendas[item.code].client = GetClient(item.client_id)
            vendas[item.code].product = GetProduct(item.product_id).product.id
            //vendas[item.code].categories = GetProduct(item.product_id).categories[0]
            vendas[item.code].sale_date = item.sale_date;
            vendas[item.code].status = item.status;
            vendas[item.code].price = item.price;
        })
        console.log(vendas)
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

    

    const productTable = [
        {
            title: 'Cód',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Cliente',
            dataIndex: 'client',
            key: 'client'
        },
        {
            title: 'Produto',
            dataIndex: 'product',
            key: 'product'
        },
        {
            title: 'Data da venda',
            dataIndex: 'sale_date',
            key: 'sale_date'
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price'
        },
    ]

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    const classes = useStyles();
    function productDescription(){
        return(
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="right">Código</StyledTableCell>
                            <StyledTableCell align="right">Nome</StyledTableCell>
                            <StyledTableCell align="right">Categoria</StyledTableCell>
                            <StyledTableCell align="right">Descrição</StyledTableCell>
                            <StyledTableCell align="right">Preço</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.name}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right">{row.protein}</StyledTableCell>
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
                <div className="sell_container">
                    <div className="sells_title">
                        <div className="sell_title"><h1>Vendas</h1></div>
                        <Link to="/sells/create" className="new_sell_button">
                            <Button renderAs="button">
                                <span>+ Vendas</span>
                            </Button>
                        </Link>
                    </div>
                    
                    <div>
                        {productDescription()}
                    </div>
                </div>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default Sells;
