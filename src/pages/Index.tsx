import React, { FC } from 'react';

import ProductList from '../components/index/ProductList';
import Promos from '../components/index/Promos';

interface IndexProps {

};

const Index: FC<IndexProps> = () => {
    return (
        <>
            <Promos />
            <ProductList />
        </>
    );
};

export default Index;
