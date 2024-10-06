"use client"
import { Button } from "@/components/ui/button"
import { useCart } from "../../../context/Cart"
import { useState } from "react"
import { ImSpinner2 } from "react-icons/im"


export default function ProductCount({ producId }: any) {
    const { AddToCartHandel } = useCart()

    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = async (productId: string) => {
        setIsLoading(true);
        await AddToCartHandel(productId);
        setIsLoading(false);
    };


    return (
        <Button
            disabled={isLoading}
            onClick={() => handleAddToCart(producId)}
            className="w-full mt-6 py-6 rounded-full"
        >
            {isLoading ? <ImSpinner2 className='animate-spin mx-14' /> : ' Buy now'}
        </Button>
    )
}
