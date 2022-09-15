interface Image {
    src: string;
    alt: string;
}

interface Breadcrumb {
    id: number;
    name: string;
    href: string;
}

interface Color {
    name: string;
    class: string;
    color: string;
    selectedClass: string;
}

interface Size {
    name: string;
    inStock: boolean;
}

interface Review {
    href: string;
    average: number;
    totalCount: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    href: string;
    images: Image[];
    breadcrumbs: Breadcrumb[];
    colors: Color[];
    sizes: Size[];
    description: string;
    highlights: string[];
    details: string;
    reviews: Review;
}

interface Featured {
    name: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
}

interface Section {
    id: string;
    name: string;
    items: {name: string; href: string}[];
}

interface Category {
    id: string;
    name: string;
    featured: Featured[]
    sections: Section[];
}

export interface Navigation {
    categories: Category[]
    pages: {name: string; href: string}[];
}

export type ProductForCart = Omit<Product, 'colors'|'sizes'> & {sku: string; quantity: number, color: Color, size: Size};
