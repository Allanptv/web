import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import { PageHeader, Layout, Card, Button, Input, Row, Col, Descriptions, Divider, Table } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import MainMenu from './../common/menu'
import { ListarProdutosService } from '../services/listarProdutosService'
import './Home.css';

const { Content, Header } = Layout 

const Products = (props) => {

    // const [response, setResponse] = useState([]);
    const [pageTable, setPageTable] = useState(1);

    useEffect(() => {
    //   listarProdutos()
    }, []);

    const response = [
        [
          {
            "id": "3f872931-f1c9-4fed-b129-bc9b5ce4c3b5",
            "name": "Produto",
            "code": 1,
            "description": "Descricao",
            "store_name": "Store name",
            "store_price": 10.5,
            "price": 10.5,
            "additional_charge": 10.0,
            "color": "#ffffff",
            "weight": 10.0,
            "brand": "brand",
            "stock_amount": 10
          },
          []
        ],
        [
          {
            "id": "d3ccf879-4198-4206-bdaf-a51e89bc724a",
            "name": "Produto",
            "code": 1,
            "description": "Descricao",
            "store_name": "Store name",
            "store_price": 10.5,
            "price": 10.5,
            "additional_charge": 10.0,
            "color": "#ffffff",
            "weight": 10.0,
            "brand": "brand",
            "stock_amount": 10
          },
          []
        ],
        [
          {
            "id": "47c2d491-5d5b-4bbe-88a1-340c6ffccc65",
            "name": "Produto2",
            "code": 2,
            "description": "Descricao",
            "store_name": null,
            "store_price": null,
            "price": 10.5,
            "additional_charge": 0.0,
            "color": "#ffffff",
            "weight": 10.0,
            "brand": "brand",
            "stock_amount": 10
          },
          [
            {
              "id": "7e967e97-c3e1-437e-b7c2-806db7c4e02d",
              "label": "teste",
              "tag_color": "#ffffff"
            }
          ]
        ]
      ]

    // async function listarProdutos(){
    //     const response = await ListarProdutosService()
    //     const responseTwo = []
        
    //     setResponse(response)
    //     setPageTable(1);
    // }

    function handleClick(e){
        var win = window.open(`${process.env.PUBLIC_URL}/createProduct`, '_blank');
        if (win.focus) {
            win.focus();
        }
    }

    const productTable = [
        {
            title: 'Cód',
            dataIndex: 'code',
            key: 'code'
        },
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Descrição',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Marca',
            dataIndex: 'brand',
            key: 'brand'
        },
        {
            title: 'Cor',
            dataIndex: 'color',
            key: 'color'
        },
        {
            title: 'Peso',
            dataIndex: 'weight',
            key: 'weight'
        },
        {
            title: 'Qtde',
            dataIndex: 'stock_amount',
            key: 'stock_amount'
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
                        dataSource={response.map((item) => {
                            return item[0]
                        })}
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
                    <h1>Produtos</h1>
                    <Button onClick={(e) => handleClick()}> + Produtos</Button>
                </div>
                
                <div>
                {productDescription()}
                </div>
            </Content>
        </Layout>
    </React.Fragment>
  );
};

export default Products;
