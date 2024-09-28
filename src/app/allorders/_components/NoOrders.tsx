import Link from 'next/link'

export default function NoOrders() {
    return (
        <div className=" my-10 flex flex-col items-center">
            <p className="text-2xl font-semibold">No orders yet</p>
            <p>You did not create any purchase from us</p>
            <Link href={"/product"} className="mt-2 bg-gray-800 text-gray-100 px-6 py-2 rounded-md hover:bg-black hover:text-white duration-200">
                Go to Shopping
            </Link>
        </div>
    )
}
