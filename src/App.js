import React, { Component } from 'react';
import MainMenu from './common/menu'
import Loadable from "react-loadable"
import { Layout, Menu } from "antd" 
import { createBrowserHistory } from 'history'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Routes from './Routes'

const browserHistory = createBrowserHistory()

function App(){
  return(
    <Router>
      <Routes />
    </Router>
  )
}

// class App extends Component {
//   render(){
//     return(
//       <Menu></Menu>
//     );
//   }
// }

export default App;

