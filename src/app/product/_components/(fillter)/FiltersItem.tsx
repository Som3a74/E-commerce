// 'use client'
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { TypeCategoriesData } from '../../../../types/categoriesType';

// interface props {
//     category: TypeCategoriesData
//     priceGteValue:number | undefined
//     priceLteValue:number | undefined
//     setSelectedCategoryId: (categoryId: string) => void
// }

// export default function FiltersItem({ category , priceGteValue , priceLteValue ,setSelectedCategoryId }: props) {
//     const router = useRouter()

//     const handleSearch = (CategoryId : string) => {
//         setSelectedCategoryId(CategoryId)
//         // router.push(`/product/productFilters?categoryId=${CategoryId}&priceGte=${priceGteValue || 0}${priceLteValue !== 0 ? `&priceLte=${priceLteValue}` :''}`)    
//         router.push(`/product/productFilters?categoryId=${CategoryId}${priceGteValue ? `&priceGte=${priceGteValue}` :''}${priceLteValue ? `&priceLte=${priceLteValue}` :''}`)    
//     };

//     return (
//         <button
//             onClick={() => handleSearch(category._id)}
//             key={category._id}
//             className="font-semibold text-md block text-grayUI2 p-1 cursor-pointer hover:underline hover:text-darkUi ease-linear duration-300">
//             {category.name}
//         </button>
//     )
// }

'use client';
import { useRouter } from 'next/navigation';
import { TypeCategoriesData } from '../../../../types/categoriesType';

interface FiltersItemProps {
    category: TypeCategoriesData;
    priceGteValue: number | undefined;
    priceLteValue: number | undefined;
    setSelectedCategoryId: (categoryId: string) => void;
}

export default function FiltersItem({ category, priceGteValue, priceLteValue, setSelectedCategoryId }: FiltersItemProps) {
    const router = useRouter();

    const handleSearch = (categoryId: string) => {
        setSelectedCategoryId(categoryId);

        const queryParams = new URLSearchParams();
        queryParams.set('categoryId', categoryId);
        if (priceGteValue) queryParams.set('priceGte', String(priceGteValue));
        if (priceLteValue) queryParams.set('priceLte', String(priceLteValue));

        const url = `/product/productFilters?${queryParams.toString()}`;
        router.push(url);
    };

    return (
        <button
            onClick={() => handleSearch(category._id)}
            key={category._id}
            className="font-semibold text-md block text-grayUI2 p-1 cursor-pointer hover:underline hover:text-darkUi transition duration-300 ease-linear"
        >
            {category.name}
        </button>
    );
}