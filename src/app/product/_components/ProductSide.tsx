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

    const request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/products?${queryParams.toString()}`);

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
