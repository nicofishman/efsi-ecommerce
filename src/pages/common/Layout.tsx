import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from './../../components/Navbar';

interface LayoutProps {

};

const Layout: FC<LayoutProps> = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

export default Layout;
