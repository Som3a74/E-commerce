// 'use client'
import Image from 'next/image';
import Link from 'next/link';
import { AllBrandType } from './../../../types/brandsType';

export default async function AllBrands() {
    let request = await fetch(`${process.env.BASEURL}/api/v1/brands`);

    if (!request.ok) {
        throw new Error('Failed to fetch brands')
    }
    const brandsData: AllBrandType = await request.json();

    return (
        <>
            {brandsData.data.map((ele) =>
                <Link key={ele._id} href={`/brands/${ele._id}`} className='text-center group cursor-pointer'>
                    <Image
                        src={ele.image}
                        alt={ele.name}
                        width={200}
                        height={200}
                        className='overflow-hidden group-hover:scale-105 duration-300'
                    />
                    <h3 className='font-bold text-base'>{ele.name}</h3>
                </Link>

            )}
        </>
    )
}