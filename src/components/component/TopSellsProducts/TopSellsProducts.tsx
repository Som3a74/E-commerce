import SectionHadder from '../SectionHadder';
import Image from 'next/image';
import Link from 'next/link';

export default async function TopSellsProducts() {
    let request = await fetch(`${process.env.BASEURL}/api/v1/categories/6439d2d167d9aa4ca970649f/subcategories`);
    if (!request.ok) {
        throw new Error('Failed to fetch categories')
    }
    const CategoryData: any = await request.json();
    return (
        <section>
            <SectionHadder text='Top Sells Products' linkText='View All Products' link='/' />

            <div className='mx-auto py-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8'>
                {CategoryData.data.map((ele: any) => (
                    <Link key={ele.name} href='/' className='relative h-60 w-full group overflow-hidden cursor-pointer rounded-md'>
                        <Image
                            src={ele.image}
                            alt={ele.name}
                            fill
                            className="object-cover object-top rounded-md h-auto group-hover:scale-110 duration-300"
                        />
                        <span className="absolute bottom-0 pt-3 bg-slate-100 w-full text-center text-sm md:text-base font-bold">{ele.name}</span>
                    </Link>
                ))}
            </div>
        </section>
    )
}