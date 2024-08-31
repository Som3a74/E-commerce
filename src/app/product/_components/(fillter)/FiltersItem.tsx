'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FiltersItem({ category }: any) {

    const router = useRouter()

    return (
        <button
            onClick={() => router.push(`/product/productFilters?categoryId=${category._id}`)}
            key={category._id}
            className="font-semibold text-md block text-grayUI2 p-1 cursor-pointer hover:underline hover:text-darkUi ease-linear duration-300">
            {category.name}
        </button>
    )
}
