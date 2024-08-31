import React from "react";
import { IoIosClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function page() {
    return (
        <main className="max-w-screen-xl mx-auto py-10 px-4 lg:px-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Shopping Cart
            </h1>

            <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">

                <section aria-labelledby="cart-heading" className="lg:col-span-7">
                    <h2 id="cart-heading" className="sr-only"> Items in your shopping cart</h2>

                    <div className="divide-y divide-gray-200 border-b border-t border-gray-200">

                        <div className="flex py-6 sm:py-10">

                            <a href="/product/2001">
                                <img
                                    src="https://i.ibb.co/m6ZN7LX/soundBox.webp"
                                    alt="productImage"
                                    className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48 border border-skyText/30 hover:border-skyText duration-300"
                                />
                            </a>

                            <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">
                                    <div className="flex flex-col gap-1 col-span-3">
                                        <h3 className="text-base font-semibold w-full">
                                            Divoom Tivoo Portable Bluetooth Speaker Smart Clock Alarm
                                            Pixel Art DIY By App L
                                        </h3>
                                        <p className="text-xs">
                                            Brand: <span className="font-medium">Samsung</span>
                                        </p>
                                        <p className="text-xs">
                                            Category:{" "}
                                            <span className="font-medium">TV &amp; Audio</span>
                                        </p>
                                        <div className="flex items-center gap-6 mt-2">
                                            <p className="text-base font-semibold">
                                                <span>$580.00</span>
                                            </p>
                                            <div className="flex self-center items-center justify-center gap-2">
                                                <button className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 size-8 flex items-center justify-center hover:border-skyText rounded-full text-base hover:bg-white duration-200 cursor-pointer">
                                                    &minus;
                                                </button>
                                                <p className="text-base font-semibold w-10 text-center">
                                                    1
                                                </p>
                                                <button className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 size-8 flex items-center justify-center hover:border-skyText rounded-full text-base hover:bg-white duration-200 cursor-pointer">
                                                    &#43;
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:pr-9">
                                        <div className="absolute right-0 top-0">
                                            <button
                                                type="button"
                                                className="-m-2 inline-flex p-2 text-gray-600 hover:text-red-600"
                                            >
                                                <span className="sr-only">Remove</span>
                                                <IoIosClose className="text-2xl" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <p className="mt-4 mb-1 flex space-x-2 text-sm text-gray-700">
                                        <FaCheck className="text-xl text-green-500" />
                                        <span>In stock</span>
                                    </p>
                                    <p>
                                        You are saving{" "}
                                        <span className="text-sm font-semibold text-green-500">
                                            <span>$20.00</span>
                                        </span>{" "}
                                        upon purchase
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>







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
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="h-5 w-5 text-gray-400 ml-2" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                                </svg>
                            </dt>

                            <dd className="text-sm font-medium text-gray-900">
                                <span>$25.00</span>
                            </dd>

                        </div>

                        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                            <dt className="flex text-sm text-gray-600">
                                <span>Tax estimate</span>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="h-5 w-5 text-gray-400 ml-2" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zM262.655 90c-54.497 0-89.255 22.957-116.549 63.758-3.536 5.286-2.353 12.415 2.715 16.258l34.699 26.31c5.205 3.947 12.621 3.008 16.665-2.122 17.864-22.658 30.113-35.797 57.303-35.797 20.429 0 45.698 13.148 45.698 32.958 0 14.976-12.363 22.667-32.534 33.976C247.128 238.528 216 254.941 216 296v4c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12v-1.333c0-28.462 83.186-29.647 83.186-106.667 0-58.002-60.165-102-116.531-102zM256 338c-25.365 0-46 20.635-46 46 0 25.364 20.635 46 46 46s46-20.636 46-46c0-25.365-20.635-46-46-46z"></path>
                                </svg>
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






            </div>
        </main>
    );
}
