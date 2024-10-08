import Image from 'next/image';
import Link from 'next/link';
import { AllBrandType } from './../../../types/brandsType';

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

export default async function AllBrands() {
    let request = await fetch(`${baseURL}/api/v1/brands`);

    if (!request.ok) {
        throw new Error('Failed to fetch brands');
    }
    const brandsData: AllBrandType = await request.json();

    return (
        <>
            {brandsData.data.map((ele, index) => (
                <Link key={ele._id} href={`/brands/${ele._id}`} className='text-center group cursor-pointer'>
                    <div className='relative w-52 h-52 overflow-hidden'>
                        <Image
                            src={ele.image}
                            alt={ele.name}
                            width={150} 
                            height={150} 
                            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" 
                            className='object-fill w-full h-full group-hover:scale-105 duration-300' 
                            priority={index < 2} 
                        />
                    </div>
                    <h3 className='font-bold text-base'>{ele.name}</h3>
                </Link>
            ))}
        </>
    );
}