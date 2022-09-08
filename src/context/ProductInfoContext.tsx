import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

import { Color, Size } from '@/types';
interface ProductInfoContextType {
    selectedColor: Color;
    setSelectedColor: (selectedColor: Color) => void;
    selectedSize: Size;
    setSelectedSize: (selectedSize: Size) => void;
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

    const value: ProductInfoContextType = useMemo(() => {
        return {
            selectedColor,
            setSelectedColor,
            selectedSize,
            setSelectedSize
        };
    }, [selectedColor, selectedSize]);

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
