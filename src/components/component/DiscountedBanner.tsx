import Image from "next/image";
import SectionHadder from "./SectionHadder";
import Link from 'next/link';
import brandFive from "../../assets/brands/brandFive.webp";
import brandFour from "../../assets/brands/brandFour.webp";
import brandOne from "../../assets/brands/brandOne.webp";
import brandSix from "../../assets/brands/brandSix.webp";
import brandThree from "../../assets/brands/brandThree.webp";
import brandTwo from "../../assets/brands/brandTwo.webp";
import discountImgOne from "../../assets/brands/discountImgOne.webp";
import discountImgTwo from "../../assets/brands/discountImgTwo.webp";

export default function DiscountedBanner() {
    const popularSearchItems = [
        { title: "Men's Fashion", link: "6439d5b90049ad0b52b90048" },
        { title: "Women's Fashion", link: "6439d58a0049ad0b52b9003f" },
        { title: "Electronics", link: "6439d2d167d9aa4ca970649f" },
    ];

    return (
        <section>
            <SectionHadder linkText='View All Categories' text='Popular Search' link='/' show={false} />

            <div className="my-7 flex items-center flex-wrap gap-4">
                {popularSearchItems?.map(({ title, link }) => (
                    <Link
                        key={title}
                        href={`/product/productFilters?categoryId=${link}`}
                        className="border border-[px] border-gray-300 px-8 py-3 rounded-full capitalize font-medium hover:bg-black hover:text-white duration-200"
                    >
                        {title}
                    </Link>
                ))}
            </div>

            {/* <div className="w-full py-5 md:py-0 my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden">
                <div className="relative w-[200px] h-[200px] hidden lg:inline-flex">
                    <Image
                        src={discountImgOne}
                        alt="discountedImgOne"
                        fill
                        sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex flex-col flex-1 gap-1 items-center">
                    <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
                        <h2 className="text-darkAll">Sony Headphone</h2>
                        <Link
                            href={`/product/productFilters?categoryId=6439d2d167d9aa4ca970649f`}
                            className="border border-red-600 px-4 py-2 text-sm md:text-3xl text-red-600 rounded-full"
                        >
                            Discount 39%
                        </Link>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                        You’re out to play or stepping out to make
                    </p>
                </div>
                <div className="relative w-[200px] h-[200px] hidden lg:inline-flex">
                    <Image
                        src={discountImgTwo}
                        alt="discountedImgTwo"
                        fill
                        sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
                        className="rounded-lg object-cover"
                    />
                </div>
            </div> */}

            <div className="w-full py-5 md:py-0 my-12  bg-[#e0e0e0] md:bg-[#f6f6f6]  rounded-lg flex items-center justify-between overflow-hidden">
                <div className="relative w-[200px] h-[200px] hidden lg:inline-flex">
                    <Image
                        src={discountImgOne}
                        alt="discountedImgOne"
                        fill
                        sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex flex-col flex-1 gap-1 items-center">
                    <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl font-bold">
                        <h2 className="text-darkAll">Sony Headphone</h2>
                        <Link
                            href={`/product/productFilters?categoryId=6439d2d167d9aa4ca970649f`}
                            className="border border-red-600 px-4 py-2 text-sm md:text-3xl text-red-700 rounded-full" 
                        >
                            Discount 39%
                        </Link>
                    </div>
                    <p className="text-sm text-gray-800 font-medium"> {/* Darkened text color */}
                        You’re out to play or stepping out to make
                    </p>
                </div>
                <div className="relative w-[200px] h-[200px] hidden lg:inline-flex">
                    <Image
                        src={discountImgTwo}
                        alt="discountedImgTwo"
                        fill
                        sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>


            <div className="mt-7">
                <p className="font-bold text-2xl">Brands We Distribute</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-7">
                    {[brandOne, brandTwo, brandThree, brandFour, brandFive, brandSix].map((brand, index) => (
                        <div key={index} className="border border-r-0 border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
                            <div className="relative w-36 h-24">
                                <Image
                                    src={brand}
                                    alt={`brand-${index + 1}`}
                                    fill
                                    sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
                                    className="object-contain group-hover:opacity-50 duration-200"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}