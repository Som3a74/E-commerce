import { Brand } from './type';

export interface TOrdersUser {
    shippingAddress:   ShippingAddress;
    taxPrice:          number;
    shippingPrice:     number;
    totalOrderPrice:   number;
    paymentMethodType: PaymentMethodType;
    isPaid:            boolean;
    isDelivered:       boolean;
    _id:               string;
    user:              User;
    cartItems:         CartItem[];
    createdAt:         Date;
    updatedAt:         Date;
    id:                number;
    __v:               number;
    paidAt?:           Date;
}

export interface CartItem {
    count:   number;
    _id:     string;
    product: Product;
    price:   number;
}

export interface Product {
    subcategory:     Brand[];
    ratingsQuantity: number;
    _id:             IDEnum;
    title:           Title;
    imageCover:      string;
    category:        Brand;
    brand:           Brand;
    ratingsAverage:  number;
    id:              IDEnum;
}

export enum IDEnum {
    The6428E997Dc1175Abc65Ca0A1 = "6428e997dc1175abc65ca0a1",
    The6428Ead5Dc1175Abc65Ca0Ad = "6428ead5dc1175abc65ca0ad",
    The6428Eb43Dc1175Abc65Ca0B3 = "6428eb43dc1175abc65ca0b3",
    The6428Ebc6Dc1175Abc65Ca0B9 = "6428ebc6dc1175abc65ca0b9",
}


export enum CategoryEnum {
    The6407F1Bcb575D3B90Bf95797 = "6407f1bcb575d3b90bf95797",
    The64089Bbe24B25627A253158B = "64089bbe24b25627a253158b",
    The6439D58A0049Ad0B52B9003F = "6439d58a0049ad0b52b9003f",
}

export enum BrandName {
    DeFacto = "DeFacto",
    WomenSClothing = "Women's Clothing",
    WomenSFashion = "Women's Fashion",
}

export enum Slug {
    Defacto = "defacto",
    WomenSClothing = "women's-clothing",
    WomenSFashion = "women's-fashion",
}

export enum Title {
    WomanShawl = "Woman Shawl",
}

export enum PaymentMethodType {
    Card = "card",
    Cash = "cash",
}

export interface ShippingAddress {
    details: Details;
    phone:   string;
    city:    City;
}

export enum City {
    Cairo = "Cairo",
    Zagazig = "zagazig",
}

export enum Details {
    Details = "details",
    Hi = "hi",
}

export interface User {
    _id:   ID;
    name:  UserName;
    email: Email;
    phone: string;
}

export enum ID {
    The65Bd965Dfe51Fcfc98509A13 = "65bd965dfe51fcfc98509a13",
}

export enum Email {
    Hadok37889ZiragoldCOM = "hadok37889@ziragold.com",
}

export enum UserName {
    Naskclsjc = "naskclsjc",
}
