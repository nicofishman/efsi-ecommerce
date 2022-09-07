import React, { FC } from 'react';

import { Product } from '../../types';

import Reviews from './Reviews';
import Colors from './Colors';
import Sizes from './Sizes';

interface ProductInfoProps {
    product: Product
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => {
    return (
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

                {/* Reviews */}
                <Reviews reviews={product.reviews} />

                <form className="mt-10">
                    {/* Colors */}
                    <Colors colors={product.colors} />

                    {/* Sizes */}
                    <Sizes sizes={product.sizes}/>

                    <button
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        type="submit"
                    >
                        Comprar equipo
                    </button>
                </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                {/* Description and details */}
                <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                        <p className="text-base text-gray-900">{product.description}</p>
                    </div>
                </div>

                <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                    <div className="mt-4">
                        <ul className="list-disc space-y-2 pl-4 text-sm" role="list">
                            {product.highlights.map((highlight) => (
                                <li key={highlight} className="text-gray-400">
                                    <span className="text-gray-600">{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                    <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">{product.details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
