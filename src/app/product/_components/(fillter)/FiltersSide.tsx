// 'use client'
// import Link from 'next/link';
// import FiltersItem from './FiltersItem';
// import { TypeAllCategories } from './../../../../types/categoriesType';
// import { useRouter } from 'next/navigation'; // Correct for the 'app' directory
// import { useEffect, useState } from 'react';
// import { Button } from '@/components/ui/button';

// export default function FiltersSide() {
//     const router = useRouter()
//     const [CategoryData, setCategoryData] = useState<TypeAllCategories | null>(null)
//     const [priceGteValue, setpriceGteValue] = useState<number>(0)
//     const [priceLteValue, setpriceLteValue] = useState<number>(0)
//     // const [currentUrl, setCurrentUrl] = useState<string>('');
//     const [selectedCategoryId, setSelectedCategoryId] = useState<string>(''); // State to store selected category
//     console.log(selectedCategoryId)


//     // useEffect(() => {
//     //     setCurrentUrl(window.location.pathname); // Fetching the current URL in a client-side effect
//     // }, [window.location.pathname]);

//     useEffect(() => {
//         async function GetCategories() {
//             let request = await fetch(`https://ecommerce.routemisr.com/api/v1/categories`);
//             if (!request) {
//                 throw new Error('Failed to fetch categories')
//             }
//             const Category: TypeAllCategories = await request.json();
//             setCategoryData(Category)
//         }
//         GetCategories()
//     }, [])

//     // useEffect(() => {
//     //     setCurrentUrl(window.location.href); 
//     // }, []);

//     const handleSearch = () => {

//         // console.log(currentUrl.indexOf('categoryId='))
//         // const url = `${currentUrl}/productFilters?categoryId=${selectedCategoryId}&priceGte=${priceGteValue}`;
//         // router.push(url);

//         // router.push(`/product/productFilters?categoryId=${selectedCategoryId}&priceGte=${priceGteValue || 0}${priceLteValue !== 0 ? `&priceLte=${priceLteValue}` : ''}`)
//            router.push(`/product/productFilters?categoryId=${selectedCategoryId}${priceGteValue !== 0 ? `&priceGteValue=${priceGteValue}` : ''}${priceLteValue !== 0 ? `&priceLte=${priceLteValue}` : ''}`)
//     };

//     const handlereset = () => {
//         setpriceGteValue(0)
//         setpriceLteValue(0)
//         router.push(`/product`)
//     }
//     return CategoryData && (
//         <section>
//             <h2 className='mb-6 font-bold text-3xl'>Filters</h2>
//             <h6 className="underline font-semibold text-md mb-5">Select Categories</h6>

//             {CategoryData?.data?.map((ele) =>
//                 <FiltersItem
//                     key={ele._id}
//                     category={ele}
//                     priceGteValue={priceGteValue}
//                     priceLteValue={priceLteValue}
//                     setSelectedCategoryId={setSelectedCategoryId}
//                 // onClick={() => setSelectedCategoryId(ele._id)} // Store selected category ID
//                 />
//             )}


//             <div className="space-y-2">

//                 {/* <details
//                     className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
//                 >
//                     <summary
//                         className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition"
//                     >
//                         <span className="text-sm font-medium"> Availability </span>

//                         <span className="transition group-open:-rotate-180">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="size-4"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//                             </svg>
//                         </span>
//                     </summary>

//                     <div className="border-t border-gray-200 bg-white">
//                         <header className="flex items-center justify-between p-4">
//                             <span className="text-sm text-gray-700"> 0 Selected </span>

//                             <button type="button" className="text-sm text-gray-900 underline underline-offset-4">
//                                 Reset
//                             </button>
//                         </header>

//                         <ul className="space-y-1 border-t border-gray-200 p-4">
//                             <li>
//                                 <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
//                                     <input type="checkbox" id="FilterInStock" className="size-5 rounded border-gray-300" />

//                                     <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
//                                     <input type="checkbox" id="FilterPreOrder" className="size-5 rounded border-gray-300" />

//                                     <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
//                                 </label>
//                             </li>

//                             <li>
//                                 <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
//                                     <input type="checkbox" id="FilterOutOfStock" className="size-5 rounded border-gray-300" />

//                                     <span className="text-sm font-medium text-gray-700"> Out of Stock (10+) </span>
//                                 </label>
//                             </li>
//                         </ul>
//                     </div>
//                 </details>  */}

//                 <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
//                     <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
//                         <span className="text-sm font-medium"> Price </span>

//                         <span className="transition group-open:-rotate-180">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 strokeWidth="1.5"
//                                 stroke="currentColor"
//                                 className="size-4"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//                             </svg>
//                         </span>
//                     </summary>

//                     <div className="border-t border-gray-200 bg-white">
//                         <header className="flex items-center justify-between p-4">
//                             <span className="text-sm text-gray-700"> The highest price is $42960 </span>

//                             <button
//                                 type="button"
//                                 className="text-sm text-gray-900 underline underline-offset-4"
//                                 onClick={handleSearch}
//                             >
//                                 Search
//                             </button>
//                         </header>

//                         <div className="border-t border-gray-200 p-4">
//                             <div className="flex justify-between gap-4">
//                                 <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
//                                     <span className="text-sm text-gray-600">$</span>

//                                     <input
//                                         type="number"
//                                         id="FilterPriceFrom"
//                                         placeholder="From"
//                                         className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                                         value={priceGteValue}
//                                         min={0}
//                                         onKeyUp={(e) => setpriceGteValue(parseFloat((e.target as HTMLInputElement).value))}
//                                     />
//                                 </label>

//                                 <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
//                                     <span className="text-sm text-gray-600">$</span>

//                                     <input
//                                         type="number"
//                                         id="FilterPriceTo"
//                                         placeholder="To"
//                                         className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                                         value={priceLteValue}
//                                         min={0}
//                                         onKeyUp={(e) => setpriceLteValue(parseFloat((e.target as HTMLInputElement).value))}
//                                     />
//                                 </label>
//                             </div>
//                         </div>
//                     </div>
//                 </details>

//                 <Button 
//                     onClick={()=> handlereset()}
//                 >
//                   reset
//                 </Button>
//             </div>


//         </section>
//     )
// }

'use client';
import FiltersItem from './FiltersItem';
import { TypeAllCategories } from './../../../../types/categoriesType';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Loadingcategory from './Loadingcategory';

export default function FiltersSide() {
    const router = useRouter();
    const [categoryData, setCategoryData] = useState<TypeAllCategories | null>(null);
    const [priceGteValue, setPriceGteValue] = useState<number | undefined>(undefined);
    const [priceLteValue, setPriceLteValue] = useState<number | undefined>(undefined);
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');

    useEffect(() => {
        async function fetchCategories() {
            try {
                const response = await fetch('https://ecommerce.routemisr.com/api/v1/categories');
                if (!response.ok) throw new Error('Failed to fetch categories');

                const categoryData: TypeAllCategories = await response.json();
                setCategoryData(categoryData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchCategories();
    }, []);

    const handleSearch = () => {
        const queryParams = new URLSearchParams();

        if (selectedCategoryId) queryParams.set('categoryId', selectedCategoryId);
        if (priceGteValue) queryParams.set('priceGte', String(priceGteValue));
        if (priceLteValue) queryParams.set('priceLte', String(priceLteValue));

        const url = `/product/productFilters?${queryParams.toString()}`;
        router.push(url);
    };

    const handleReset = () => {
        setPriceGteValue(undefined);
        setPriceLteValue(undefined);
        setSelectedCategoryId('');
        router.push('/product');
    };

    return (
        <section>
            <h2 className='mb-6 font-bold text-3xl'>Filters</h2>
            <h6 className="underline font-semibold text-md mb-5">Select Categories</h6>


            {categoryData ?
                categoryData?.data?.map((category) => (
                    <FiltersItem
                        key={category._id}
                        category={category}
                        priceGteValue={priceGteValue}
                        priceLteValue={priceLteValue}
                        setSelectedCategoryId={setSelectedCategoryId}
                    />
                ))
                : <Loadingcategory />
            }



            <div className="space-y-2">
                <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
                        <span className="text-sm font-medium"> Price </span>
                        <span className="transition group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </span>
                    </summary>

                    <div className="border-t border-gray-200 bg-white">
                        <header className="flex items-center justify-between p-4">
                            <span className="text-sm text-gray-700"> The highest price is $42960 </span>
                            <button
                                type="button"
                                className="text-sm text-gray-900 underline underline-offset-4"
                                onClick={handleSearch}
                            >
                                Search
                            </button>
                        </header>

                        <div className="border-t border-gray-200 p-4">
                            <div className="flex justify-between gap-4">
                                <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">$</span>
                                    <input
                                        type="number"
                                        id="FilterPriceFrom"
                                        placeholder="From"
                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        value={priceGteValue}
                                        onChange={(e) => setPriceGteValue(Number(e.target.value))}
                                    />
                                </label>

                                <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">$</span>
                                    <input
                                        type="number"
                                        id="FilterPriceTo"
                                        placeholder="To"
                                        className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                        value={priceLteValue}
                                        onChange={(e) => setPriceLteValue(Number(e.target.value))}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </details>

                <Button onClick={handleReset}>Reset</Button>
            </div>
        </section>
    );
}