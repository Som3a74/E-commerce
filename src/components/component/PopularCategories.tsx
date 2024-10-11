import SectionHadder from './SectionHadder';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAllCategories } from './../../types/categoriesType';

export default async function PopularCategories() {
    let request = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/v1/categories`);
    if (!request.ok) {
        throw new Error('Failed to fetch categories');
    }
    const CategoryData: TypeAllCategories = await request.json();

    return (
        <section>
            <SectionHadder linkText='View All Categories' text='Popular categories' link='/' show={true} />

            <div className='mx-auto py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {CategoryData.data.map((ele ,index) => (
                    <Link key={ele._id} href={`/product/productFilters?categoryId=${ele._id}`} className='relative h-60 w-full group overflow-hidden cursor-pointer rounded-md'>
                        <div className="relative w-full h-full">
                            <Image
                                src={ele.image}
                                alt={ele.image + ele.slug}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover object-top rounded-md group-hover:scale-110 transition-transform duration-300"
                                // loading="lazy" 
                                // priority={false}
                                priority={index < 0 || index < 1 ? true : false} 
                            />
                        </div>
                        <span className="absolute bottom-0 pt-3 text-DarkBeLight bg-grayUI100 w-full text-center text-sm md:text-base font-bold">
                            {ele.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}