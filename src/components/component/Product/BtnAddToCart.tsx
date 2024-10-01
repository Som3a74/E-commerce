"use client"
import { FaCartShopping } from "react-icons/fa6";
import { useCart } from "../../../context/Cart";
import { ImSpinner2 } from "react-icons/im";
import { useState } from "react";


export default function BtnAddToCart({ ProductID }: { ProductID: string }) {
    const { AddToCartHandel } = useCart()
    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = async (productId: string) => {
        setIsLoading(true); 
        await AddToCartHandel(productId);
        setIsLoading(false); 
    };


    return (
        <button
            disabled={isLoading}
            onClick={() => handleAddToCart(ProductID)}
            className="flex w-full items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
            <FaCartShopping className="me-3 text-xl" />
            {isLoading ? <ImSpinner2 className='animate-spin mx-6 overflow-hidden' /> : 'Add to cart'}
        </button>
    )
}
