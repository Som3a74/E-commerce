import Link from 'next/link'
import { TOrdersUser } from '../../../types/TOrders'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import Image from 'next/image'
type props = {
    order: TOrdersUser
    index: number
}
export default function OrederItems({ order, index }: props) {
    return (
        <div className="pt-6">



            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">

                    <AccordionTrigger className="text-base font-semibold leading-7 text-gray-900">Order Number:{" "} {index + 1} </AccordionTrigger>


                    <AccordionContent className="mt-5 pr-12">
                        <div className="flex flex-col gap-2 bg-[#f4f4f480] p-5 border border-gray-200">
                            <p className="text-base font-semibold">
                                Your order{" "}
                                <span className="text-skyText">#{order?.id}...</span>{" "}has shipped and will be with you soon.
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className="text-gray-600">
                                    Order Item Count:{" "}
                                    <span className="text-black font-medium">{order?.cartItems.length}</span>
                                </p>
                                <p className="text-gray-600">
                                    Payment Status:{" "}
                                    <span className="text-black font-medium">{order?.paymentMethodType}</span>
                                </p>
                                <p className="text-gray-600">
                                    Order Amount :{" "}
                                    <span className="text-black font-medium">${order?.totalOrderPrice}</span>
                                </p>
                            </div>



                            {order?.cartItems?.map(item =>
                                <div key={item?._id} className="flex space-x-6 border-b border-gray-200 py-3">

                                    <Link href={`/productDetails/${item.product._id}`} className="h-20 w-20 flex-none sm:h-40 sm:w-40 rounded-lg bg-gray-100 border border-gray-300 hover:border-skyText overflow-hidden" >
                                        <Image
                                            src={item.product.imageCover}
                                            alt="productImg"
                                            width={200}
                                            height={200}
                                            className="h-full w-full object-cover object-center hover:scale-110 duration-300"
                                        />
                                    </Link>

                                    <div className="flex flex-auto flex-col">

                                        <div>
                                            <Link href={`/productDetails/${item.product._id}`} className="font-medium text-gray-900">
                                                {item?.product.title}
                                            </Link>
                                            <p className="mt-2 text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus dolore, facilis iste obcaecati ab nesciunt ducimus quidem molestias aut? Aut vitae error delectus itaque facilis obcaecati nemo dolore cumque. Blanditiis minus corrupti dignissimos, voluptas iusto, eligendi maiores doloremque aliquid mollitia in hic dolores pariatur doloribus dolorum totam. Facilis, dignissimos.</p>
                                        </div>

                                        <div className="mt-6 flex flex-1 items-end">
                                            <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                                                <div className="flex">
                                                    <dt className="font-medium text-gray-900">Quantity</dt>
                                                    <dd className="ml-2 text-gray-700">{item?.count}</dd>
                                                </div>
                                                <div className="flex pl-4 sm:pl-6">
                                                    <dt className="text-black font-bold">Price</dt>
                                                    <dd className="ml-2 text-gray-700">
                                                        <span className="text-black font-bold">
                                                            <dd className="ml-2 text-gray-700">${item?.price}</dd>
                                                        </span>
                                                    </dd>
                                                </div>
                                                <div className="flex pl-4 sm:pl-6">
                                                    <dt className="font-medium text-gray-900">SubTotal</dt>
                                                    <dd className="ml-2 text-gray-700">
                                                        <span className="text-black font-bold">
                                                            <dd className="ml-2 text-gray-700">${item?.price *  item?.count}</dd>
                                                        </span>
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>

                                    </div>
                                </div>
                            )}
                        </div>
                    </AccordionContent>



                </AccordionItem>
            </Accordion>


            {/* {order?.orderItems?.map((item: ProductProps) => (
                            <div
                                key={item?._id}
                                className="flex space-x-6 border-b border-gray-200 py-3"
                            >
                                <Link
                                    to={`/product/${item?._id}`}
                                    className="h-20 w-20 flex-none sm:h-40 sm:w-40 rounded-lg bg-gray-100 border border-gray-300 hover:border-skyText overflow-hidden"
                                >
                                    <img
                                        src={item?.images[0]}
                                        alt="productImg"
                                        className="h-full w-full object-cover object-center hover:scale-110 duration-300"
                                    />
                                </Link>
                                <div className="flex flex-auto flex-col">
                                    <div>
                                        <Link
                                            to={`/product/${item?._id}`}
                                            className="font-medium text-gray-900"
                                        >
                                            {item?.name}
                                        </Link>
                                        <p className="mt-2 text-sm text-gray-900">
                                            {item?.description}
                                        </p>
                                    </div>


                                    <div className="mt-6 flex flex-1 items-end">
                                        <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                                            <div className="flex">
                                                <dt className="font-medium text-gray-900">
                                                    Quantity
                                                </dt>
                                                <dd className="ml-2 text-gray-700">
                                                    {item?.quantity}
                                                </dd>
                                            </div>
                                            <div className="flex pl-4 sm:pl-6">
                                                <dt className="text-black font-bold">
                                                    Price
                                                </dt>
                                                <dd className="ml-2 text-gray-700">
                                                    <span className="text-black font-bold">
                                                        <FormattedPrice
                                                            amount={item?.discountedPrice}
                                                        />
                                                    </span>
                                                </dd>
                                            </div>
                                            <div className="flex pl-4 sm:pl-6">
                                                <dt className="font-medium text-gray-900">
                                                    SubTotal
                                                </dt>
                                                <dd className="ml-2 text-gray-700">
                                                    <span className="text-black font-bold">
                                                        <FormattedPrice
                                                            amount={
                                                                item?.discountedPrice *
                                                                item?.quantity
                                                            }
                                                        />
                                                    </span>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>



                                </div>
                            </div>
                        ))} */}


        </div>
    )
}
