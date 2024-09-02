import { Metadata } from "./type";

export interface TypeAllCategories {
    results: number;
    metadata: Metadata;
    data: TypeCategoriesData[];
}

export interface TypeCategoriesData {
    _id: string;
    name: string,
    slug: string;
    image: string;
    createdAt: Date;
    updatedAt: Date;
}