import { BsFillQuestionCircleFill } from "react-icons/bs";
import { TLoggedCart } from './../../../types/CartType';


type props = {
    CartData: TLoggedCart
    totalPrice: number
}

export default function CheckoutCart({ CartData , totalPrice }: props) {
    // await new Promise((resolve)=> setTimeout(resolve, 3000))
    return (
        <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 id="summary-heading" className="text-lg font-medium text-gray-900">Order summary</h2>
            <dl className="mt-6 space-y-4">

                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Subtotal</span>
                    <div className="text-sm font-medium text-gray-900">
                        <span>${totalPrice + ((totalPrice * .3) - 30)}</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <h3>Shipping estimate</h3>
                        <BsFillQuestionCircleFill className="ms-1 text-base cursor-pointer" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                        <span>$20.00</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className="flex items-center text-sm text-gray-600">
                        <h4>Tax estimate</h4>
                        <BsFillQuestionCircleFill className="ms-1 text-base cursor-pointer" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                        <span>$10.00</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <h3 className="text-base font-medium text-gray-900">
                        Total Discount
                    </h3>
                    <div className="text-base font-medium text-gray-500">
                        <span>$20.00</span>
                    </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                    <h3 className="text-base font-medium text-gray-900">Order total</h3>
                    <div className="text-lg font-bold text-gray-900">
                        <span>${totalPrice}</span>
                    </div>
                </div>
            </dl>

            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
                >
                    Checkout
                </button>
            </div>

        </section>
    )
}
