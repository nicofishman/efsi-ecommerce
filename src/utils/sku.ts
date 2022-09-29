import { Color, Product, Size } from '@/types';

export const createSku = (product: Product, color: Color, size: Size, quantity?: number) => {
    return `${product.id}-${color.color}-${size.name}` + (quantity ? `-${quantity}` : '');
};

export const decodeSku = (sku: string) => {
    const [productId, color, size, quantity] = sku.split('-');

    return { productId: Number(productId), color, size, quantity: Number(quantity) };
};

export const removeQuantityFromSku = (sku: string) => {
    const [productId, color, size] = sku.split('-');

    return `${productId}-${color}-${size}`;
};
