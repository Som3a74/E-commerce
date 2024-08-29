import React from 'react'
import ProductList from '../../../components/component/Product/ProductList';
import PaginationProducts from './PaginationProducts';

export default async function AllProducts({ page }: any) {

    let request = await fetch(`https://ecommerce.routemisr.com/api/v1/products?limit=10&page=${page || 1}`);

    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const ProductsData: any = await request.json();

    return (
        <div>
            <ProductList ProductsData={ProductsData.data} />
            <PaginationProducts ProductsData={ProductsData} />
        </div>
    )
}
