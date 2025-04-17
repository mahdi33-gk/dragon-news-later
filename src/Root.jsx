import React from 'react';
import Nav from './Navbar/Nav';
import { Outlet } from 'react-router-dom';
import Home from './Components/Home';

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;