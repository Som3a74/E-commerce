import { Metadata } from "./type";

export interface AllBrandType {
    results:  number;
    metadata: Metadata;
    data:     BrandDateType[];
}

export interface BrandDateType{
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
}


export interface BrandSpecificType {
    data: BrandSpecificDataType;
}

export interface BrandSpecificDataType {
    _id:       string;
    name:      string;
    slug:      string;
    image:     string;
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
}
