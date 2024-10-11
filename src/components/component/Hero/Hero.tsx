import Image from 'next/image';
import { HeroData } from '../../../utility/HeroData';

export default function Hero() {
    return (
        <section>
            <div className="mx-auto py-10 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-8">
                {HeroData.map((ele, index) => (
                    <div key={ele.title} className="group relative rounded-lg w-full h-[200px] cursor-pointer overflow-hidden">
                        <Image
                            src={ele.img}
                            alt={ele.title}
                            className="rounded-lg w-full object-cover group-hover:scale-110 transition-transform duration-300"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes
                            priority={index === 0} // Prioritize loading of the first image
                            fetchPriority={index === 0 ? "high" : "low"} // Fetch priority for the first image
                            loading={index !== 0 ? "lazy" : undefined} // Lazy load for non-first images
                        />
                        <div className="absolute text-lightUi top-[10%] left-5">
                            <h3 className="md:text-2xl font-extrabold mb-3" style={{ minHeight: '20px' }} >
                                {ele.title}
                            </h3>
                            <p className="font-bold text-md md:text-lg mb-3" style={{ minHeight: '20px' }} >
                                {ele.form}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}