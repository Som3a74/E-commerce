'use client'
import ProductList from '../../../components/component/Product/ProductList';
import PaginationProducts from './PaginationProducts';

export default async function ProductSide({ category }: any) {

    let request = await fetch(`https://ecommerce.routemisr.com/api/v1/products?limit=10`);
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
