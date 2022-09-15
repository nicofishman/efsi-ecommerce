import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

import { Color, Product, ProductForCart, Size } from '@/types';
import { createSku } from '@/utils/createSku';

interface CartContextType {
    cartProducts: ProductForCart[];
    setCartProducts: (cartProducts: ProductForCart[]) => void;
    addToCart: (product: Product, color: Color, size: Size, quantity: number) => void;
    removeFromCart: (sku: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<ProductForCart[]>([]);

    const addToCart = (product: Product, color: Color, size: Size, quantity: number) => {
        const sku = createSku(product, color, size);

        const indexOfProductInCart = cartProducts.map(item => item.sku).indexOf(sku);

        if (indexOfProductInCart !== -1) {
            setCartProducts(
                cartProducts.map((item, index) => {
                    if (index === indexOfProductInCart) {
                        return {
                            ...item,
                            quantity: item.quantity + quantity
                        };
                    }

                    return item;
                })
            );
        } else {
            setCartProducts([
                ...cartProducts,
                {
                    sku,
                    ...product,
                    color,
                    size,
                    quantity
                }
            ]);
        }
    };

    const removeFromCart = (sku: string) => {
        setCartProducts(cartProducts.filter((item) => item.sku !== sku));
    };

    const value: CartContextType = useMemo(() => {
        return {
            cartProducts,
            setCartProducts,
            addToCart,
            removeFromCart
        };
    }, [cartProducts]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

export const useCartContext = () => {
    const context = useContext<CartContextType>(CartContext as any);

    if (context === undefined) {
        throw new Error('useCartContext must be used within a CartProvider');
    }

    return context;
};
