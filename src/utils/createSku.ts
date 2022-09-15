import { Color, Product, Size } from '@/types';

export const createSku = (product: Product, color: Color, size: Size) => {
    return `${product.id}-${color.color}-${size.name}`;
};
