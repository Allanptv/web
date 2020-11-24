import { Menu } from 'antd'

const mainMenu = () => {
    return(
        // <div>    
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <a href="https://google.com">Home</a>
                </Menu.Item>
                <Menu.Item>Produtos</Menu.Item>
                <Menu.Item>Vendas</Menu.Item>
                <Menu.Item>Clientes</Menu.Item>
                <Menu.Item>Suporte</Menu.Item>
            </Menu>
        // </div>
    );
};

export default mainMenu