'use client'
import { TypeProductsDate } from '../../../types/type';
import ProductItem from './ProductItem';

type props = {
    ProductsData: TypeProductsDate[]
}

export default function ProductList({ ProductsData }: props) {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 justify-items-center'>
            {!ProductsData.length ?
                <div className='col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-4 h-60 flex flex-col justify-center items-center w-full my-10'>
                    <div className="w-24 h-24 mb-4 text-gray-300 dark:text-gray-700">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h3 className='font-bold text-2xl text-DarkBeLight mb-2 text-center'>No Products Found</h3>
                    <p className='text-gray-500 text-center max-w-md'>We couldn't find any products matching your selected filters. Try adjusting your categories or price range.</p>
                </div>
                :
                <>
                    {ProductsData.map((ele, index) =>
                        <ProductItem key={ele._id} ProductsData={ele} index={index} />
                    )}
                </>
            }
        </section>
    )
}