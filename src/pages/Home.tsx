import React, { FC } from 'react';

import ProductList from '@/components/index/ProductList';
import Promos from '@/components/index/Promos';
import ButtonStyled from '@/components/common/ButtonStyled';

interface HomeProps {

}

const Home: FC<HomeProps> = () => {
    return (
        <>
            <ButtonStyled>
                Hello
            </ButtonStyled>
            <Promos />
            <ProductList />
        </>
    );
};

export default Home;
