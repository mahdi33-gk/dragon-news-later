import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../Navbar/Nav';

const Auth = () => {
    return (
        <div className='font-poppins'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Auth;