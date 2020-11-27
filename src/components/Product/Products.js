import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Layout, Button, Divider, Table } from 'antd';
import {NavigationBar} from '../../common/Header/header'
import {Footer} from '../../common/Footer/footer'
import { ListarProdutosService } from '../../services/listarProdutosService'
import './index.css';

const { Content, Header } = Layout 

const Products = (props) => {

    const [response, setResponse] = useState([]);
    const [pageTable, setPageTable] = useState(1);

    useEffect(() => {
       listarProdutos()
    }, []);

    async function listarProdutos(){
        const response = await ListarProdutosService()
        
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
            <NavigationBar/>
            <Content>
                
                <div className="page_title">
                    <h1>Produtos</h1>
                    <Link to="/products/create">
                        <Button renderAs="button">
                            <span>+ Produtos</span>
                        </Button>
                    </Link>
                </div>
                
                <div>
                {productDescription()}
                </div>
            </Content>
            <Footer/>
        </Layout>
    </React.Fragment>
  );
};

export default Products;
