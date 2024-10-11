"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import bannerImgOne from "../../../assets/Hero/bannerImgOne.cc70f00d1512cb1f97f6.webp";
import bannerImgTwo from "../../../assets/Hero/bannerImgTwo.d93152138c5c9da3de58.webp";
import bannerImgThree from "../../../assets/Hero/bannerImgThree.cdd63ff84acf53a73a0d.webp";
import Image from 'next/image';

export default function MainSlider() {
    const settings = {
        fade: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear",
    };

    const showImage = [bannerImgOne, bannerImgTwo, bannerImgThree];

    return (
        <div className='overflow-hidden border-none hidden sm:block lg:h-[320px] md:h-[260px]'>
            <Slider {...settings} className='border-none overflow-hidden'>
                {showImage.map((ele, index) => (
                    <div key={index} className="border-none overflow-hidden h-full">
                        <Image
                            src={ele}
                            alt={`Banner Image ${index + 1}`}
                            width={1200}
                            height={600}  
                            priority
                            style={{ objectFit: 'cover' }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw"
                            className="w-full h-full border-none rounded-md overflow-hidden"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}