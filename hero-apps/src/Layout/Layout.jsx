import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';


const Layout = () => {
    const [installCard, setInstallCard] = useState([]);
    const [btn, setBtn] = useState('Install Now')
    const handleInstallBtn = (singleApp) => {

        setInstallCard(prev => [...prev, singleApp])
        // console.log('i am a best dev in the world');
        setBtn('Installed')
        alert('installed')
    }

    return (
        <div className='inter'>
            <Navbar></Navbar>
            <Outlet context={{ handleInstallBtn, installCard, btn }} ></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Layout;