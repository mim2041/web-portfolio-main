import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import ParticlesJS from '../components/Particles';


const Main = () => {
    return (
        <div>
            <ParticlesJS></ParticlesJS>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Main;