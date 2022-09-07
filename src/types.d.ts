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
    price: string;
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