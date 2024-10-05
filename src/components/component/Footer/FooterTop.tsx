import Image from 'next/image'
import { incentives } from '../../../utility/FooterTopData'

export default function FooterTop() {
    return (
        <section className='py-0 mt-5'>
            <div className="container w-full mx-auto">
                <div className=" rounded-2xl bg-grayUI100 px-6 py-16 sm:p-16">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-DarkBeLight">
                                We built our business on customer service
                            </h2>
                        </div>
                    </div>
                    <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none lg:grid-cols-3">
                        {incentives.map((item) => (
                            <div
                                key={item?.name}
                                className="text-center sm:flex sm:text-left lg:block lg:text-center"
                            >
                                <div className=" sm:flex-shrink-0">
                                    <div className="flex-root">
                                        <Image
                                            src={item?.imageSrc}
                                            alt="image"
                                            width={100}
                                            height={100}
                                            className="mx-auto h-16 w-16"
                                        />
                                    </div>
                                </div>
                                <div className="mt-3 sm:ml-6 lg:ml-0">
                                    <h3 className="text-base font-medium text-grayUI2">
                                        {item?.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-grayUI">
                                        {item?.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
