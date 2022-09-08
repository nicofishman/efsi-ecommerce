import React, { createContext, FC, PropsWithChildren, useContext, useMemo, useState } from 'react';

import { Color, Product, Size } from '@/types';

interface CartContextType {
    cartProducts: { product: Product; quantity: number }[];
    setCartProducts: (cartProducts: { product: Product; quantity: number }[]) => void;
    addToCart: (product: Product, color: Color, size: Size, quantity: number) => void;
    removeFromCart: (productId: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<{ product: Product; quantity: number }[]>([]);

    const addToCart = (product: Product, color: Color, size: Size, quantity: number) => {
        const productInCart = cartProducts.find((item) => item.product.id === product.id);

        if (productInCart) {
            setCartProducts(
                cartProducts.map((item) => {
                    if (item.product.id === product.id) {
                        return {
                            product: {
                                ...item.product,
                                colors: [color, ...product.colors],
                                sizes: [size, ...product.sizes]
                            },
                            quantity: item.quantity + quantity
                        };
                    }

                    return item;
                })
            );
        } else {
            setCartProducts([...cartProducts, {
                product: {
                    ...product,
                    colors: [color, ...product.colors],
                    sizes: [size, ...product.sizes]
                },
                quantity
            }]);
        }
    };

    const removeFromCart = (productId: number) => {
        setCartProducts(cartProducts.filter((item) => item.product.id !== productId));
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
