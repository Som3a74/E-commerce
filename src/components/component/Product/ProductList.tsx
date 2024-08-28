import ProductItem from './ProductItem';

export default async function ProductList() {
    let request = await fetch('https://ecommerce.routemisr.com/api/v1/products');
    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const ProductsData: any = await request.json();
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
            {ProductsData.data.map((ele: any) =>
                <ProductItem ProductsData={ele} />
            )}
        </section>
    )
}
