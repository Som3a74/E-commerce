import Image from 'next/image';
import { HeroData } from '../../../utility/HeroData';

export default function Hero() {
    return (
        <section>
            <div className="mx-auto py-10 lg:px-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {HeroData.map((ele) => (
                    <div key={ele.title} className="flex-1 group relative rounded-lg cursor-pointer overflow-hidden" style={{ minHeight: '100px' }} >
                        <Image
                            src={ele.img}
                            width={300}
                            height={300}
                            alt={ele.title}
                            className="rounded-lg w-full object-cover group-hover:scale-110 transition-transform duration-300"
                            priority
                        />

                        <div className={`absolute text-lightUi top-[10%] left-5`}>
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