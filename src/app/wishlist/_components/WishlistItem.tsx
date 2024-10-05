import { TProduct } from '../../../types/WishType'
import { IoIosClose } from "react-icons/io";
import BtnAddToCart from './../../../components/component/Product/BtnAddToCart';
import Image from 'next/image';
import Link from 'next/link';


type props = {
  product: TProduct,
  RemoveSpecificWishItem: (productId: string) => Promise<void>
}


export default function WishlistItem({ product, RemoveSpecificWishItem }: props) {
  return (
    <div className="flex py-6">
      <div className="min-w-0 flex-1 lg:flex lg:flex-col">
        <div className="lg:flex-1">
          <div className="sm:flex justify-between">
            <div>
              <h4 className="font-medium text-DarkBeLight">{product?.title}</h4>
              <p className="mt-2 hidden text-sm text-gray-500 sm:block">
                {product?.description}
              </p>
              <p className="text-sm mt-1">
                Brand: <span className="font-medium">{product?.brand.name}</span>
              </p>
              <p className="text-sm mt-1">
                Category:{" "}
                <span className="font-medium">{product?.category.name}</span>
              </p>
            </div>
            <span
              onClick={() => RemoveSpecificWishItem(product?._id)}
              className="text-lg text-gray-600 hover:text-red-600 duration-200 cursor-pointer inline-block mt-4 sm:mt-0"
            >
              <IoIosClose className='size-7' />
            </span>
          </div>


          <div className="flex text-sm items-center gap-6 font-medium py-4">
            <div>
              <span className='line-through text-gray-500 font-medium'>${product.price + 20}.00</span>
              <span className='mx-2 font-bold text-sky-400'>${product.price}.00</span>
            </div>
            <div>
              <BtnAddToCart ProductID={product._id} />
            </div>
          </div>

        </div>

        <p> You are saving{" "} <span className="text-sm font-semibold text-green-500"> $20.00 </span>{" "} upon purchase</p>
      </div>

      <Link href={`/productDetails/${product._id}`} className="ml-4 flex-shrink-0 h-20 w-20 sm:w-40 sm:h-40 sm:order-first sm:m-0 sm:mr-6 border border-gray-200 rounded-md hover:border-skyText duration-200 cursor-pointer group overflow-hidden">
        <Image
          src={product?.imageCover}
          alt="productImage"
          width={200}
          height={200}
          className="h-full w-full rounded-lg object-cover object-center group-hover:scale-110 duration-200"
        />
      </Link>

    </div>
  )
}
