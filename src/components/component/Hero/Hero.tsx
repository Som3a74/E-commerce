import Image from 'next/image';
import { HeroData } from '../../../utility/HeroData'

export default function Hero() {
    return (
        <section>
            <div className='mx-auto py-10 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {HeroData.map((ele) =>
                    <div key={ele.title} className='flex-1 group relative rounded-lg cursor-pointer overflow-hidden '>
                        <Image
                            src={ele.img}
                            width={500}
                            height={500}
                            alt={ele.title}
                            className="rounded-lg w-full group-hover:scale-110 transition-transform duration-300"
                        />

                        <div style={ele.color === 'black' ? { color: 'black' } : { color: 'white' }} className='absolute w-[50%] text-lightUi top-[10%] left-5'>
                            <h3 className='md:text-2xl font-extrabold mb-3'>
                                {ele.title}
                            </h3>
                            <p className='font-bold text-md md:text-lg mb-3'>
                                {ele.form}
                            </p>

                            <p className='mt-14'>
                                {ele.shop}
                            </p>

                        </div>

                    </div>
                )}
            </div>
        </section>
    )
}