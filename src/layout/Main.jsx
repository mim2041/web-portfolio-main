import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import ParticlesJS from '../components/Particles';


const Main = () => {
    return (
        <div>
            <ParticlesJS></ParticlesJS>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;