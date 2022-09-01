import React, { FC } from 'react';

import ProductList from '../components/ProductList';
import Promos from '../components/Promos';

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
