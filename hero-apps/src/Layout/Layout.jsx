import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addInstalledApp } from '../Utils/LocalDB';

const Layout = () => {
    const [installCard, setInstallCard] = useState(() => addInstalledApp());

    const notify = (toaster) => toast(toaster);

    const handleInstallBtn = (singleApp) => {

        setInstallCard(prev => [...prev, singleApp])
        // console.log('i am a best dev in the world');

        notify('App installed successfully! 🎉')
    }


    return (
        <div className='inter'>
            <Navbar></Navbar>
            <Outlet context={{ handleInstallBtn, installCard, setInstallCard, notify }} ></Outlet>
            <Footer></Footer>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </div>
    );
};

export default Layout;