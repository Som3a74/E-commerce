import SectionHadder from './SectionHadder';
import Image from 'next/image';
import Link from 'next/link';

export default async function PopularCategories() {
    let request = await fetch(`${process.env.BASEURL}/api/v1/categories`);
    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const CategoryData: any = await request.json();
    return (
        <section>
            <SectionHadder  linkText='View All Categories' text='Popular categories' link='/' />

            <div className='mx-auto py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {CategoryData.data.map((ele: any) => (
                    <Link key={ele.name} href='/' className='relative h-60 w-full group overflow-hidden cursor-pointer rounded-md'>
                        <Image
                            src={ele.image}
                            alt={ele.name}
                            fill
                            className="object-cover object-top rounded-md h-auto group-hover:scale-110 duration-300"
                        />
                        <span className="absolute bottom-0 pt-3 text-darkUi bg-grayUI100 w-full text-center text-sm md:text-base font-bold">{ele.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}