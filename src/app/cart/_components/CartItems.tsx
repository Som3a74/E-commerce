import { IoIosClose } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { ProductElement } from './../../../types/CartType';
import Image from "next/image";
import Link from "next/link";

type props = {
  cartproducts: ProductElement[],
  loadingQuantity: boolean,
  RemoveSpecificCartItem: (productId: string) => Promise<void>
  UpdateCartProductQuantity: (productId: string, productCount: number , action: string) => Promise<void>
}

export default function CartItems({ cartproducts, loadingQuantity, RemoveSpecificCartItem, UpdateCartProductQuantity }: props) {

  function deleteSpecifictItem(CartId: string) {
    RemoveSpecificCartItem(CartId)
  }

  async function CountProduct(CartId: string, productCount: number, action: string) {
    if (action === 'increase') {
      await UpdateCartProductQuantity(CartId, productCount + 1, action)
    }
    else if (action === 'decrease') {
      await UpdateCartProductQuantity(CartId, productCount - 1, action)
    }
  }


  return (
    <div className="divide-y divide-gray-200 border-b border-t border-gray-200">

      {cartproducts.map((ele) =>
        <div key={ele.product._id} className="flex py-6 sm:py-10">
          {/* {ele.product._id} */}
          <Link className="relative w-24 h-24 sm:h-48 sm:w-48" href={`/productDetails/${ele.product._id}`}>
            <Image
              src={ele.product.imageCover}
              alt={ele.product.title}
              fill
              className="object-cover object-center rounded-md border border-skyText/30 hover:border-sky-300 duration-300"
            />
          </Link>


          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">

            <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:gap-x-6 sm:pr-0">

              <div className="flex flex-col gap-1 col-span-3">

                <h3 className="text-base font-semibold w-full"> Divoom Tivoo Portable Bluetooth Speaker Smart Clock Alarm Pixel Art DIY By App L</h3>
                <p className="text-xs"> Brand: <span className="font-medium">{ele.product.brand.name}</span></p>
                <p className="text-xs">Category: <span className="font-medium">{ele.product.category.name}</span></p>

                <div className="flex items-center gap-6 mt-2">
                  <p className="text-base font-semibold"><span>${ele.price}</span></p>

                  <div className="flex self-center items-center justify-center gap-2">

                    <button
                      disabled={ele.count <= 1 || loadingQuantity}
                      // disabled={ele.count <= 1}
                      style={ele.count <= 1  || loadingQuantity? { opacity: '.6', cursor: 'default' } : {}}
                      onClick={() => CountProduct(ele.product._id, ele.count, 'decrease')}
                      className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 size-8 flex items-center justify-center hover:border-skyText rounded-full text-base hover:bg-white duration-200 cursor-pointer">
                      &minus;
                    </button>

                    <p className="text-base font-semibold w-10 text-center">{ele.count}</p>
                    <button
                      disabled={loadingQuantity}
                      style={loadingQuantity  ? { opacity: '.6', cursor: 'default' } : {}}
                      onClick={() => CountProduct(ele.product._id, ele.count, 'increase')}
                      className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 size-8 flex items-center justify-center hover:border-skyText rounded-full text-base hover:bg-white duration-200 cursor-pointer">
                      &#43;
                    </button>

                  </div>
                </div>
              </div>

              <div className="absolute right-0 top-0 mt-4 sm:mt-0 sm:pr-9">
                <button
                  type="button"
                  onClick={() => deleteSpecifictItem(ele.product._id)}
                  className="-m-2 inline-flex p-2 text-gray-600 hover:text-red-600"
                >
                  <span className="sr-only">Remove</span>
                  <IoIosClose className="text-2xl" />
                </button>
              </div>

            </div>

            <div>
              <p className="mt-4 mb-1 flex space-x-2 text-sm text-gray-700"><FaCheck className="text-xl text-green-500" /> <span>In stock</span></p>
              <p>You are saving<span className="text-sm font-semibold text-green-500"> $20.00 </span>upon purchase</p>
            </div>

          </div>

        </div>
      )}
    </div>
  )
}
