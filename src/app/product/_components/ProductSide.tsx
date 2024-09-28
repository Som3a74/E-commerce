// 'use client'
import ProductList from '../../../components/component/Product/ProductList';
import PaginationProducts from './PaginationProducts';
import { AllProductsType } from './../../../types/type';

type props = {
    category: string
}

export default async function ProductSide({ category }: props) {

    let request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/products?${category ? `category[in]=${category}` : ''}`);

    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const ProductsData: AllProductsType = await request.json();

    return (
        <div>
            <ProductList ProductsData={ProductsData.data} />
            <PaginationProducts ProductsData={ProductsData} />
        </div>
    )
}
