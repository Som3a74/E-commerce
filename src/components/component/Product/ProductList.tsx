import ProductItem from './ProductItem';

export default async function ProductList({ProductsData}:any) {
  
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
            {ProductsData.map((ele: any) =>
                <ProductItem ProductsData={ele} />
            )}
        </section>
    )
}
