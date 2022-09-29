import React, { FC } from 'react';
import classNames from 'classnames';

import { ProductForCart } from '@/types';
import { useCartContext } from '@/context/CartContext';

interface CartSlideProductsProps {
    products: ProductForCart[];
}

const CartSlideProducts: FC<CartSlideProductsProps> = ({ products }) => {
    const { removeFromCart } = useCartContext();

    return (
        <ul className="-my-6 divide-y divide-gray-200" role="list">
            {products.map((product) => (
                <li key={product.sku} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                            alt={product.images[0].alt}
                            className="h-full w-full object-cover object-center"
                            src={product.images[0].src}
                        />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                        <div>
                            <div className="flex justify-between text-base font-medium text-gray-900">
                                <p className='whitespace-nowrap overflow-ellipsis'>{product.name}</p>
                                <p className="ml-4">{`$${product.price}`}</p>
                            </div>
                            <div>
                                <p className="mt-1 text-sm text-gray-500">{product.sku}</p>
                            </div>
                            <div className='flex flex-row items-center gap-1'>
                                <span
                                    aria-hidden="true"
                                    className={classNames(
                                        product.color.class,
                                        'h-4 w-4 border-2 border-black border-opacity-10 mt-1 rounded-full'
                                    )}
                                    style={{ backgroundColor: product.color.color }}
                                />
                                <p className="mt-1 text-sm text-gray-500">{product.color.name}</p>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">{product.size.name}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                            <p className="text-gray-500">Qty {product.quantity}</p>

                            <div className="flex">
                                <button
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    type="button"
                                    onClick={() => removeFromCart(product.sku)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default CartSlideProducts;
