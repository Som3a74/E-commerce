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

                <>
                    <div className=' col-span-4 h-60 flex justify-center items-center font-bold text-3xl'>
                        Not available Now
                    </div>
                </>

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