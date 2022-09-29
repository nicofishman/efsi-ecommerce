import React, { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';

import { Color, Size } from '@/types';
interface ProductInfoContextType {
    selectedColor: Color;
    setSelectedColor: (selectedColor: Color) => void;
    selectedSize: Size;
    setSelectedSize: (selectedSize: Size) => void;
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
}

export const ProductInfoContext = createContext<ProductInfoContextType | null >(null);

const ProductInfoProvider: FC<PropsWithChildren> = ({ children }) => {
    const [selectedColor, setSelectedColor] = useState<Color>({
        name: '',
        class: '',
        color: '',
        selectedClass: ''
    });
    const [selectedSize, setSelectedSize] = useState<Size>({
        name: '',
        inStock: true
    });
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        console.log(quantity);
    }, [quantity]);

    const value: ProductInfoContextType = useMemo(() => {
        return {
            selectedColor,
            setSelectedColor,
            selectedSize,
            setSelectedSize,
            quantity,
            setQuantity
        };
    }, [selectedColor, selectedSize, quantity]);

    return (
        <ProductInfoContext.Provider value={value}>
            {children}
        </ProductInfoContext.Provider>
    );
};

export default ProductInfoProvider;

export const useProductInfoContext = () => {
    const context = useContext<ProductInfoContextType>(ProductInfoContext as any);

    if (context === undefined) {
        throw new Error('useProductInfoContext must be used within a ProductInfoProvider');
    }

    return context;
};
