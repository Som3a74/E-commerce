'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ImSpinner2 } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { TFormInput, CheckoutSchema } from '../../validations/CheckoutSchema';
import { useToken } from '../../context/SaveToken';
import { useCart } from '../../context/Cart';
import ErrorMassegeCheckout from './_components/ErrorMassegeCheckout';
import { TbListDetails } from "react-icons/tb";
import { FaPhone } from "react-icons/fa";
import { PiCityFill } from "react-icons/pi";


const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

export default function page() {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const [isError, setisError] = useState<null | string>(null)
  const { token } = useToken()
  const { CartData } = useCart()

  const { register, handleSubmit, formState: { errors }, setError, } = useForm<TFormInput>({
    mode: 'all',
    resolver: zodResolver(CheckoutSchema),
  });

  const SubmitForm: SubmitHandler<TFormInput> = async (data) => {
    setLoading(true)
    console.log(data)
    console.log(token)
    console.log(CartData?.cartId)
    try {
      // const request = await fetch(`${baseURL}/api/v1/orders/${CartData?.cartId}?url=${domain || 'http://localhost:3000'}`,
      const request = await fetch(`${baseURL}/api/v1/orders/checkout-session/${CartData?.cartId}?url=${domain || 'http://localhost:3000'}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'token': token,
          },
          body: JSON.stringify({
            shippingAddress: data
          }),
          
          cache: 'no-store'
        }
      )

      if (!request.ok) {
        setLoading(false)
        let error = await request.json()
        setisError(error.message)
        console.log(error.message)
      }


      const response = await request.json(); 
      console.log(response)

      if (response.status == "success") {
        setLoading(false)
        window.location.href =`${response.session.url}`
      }

      // if (JSON.parse(success).message === 'success') {
      //   console.log('save');
      //   saveTokenHandel(success.token)
      //   router.replace('/')
      // }

    } catch (error) {
      console.log(error)
      // console.log(JSON.parse(error.text()))
    }
    setLoading(false)
  }


  return (
    <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

      <form onSubmit={handleSubmit(SubmitForm)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">

        <div>
          <label htmlFor="details" className="sr-only">details</label>
          <div className="relative">
            <input {...register("details")} type="text" style={errors.details && { border: "1px solid red" }} className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter details" />
            <span className="absolute text-grayUI2 inset-y-0 end-0 place-content-center px-4"><TbListDetails /></span>
          </div>
          {errors.details && <h6 className="p-1 text-sm text-red-800">{errors.details.message}</h6>}
        </div>

        <div>
          <label htmlFor="phone" className="sr-only">phone</label>
          <div className="relative">
            <input {...register("phone")} type="tel" style={errors.phone && { border: "1px solid red" }} className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter phone" />
            <span className="absolute text-grayUI2 inset-y-0 end-0 place-content-center px-4"><FaPhone /></span>
          </div>
          {errors.phone && <h6 className="p-1 text-sm text-red-800">{errors.phone.message}</h6>}
        </div>

        <div>
          <label htmlFor="city" className="sr-only">city</label>
          <div className="relative">
            <input {...register("city")} type="text" style={errors.city && { border: "1px solid red" }} className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter city" />
            <span className="absolute text-grayUI2 inset-y-0 end-0 place-content-center px-4"><PiCityFill /></span>
          </div>
          {errors.city && <h6 className="p-1 text-sm text-red-800">{errors.city.message}</h6>}
        </div>



        {isError &&
          <ErrorMassegeCheckout isError={isError} />
        }

        <Button type='submit'>
          {isLoading ? <ImSpinner2 className='animate-spin mx-14 ' /> : 'Pay Now'}
        </Button>


      </form>
    </main>
  )
}
