// 'use client'
// import { useEffect, useState } from "react"
// import { AllProductsType, TypeProductsDate } from './../../../types/type';
// import ProductList from "../Product/ProductList";

// export default function SearchInput() {

//     // const [setSearchText, setsetSearchText] = useState<string>("")
//     const [filteredProducts, setFilteredProducts] = useState<TypeProductsDate[]>([]);
//     const [result, setresult] = useState<TypeProductsDate[]>([]);

//     useEffect(() => {
//         GetproductsHandel()
//     }, [])


//     async function GetproductsHandel() {
//         try {
//             const request = await fetch(`https://ecommerce.routemisr.com/api/v1/products`, {
//                 method: 'GET',
//             });
//             if (!request.ok) {
//                 throw new Error('Failed to fetch categories')
//             }
//             else {
//                 const ProductsData: AllProductsType = await request.json();
//                 setFilteredProducts(ProductsData.data)
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     }


//     function HandelSearch(text: string) {
//         if (text.length > 0) {
//             let result = filteredProducts.filter((ele) => ele.title.trim().toLowerCase().includes(text))
//             setresult(result)
//         }
//     }

//     return (
//         <>
//             <input
//                 type="text"
//                 id="Search"
//                 placeholder="Search for..."
//                 className="w-full rounded-full  border-2 border-gray-300 0 p-2.5 pe-10 shadow-sm sm:text-sm"
//                 // onKeyUp={e => SearchText = (e.target as HTMLInputElement).value}
//                 onChange={e => HandelSearch((e.target as HTMLInputElement).value)}
//             />
//             <div className="">
//                 {result.length !== 0 && <ProductList ProductsData={result} />}
//             </div>
//         </>
//     )
// }
