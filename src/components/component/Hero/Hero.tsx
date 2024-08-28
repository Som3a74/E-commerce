import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import homeBanner from '../../../assets/Hero/homeBanner.jpg';
import bannerOne from '../../../assets/Hero/bannerOne.webp';
import bannerTwo from '../../../assets/Hero/bannerTwo.webp';
import bannerThree from '../../../assets/Hero/bannerThree.webp';


const bottomNavigation = [
    { title: "New Deals at Best Prices", img: bannerOne, form: "From $40.00", shop: 'Browse Deals', link: '/', color: 'black' },
    { title: "Colorful Redmi Note 6 Pro", img: bannerTwo, form: "From $40.00", shop: 'Shop Cellphone', link: '/', color: 'white' },
    { title: "1000 mAh Power Bank", img: bannerThree, form: "From $40.00", shop: 'Shop Now', link: '/', color: 'white' },
];

export default function Hero() {
    return (
        <section>

                <div className='relative mb-14'>
                    <Image
                        src={homeBanner}
                        width={1250}
                        height={1250}
                        alt="Picture of the author"
                        className="rounded w-full object-cover"
                    />

                    <div className='absolute top-1/2 transform -translate-y-1/2 text-lightUi left-4 md:left-10'>
                        <h3 className='md:text-2xl lg:text-6xl font-bold mb-2'>
                            Mi Air Purifier
                        </h3>
                        <p className='font-medium text-sm md:text-lg mb-3'>
                            The new tech gift you are <br /> wishing for right here.
                        </p>

                        <Button className='rounded-full bg-lightUi text-darkUi md:p-6 md:font-bold hover:bg-darkUi hover:text-lightUi'>
                            Start Shopping
                        </Button>
                    </div>

                </div>




                <div className='mx-auto py-10 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {bottomNavigation.map((ele) =>
                        <div key={ele.title} className='flex-1 group relative rounded-lg cursor-pointer overflow-hidden '>
                            <Image
                                src={ele.img}
                                width={500}
                                height={500}
                                alt={ele.title}
                                className="rounded-lg w-full group-hover:scale-110 transition-transform duration-300"
                            />

                            <div style={ele.color === 'black' ? { color: 'black' } : { color: 'white' }} className='absolute w-[50%] text-lightUi top-[10%] left-5'>
                                <h3 className=' md:text-2xl font-extrabold mb-3'>
                                    {ele.title}
                                </h3>
                                <p className='font-bold text-md md:text-lg mb-3'>
                                    {ele.form}
                                </p>

                                <p className='mt-16'>
                                    {ele.shop}
                                </p>

                            </div>

                        </div>
                    )}
                </div>



        </section>
    )
}