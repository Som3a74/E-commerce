import { BsFillQuestionCircleFill } from "react-icons/bs";

export default function CheckoutCart() {
  return (
    <section aria-labelledby="summary-heading" className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
    <h2 id="summary-heading" className="text-lg font-medium text-gray-900"> Order summary</h2>
    <dl className="mt-6 space-y-4">

        <div className="flex items-center justify-between">
            <dt className="text-sm text-gray-600">Subtotal</dt>
            <dd className="text-sm font-medium text-gray-900">
                <span>$600.00</span>
            </dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="flex items-center text-sm text-gray-600">
                <span>Shipping estimate</span>
                <BsFillQuestionCircleFill className="ms-1 text-base cursor-pointer" />

            </dt>

            <dd className="text-sm font-medium text-gray-900">
                <span>$25.00</span>
            </dd>

        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="flex items-center text-sm text-gray-600">
                <span>Tax estimate</span>
                <BsFillQuestionCircleFill className="ms-1 text-base cursor-pointer" />
            </dt>

            <dd className="text-sm font-medium text-gray-900">
                <span>$15.00</span>
            </dd>

        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="text-base font-medium text-gray-900">
                Total Discount
            </dt>
            <dd className="text-base font-medium text-gray-500">
                <span>$20.00</span>
            </dd>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
            <dt className="text-base font-medium text-gray-900">Order total</dt>
            <dd className="text-lg font-bold text-gray-900">
                <span>$620.00</span>
            </dd>
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
