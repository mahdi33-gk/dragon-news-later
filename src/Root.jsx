import React from 'react';
import Nav from './Navbar/Nav';
import { Outlet } from 'react-router-dom';
import Home from './Components/Home';

const Root = () => {
    return (
        <div className='font-poppins'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;