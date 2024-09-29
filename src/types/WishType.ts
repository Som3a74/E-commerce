import { Brand } from "./type";
import { TypeCategoriesData } from '@/types/categoriesType';

export interface TLoggedWish {
    status: string;
    count:  number;
    data:   TProduct[];
}

export interface TProduct {
    sold:            number;
    images:          string[];
    subcategory:     TypeCategoriesData[];
    ratingsQuantity: number;
    _id:             string;
    title:           string;
    slug:            string;
    description:     string;
    quantity:        number;
    price:           number;
    imageCover:      string;
    category:        TypeCategoriesData;
    brand:           Brand;
    ratingsAverage:  number;
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
    id:              string;
}