import React from 'react';
import { Route, Link } from 'react-router-dom';

// import Nav from './Nav/Nav'
// import Header from './Header/Header'
//import Footer from '../common/Footer/footer'
import { paths } from '../Routes'


function Master({ children, StepName, StepValue }) {

  return (
    <div className="container-main">
      {/* <nav className="nav-main"><Nav /></nav> */}

      <main>
        {/* <Header /> */}
        <div>
          <div>
            {StepValue ?
              <>
                <>
                  <div className="page-title">
                    <h2>{StepName}</h2>
                  </div>

                  {/* Conteúdo aqui */}
                  {/* <Panel /> */}
                  {children}
                </>
              </>
              : <>{children}</>
            }
          </div>
        </div>
        {/*<Footer />*/}
      </main>
    </div>


  );
}


export default Master;