// // 'use client'
// import ProductList from '../../../components/component/Product/ProductList';
// import PaginationProducts from './PaginationProducts';
// import { AllProductsType } from './../../../types/type';

// type props = {
//     category: string
//     priceGte: number
//     priceLte: number
// }

// export default async function ProductSide({ category , priceGte , priceLte}: props) {

//     let request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/products?${category ? `category[in]=${category}` : ''}&${priceGte ? `price[gte]=${priceGte}` : ''}&${priceLte ? `price[lte]=${priceLte}` : ''}`);
//     // let request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/products?${category ? `category[in]=${category}` : ''}&price[gte]=200`);
//     // let request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/products?${category ? `category[in]=${category}` : ''}`);

//     if (!request.ok) {
//         // throw new Error(request.json()?.message)
//         throw new Error("Error")
//     }
//     const ProductsData: AllProductsType = await request.json();

//     return (
//         <div>
//             <ProductList ProductsData={ProductsData.data} />
//             <PaginationProducts ProductsData={ProductsData} />
//         </div>
//     )
// }


import ProductList from '../../../components/component/Product/ProductList';
import PaginationProducts from './PaginationProducts';
import { AllProductsType } from './../../../types/type';

type Props = {
    category: string;
    priceGte: number;
    priceLte: number;
};

export default async function ProductSide({ category, priceGte, priceLte }: Props) {
    const queryParams = new URLSearchParams();

    if (category) queryParams.set('category[in]', category);
    if (priceGte) queryParams.set('price[gte]', priceGte.toString());
    if (priceLte) queryParams.set('price[lte]', priceLte.toString());

    // Fetch products based on query parameters
    const request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/products?${queryParams.toString()}`);

    // Handle errors
    if (!request.ok) {
        throw new Error('Error fetching products');
    }

    const ProductsData: AllProductsType = await request.json();

    return (
        <div>
            <ProductList ProductsData={ProductsData.data} />
            <PaginationProducts ProductsData={ProductsData} />
        </div>
    );
}
