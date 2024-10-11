"use client"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useRef } from "react"
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image'
import { TypeCategoriesData } from "@/types/categoriesType"
import Link from 'next/link';

interface props {
    CategoryData: TypeCategoriesData[]
}

export default function SliderCategory({ CategoryData }: props) {
    const plugin = useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    )

    return (
        <section className="w-full flex items-center justify-center my-5">
            <Carousel className="w-[92%]" plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset}>
                <CarouselContent className="-ml-1 ">
                    {CategoryData.map((ele, index) => (
                        <CarouselItem key={ele._id} className="pl-1 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 hover:shadow-sm ">
                            <Card className="cursor-pointer hover:border-blue-500 hover:bg-slate-50 hover:text-darkAll">
                                <Link className="flex items-center justify-evenly p-1" href={`/product/productFilters?categoryId=${ele._id}`}>
                                    <Image
                                        src={ele.image}
                                        alt={ele.name + index}
                                        width={50}
                                        height={50}
                                        className="rounded-full w-12 h-12 object-fill"
                                        style={{ objectFit: 'cover' }}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        // priority={index < 3 ? true : false} 
                                        // loading={index >= 3 ? "lazy" : undefined} 
                                        loading="lazy"
                                    />
                                    <span className="text-sm font-semibold">{ele.name}</span>
                                </Link>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
