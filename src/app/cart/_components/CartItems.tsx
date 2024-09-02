import { IoIosClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";

export default function CartItems() {
  return (
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
  )
}
