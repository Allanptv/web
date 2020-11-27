/*import React from 'react'
import { Menu, Layout, Drawer } from 'antd'
import { Link, useLocation } from 'react-router-dom';

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

    const location = useLocation()

    let indexSelected = menuItems.findIndex(
        
        (item) => location.pathname === item.link
      );

    let selected =
    indexSelected !== -1 ? `menu_${menuItems[indexSelected].name}` : '';

    const menuRender = () => {
        return(
            <Menu mode="horizontal" defaultSelectedKeys={[selected]}>
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

export default mainMenu*/








import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/products">products</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/sells">sells</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/clients">clients</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)