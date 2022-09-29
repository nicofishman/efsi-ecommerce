import React, { createContext, FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react';

import ProductsJson from '@/public/products.json';
import { Color, Product, ProductForCart, Size } from '@/types';
import { createSku, decodeSku, removeQuantityFromSku } from '@/utils/sku';

interface CartContextType {
    cartProducts: ProductForCart[];
    setCartProducts: (cartProducts: ProductForCart[]) => void;
    addToCart: (product: Product, color: Color, size: Size, quantity: number) => void;
    removeFromCart: (sku: string) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider: FC<PropsWithChildren> = ({ children }) => {
    const [cartProducts, setCartProducts] = useState<ProductForCart[]>([]);

    useEffect(() => {
        const localStorageCart = window.localStorage.getItem('cartProducts');

        console.log(localStorageCart);

        if (!localStorageCart) return;

        const skus: string[] = JSON.parse(localStorageCart);

        const products: ProductForCart[] = skus.map((sku) => {
            const { productId, color, size, quantity } = decodeSku(sku);
            const product = ProductsJson.find((product) => product.id === productId)!;
            const colorProduct = product.colors.find((c) => c.color === color)!;
            const sizeProduct = product.sizes.find((s) => s.name === size)!;

            return {
                ...product,
                sku,
                color: colorProduct,
                size: sizeProduct,
                quantity
            };
        });

        setCartProducts(products);
    }, []);

    useEffect(() => {
        if (!cartProducts.length) return;

        const skus = cartProducts.map((product) => product.sku);

        window.localStorage.setItem('cartProducts', JSON.stringify(skus));
        console.log(skus);
    }, [cartProducts]);

    const addToCart = (product: Product, color: Color, size: Size, quantity: number) => {
        const sku = createSku(product, color, size);

        const indexOfProductInCart = cartProducts.map(item => removeQuantityFromSku(item.sku)).indexOf(sku);

        if (indexOfProductInCart !== -1) {
            setCartProducts(
                cartProducts.map((item, index) => {
                    if (index === indexOfProductInCart) {
                        return {
                            ...item,
                            sku: `${sku}-${item.quantity + quantity}`,
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
                    sku: `${sku}-${quantity}`,
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
