import ProductItem from './ProductItem';

export default async function ProductList({ ProductsData }: any) {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center'>
            {!ProductsData.length ?

                <>
                    <div className=' col-span-4 h-60 flex justify-center items-center font-bold text-3xl'>
                        category Not available Now
                    </div>
                </>

                :
                <>
                    {ProductsData.map((ele: any) =>
                        <ProductItem key={ProductsData._id} ProductsData={ele} />
                    )}
                </>
            }
        </section>
    )
}
