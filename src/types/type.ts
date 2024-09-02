export type FormData = {
    email: string;
    githubUrl: string;
    yearsOfExperience: number;
    password: string;
    confirmPassword: string;
};

export interface AllProductsType {
    results: number;
    metadata: Metadata;
    data: TypeProductsDate[];
}

export interface TypeProductsDate {
    sold: number;
    images: string[];
    subcategory: Brand[];
    ratingsQuantity: number;
    _id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    imageCover: string;
    category: Brand;
    brand: Brand;
    ratingsAverage: number;
    createdAt: Date;
    updatedAt: Date;
    id: string;
    priceAfterDiscount?: number;
    availableColors?: any[];
}

export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image?: string;
    category?: Category;
}

export enum Category {
    Category1 = "6439d2d167d9aa4ca970649f",
    Category2 = "6439d58a0049ad0b52b9003f",
    Category3 = "6439d5b90049ad0b52b90048",
}

export interface Metadata {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage?: number;
    prevPage?: number;
}
