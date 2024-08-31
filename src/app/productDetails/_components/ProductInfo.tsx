import { FaStar } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa6";
import ProductCount from "./ProductCount";
import { Button } from "@/components/ui/button"

export default function ProductInfo({ productData }: any) {

  async function AddToCart(producId: String) {
    let request = await fetch(`${process.env.BASEURL}/api/v1/cart`);
    if (!request) {
      throw new Error('Failed to fetch categories')
    }
    const CategoryData: any = await request.json();
  }

  return (
    <div className="flex flex-col gap-4">
      <h2 className='text-3xl font-bold'>{productData.description}</h2>

      <div className='flex items-center justify-between'>

        <div className='flex items-center gap-2 text-xl'>
          <p className='line-through text-gray-500 font-medium'>${productData.price + 100}</p>
          <p className='font-bold text-sky-500'>${productData.price}</p>
        </div>

        <div className="flex flex-wrap items-center justify-end">
          <FaStar className="h-5 w-5 text-yellow-300 hidden sm:inline-block"  />
          <FaStar className="h-5 w-5 text-yellow-300 hidden sm:inline-block" />
          <FaStar className="h-5 w-5 text-yellow-300 hidden sm:inline-block" />
          <FaStar className="h-5 w-5 text-yellow-300 hidden sm:inline-block" />
          <FaStar className="h-5 w-5 text-yellow-300 hidden sm:inline-block" />
          <span className="ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{productData.ratingsAverage} ({productData.ratingsQuantity} reviews)</span>
        </div>

      </div>

      <h5>
        <FaRegEye className="inline mb-1" />
        {productData.ratingsQuantity} people are viewing this right now
      </h5>

      <h5> You are saving <span className="font-semibold text-green-500">$100.00</span> upon purchase</h5>

      <h5 className="text-sm">Brand : <span className="font-bold text-base">{productData.brand.name}</span></h5>
      <h5 className="text-sm">Category : <span className="font-bold text-base">{productData.category.name}</span></h5>

      {/* <Button onClick={() => AddToCart(productData._id)} className="w-full mt-6 py-6 rounded-full">Buy now</Button> */}

      <ProductCount producId={productData._id}  />
    </div>
  )
}
