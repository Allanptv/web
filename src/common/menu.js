import React from 'react'
import { Menu, Layout, Drawer } from 'antd'
import { Link } from 'react-router-dom';

const mainMenu = (props) => {

    const { Header } = Layout;

    const menuItems = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'Produtos',
            link: '/'
        },
        {
            name: 'Vendas',
            link: '/'
        },
        {
            name: 'Clientes',
            link: '/clients'
        },
        {
            name: 'Suporte',
            link: '/'
        },
    ];

    // const { history, user } = props;
    // debugger
    // let indexSelected = menuItems.findIndex(
        
    //     (item) =>  history.location.pathname === item.link
    //   );

    // let selected =
    // indexSelected !== -1 ? `menu_${menuItems[indexSelected].name}` : '';

    const menuRender = () => {
        return(
            <Menu mode="horizontal" >
                {menuItems.map((menu) => {
                     const { name, link, icon } = menu;
                     return (
                       <Menu.Item key={`menu_${name}`}>
                         {link ? (
                           <Link to={`${link}`}>
                             {icon} <span>{name}</span>
                           </Link>
                         ) : (
                             <React.Fragment>
                               {icon} <span>{name}</span>
                             </React.Fragment>
                           )}
                       </Menu.Item>
                     );
                })}
            </Menu>
            
        );
    }

    return(
        <>
            <Header>
    <Drawer>{menuRender(true)}</Drawer>
            </Header>
        </>
    )
};

export default mainMenu