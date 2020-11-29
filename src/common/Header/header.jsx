import * as React from "react"
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, Container} from "@material-ui/core"
import {Link} from 'react-router-dom';
import { Form, FormControl } from 'react-bootstrap';
import { Home } from "@material-ui/icons"
import PersonSharp from '@material-ui/icons/PersonSharp';
import { makeStyles } from "@material-ui/core/styles"

import './index.css'

const navLinks = [
  { title: `home`, path: `/home` },
  { title: `clients`, path: `/clients` },
  { title: `products`, path: `/products` },
  { title: `sells`, path: `/sells` },
  { title: `support`, path: `/home` },
]

const useStyles = makeStyles({
  navbarDisplayFlex: {
    display: `flex`
  },
  navDisplayFlex: {
    display: `flex`
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`
  }
});

const NavigationBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar>
        <Container className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <List
            component="nav"
            aria-labelledby="main navigation"
            className={classes.navDisplayFlex}
          >
            {navLinks.map(({ title, path }) => (
              <a href={path} key={title} className={classes.linkText}>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </a>
            ))}
          </List>
          <Form className="form">
            <FormControl type="text" placeholder="Search" />
          </Form>
            <IconButton edge="start" color="inherit" aria-label="home">
                <div className="teste">
                  <div><PersonSharp fontSize="large" /></div>
                  <div><span>ASD</span></div>
                </div>
            </IconButton>
        </Container>
      </Toolbar>
    </AppBar>
  )
} 
export default NavigationBar