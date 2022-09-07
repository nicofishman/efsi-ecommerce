import React, { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import products from '@/public/products.json';
import Breadcrumbs from '@/components/producto/Breadcrumbs';
import Images from '@/components/producto/Images';
import ProductInfo from '@/components/producto/ProductInfo';
import { Product } from '@/types';

interface ProductoProps {

}

const Producto: FC<ProductoProps> = () => {
    const { id } = useParams();
    const navigation = useNavigate();

    if (!id || isNaN(parseInt(id))) {
        navigation('/');

        return null;
    }

    const product: Product = products.filter(p => p.id === parseInt(id))[0];

    return (
        <div className="bg-white">
            <div className="pt-6">
                <nav aria-label="Breadcrumb">
                    <ol className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8" role="list">
                        <Breadcrumbs breadcrumbs={product.breadcrumbs} />
                        <li className="text-sm">
                            <a aria-current="page" className="font-medium text-gray-500 hover:text-gray-600" href={product.href}>
                                {product.name}
                            </a>
                        </li>
                    </ol>
                </nav>

                {/* Image gallery */}
                <Images images={product.images} />

                {/* Product info */}
                <ProductInfo product={product} />
            </div>
        </div>
    );
};

export default Producto;
