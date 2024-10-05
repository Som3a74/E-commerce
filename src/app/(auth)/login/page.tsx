'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PiEye } from "react-icons/pi";
import { ImSpinner2 } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormInput, LoginSchema } from './../../../validations/LoginSchema';
import HadderLogin from './_components/HadderLogin';
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import { useToken } from '../../../context/SaveToken';
import ErrorMassege from '../register/_components/ErrorMassege';


export default function page() {
  const router = useRouter()
  const [isLoading, setLoading] = useState(false)
  const [isError, setisError] = useState<null | string>(null)
  const { token, saveTokenHandel, getTokenHandel, clearTokenHandel } = useToken()

  const { register, handleSubmit, formState: { errors }, setError, } = useForm<TFormInput>({
    mode: 'all',
    resolver: zodResolver(LoginSchema),
  });

  const SubmitForm: SubmitHandler<TFormInput> = async (data) => {
    setLoading(true)
    try {
      let request = await fetch(`https://ecommerce.routemisr.com/api/v1/auth/signin`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
          cache: 'no-store'
        }
      )

      if (!request.ok) {
        setLoading(false)
        let error = await request.text()
        setisError(JSON.parse(error).message)
        console.log(JSON.parse(error).message)
      }


      let success = await request.text()
      console.log(JSON.parse(success).message)

      if (JSON.parse(success).message === 'success') {
        console.log('save');
        saveTokenHandel(JSON.parse(success).token)
        router.replace('/')
      }

    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }


  return (
    <main className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <HadderLogin />

      <form onSubmit={handleSubmit(SubmitForm)} className="mx-auto mb-0 mt-8 max-w-md space-y-4">


        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <div className="relative">
            <input {...register("email")} type="email" style={errors.email && { border: "1px solid red" }} className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" />
            <span className="absolute text-grayUI2 inset-y-0 end-0 place-content-center px-4">@</span>
          </div>
          {errors.email && <h6 className="p-1 text-sm text-red-800">{errors.email.message}</h6>}
        </div>

        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <div className="relative">
            <input {...register("password")} type="password" style={errors.password && { border: "1px solid red" }} className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" />
            <span className="absolute text-grayUI2 inset-y-0 end-0 place-content-center px-4"><PiEye /> </span>
          </div>
          {errors.password && <h6 className="p-1 text-sm text-red-800">{errors.password.message}</h6>}
        </div>

        {isError &&
          <ErrorMassege isError={isError} />
        }

        <div className="flex items-center justify-between">
          <Button type='submit'>
            {isLoading ? <ImSpinner2 className='animate-spin mx-14 ' /> : 'Create an account'}
          </Button>

          <p className="text-sm text-gray-500">No account? <Link className="underline ms-1 font-semibold hover:text-sky-500" href="/register">register</Link></p>
        </div>

      </form>
    </main>
  )
}
