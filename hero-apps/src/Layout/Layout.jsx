import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


const Layout = () => {
    return (
        <div className='inter'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Layout;