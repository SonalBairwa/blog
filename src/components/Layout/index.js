import React, { Children } from 'react';
import './style.css';
import Sidebar from '../Sidebar';
import Card from '../UI/Card';
import Footer from '../Footer';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <React.Fragment>
        <div className="container">
            {props.children}
            <Sidebar />
        </div>
        <Footer />
    </React.Fragment>
   )

 }

export default Layout