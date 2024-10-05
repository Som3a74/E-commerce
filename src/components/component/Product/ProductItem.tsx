"use client"
import Image from "next/image"
import { CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { MdOutlineCompareArrows } from "react-icons/md";
import Link from "next/link";
import { TypeProductsDate } from '../../../types/type';
import BtnAddToCart from "./BtnAddToCart";
import { useWish } from "../../../context/wishlist";
import { FaStar } from "react-icons/fa";

type props = {
    ProductsData: TypeProductsDate
}

export default function ProductItem({ ProductsData }: props) {

    const { wishID ,  AddToWishHandel } = useWish()

    const isWished = wishID.includes(ProductsData._id); // Check if the product is in the wishlist

    return (
        <div className="relative w-full max-w-xs overflow-hidden group rounded-lg border-gray-200 border bg-lightUi shadow-md p-1 hover:border-darkUi duration-200 cursor-pointer">
            <Link href={`/productDetails/${ProductsData._id}`} className="ImageEle relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl group-hover:scale-105 duration-300">
                <Image
                    src={ProductsData.imageCover}
                    alt={ProductsData.title}
                    fill
                    className="object-cover p-4"
                />
                <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
            </Link>

            <div className="mt-4 px-5 pb-5">

                <div>
                    <h3 className="text-sm font-extrabold text-DarkBeLight line-clamp-1 mb-2">{ProductsData.title}</h3>
                    <h5 className="text-md font-bold tracking-tight text-GrayBeLight line-clamp-2">{ProductsData.description}</h5>
                </div>

                <div className="mt-2 mb-5 flex items-center justify-between flex-wrap">

                    <p>
                        <span className="text-3xl font-bold text-DarkBeLight">${ProductsData.price}</span>
                        <span className="text-sm text-DarkBeLight line-through">${ProductsData.price + 100}</span>
                    </p>

                    <div className="flex items-center">
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <FaStar className="h-5 w-5 text-yellow-300" />
                        <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold text-LightBeDark">{ProductsData.ratingsAverage}</span>
                    </div>

                </div>

                <BtnAddToCart ProductID={ProductsData._id}/>
            </div>

            <div className="absolute top-1 -right-10 flex flex-col h-full group-hover:right-0 duration-300">

                <span onClick={()=> AddToWishHandel(ProductsData._id)} className="w-10 h-10 inline-flex text-darkUi text-2xl items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
                    {isWished ? <FaStar className="text-red-500" /> : <CiStar className="text-DarkBeLight" />}
                </span>

                <span className="w-10 h-10 inline-flex text-darkUi text-2xl items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
                    <MdOutlineCompareArrows className="text-DarkBeLight" />
                </span>

                <Link  href={`/productDetails/${ProductsData._id}`} className="EyesEle w-10 h-10 inline-flex text-darkUi text-2xl items-center justify-center rounded-full hover:text-white hover:bg-black duration-200">
                    <FaEye className="text-DarkBeLight" />
                </Link>
            </div>
        </div>
    )
}