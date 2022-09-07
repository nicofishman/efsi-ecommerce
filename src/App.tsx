import React, { FC } from 'react';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import Layout from '@/pages/common/Layout';
import Home from '@/pages/Home';
import Producto from '@/pages/Producto';

interface AppProps {

}

const App: FC<AppProps> = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout/> }>
                    <Route element={<Home />} path='/'/>
                    <Route element={<Producto />} path='/product/:id'/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
