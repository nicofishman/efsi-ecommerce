import { Color, Product, Size } from '@/types';

export const createSku = (product: Product, color: Color, size: Size, quantity: number) => {
    return `${product.id}-${color.color}-${size.name}-${quantity}`;
};
