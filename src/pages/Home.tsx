import React, { FC } from 'react';

import ProductList from '@/components/index/ProductList';
import Promos from '@/components/index/Promos';

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
    return (
        <>
            <Promos />
            <ProductList />
        </>
    );
};

export default Home;
