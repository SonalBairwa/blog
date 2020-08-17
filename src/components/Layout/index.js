import React, { Children } from 'react';
import './style.css';
import Sidebar from '../Sidebar';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <React.Fragment>
        {props.children}
        <Sidebar />
    </React.Fragment>
   )

 }

export default Layout