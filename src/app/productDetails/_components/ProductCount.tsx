"use client"
import { Button } from "@/components/ui/button"
import { useCart } from "../../../context/Cart"
import { useState } from "react"
import { ImSpinner2 } from "react-icons/im"


export default function ProductCount({ producId }: any) {
    const { AddToCartHandel } = useCart()

    // const [ShowCount, setShowCount] = useState(false)
    // const [CountNum, setCountNum] = useState(1)
    // function IncreaseCount() {
    //     setCountNum(CountNum + 1)
    //     console.log(CountNum)
    // }
    // function DecreaseCount() {
    //     setCountNum(CountNum - 1)
    //     console.log(CountNum)
    // }

    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = async (productId: string) => {
        setIsLoading(true);
        await AddToCartHandel(productId);
        setIsLoading(false);
    };


    return (
        <>

            <Button
                disabled={isLoading}
                onClick={() => handleAddToCart(producId)}
                className="w-full mt-6 py-6 rounded-full"
            >
                {isLoading ? <ImSpinner2 className='animate-spin mx-14' /> : ' Buy now'}
            </Button>




            {/* {!ShowCount &&
                <Button onClick={() => setShowCount(!ShowCount)} className="w-full mt-6 py-6 rounded-full">Buy now</Button>
            }
            {ShowCount &&
                <div className="mt-5 mx-auto">
                    <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            onClick={DecreaseCount}
                            className="size-10 me-4 flex items-center justify-center bg-slate-200 p-5 rounded-full text-gray-600 transition hover:opacity-75"
                        >
                            &minus;
                        </button>

                        <input type="number" id="Quantity" min='1' defaultValue="1" value={CountNum} className="h-10 w-24 rounded border-gray-200 sm:text-sm" />

                        <button
                            onClick={IncreaseCount}
                            type="button"
                            className="size-10 text-2xl flex items-center justify-center bg-slate-200 p-5 rounded-full text-gray-600 transition hover:opacity-75"
                        >
                            &#43;
                        </button>
                    </div>
                </div>
            } */}
        </>
    )
}
