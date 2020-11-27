import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input, Row, Col, Descriptions, Divider, Table } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import { ListarVendasService } from '../services/listarVendasService'
import { GetClient } from '../services/getClient'
import { GetProduct } from '../services/getProduct'
import './Home.css';

const { Content, Header } = Layout 

const Sells = (props) => {

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
            vendas[item.code].product = GetProduct(item.product_id)
            vendas[item.code].sale_date = item.sale_date;
            vendas[item.code].status = item.status;
            vendas[item.code].price = item.price;
        })
        
        setResponse(response)
        setPageTable(1);
    }

    

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

    function productDescription(){
        // const response = await ListarClienteService()
        
            return(
                <div>
                    <Divider style={{ borderTop: '1px solid #444444'}} />
                    {response && <Table 
                        size="small"
                        pagination={
                            (true,
                            {
                                current: pageTable,
                                pageSizeOptions: [10,20,50],
                                defaultPageSize: 10,
                                defaultPage: 1,
                            })
                        }
                        rowKey="id"
                        dataSource={vendas}
                        columns={productTable}
                        />
                    }
                    {/* <Descriptions title="Dados do cliente">
                    <Descriptions.item label="Nome: " span={3}>{item.name}</Descriptions.item> */}
                        {/* <img></img> */}
                        {/* <Descriptions.item label="Email: " span={3}>{item.email}</Descriptions.item>
                        <Descriptions.item label="Telefone: " span={3}>{item.phone_number}</Descriptions.item>
                        <Descriptions.item label="Endereço: " span={3}>{item.address}</Descriptions.item>
                    </Descriptions> */}
                </div>
            )
        
    }

  
  return (
      
    <React.Fragment>
        <Layout>
            {/* <MainMenu/> */}
            <Content>
                
                <div className="page_title">
                    <h1>Vendas</h1>
                    <Link to="/newSell">
                        <Button renderAs="button">
                            <span>Vendas</span>
                        </Button>
                    </Link>
                </div>
                
                <div>
                {productDescription()}
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Sells;
