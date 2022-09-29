import React, { FC } from 'react';

import { useProductInfoContext } from '@/context/ProductInfoContext';

interface QuantitySelectorProps {

}

const QuantitySelector: FC<QuantitySelectorProps> = () => {
    const { quantity, setQuantity } = useProductInfoContext();

    return (
        <div className="custom-number-input h-10 w-full mt-10">
            <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                <button className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                    onClick={(e) => {
                        e.preventDefault();
                        if (quantity > 2) setQuantity((prev) => prev - 1);
                    }}>
                    <span className="m-auto text-2xl font-thin">−</span>
                </button>
                <span className="outline-none text-center focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center justify-center text-gray-700  outline-none"
                >{quantity}</span>
                <button className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        setQuantity((prev) => prev + 1);
                    }}>
                    <span className="m-auto text-2xl font-thin">+</span>
                </button>
            </div>
        </div>
    );
};

export default QuantitySelector;
