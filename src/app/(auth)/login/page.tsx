'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { PiEye } from "react-icons/pi";
import { ImSpinner2 } from "react-icons/im";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { TFormInput, LoginSchema } from './../../../validations/LoginSchema';
import HadderLogin from './_components/HadderLogin';


export default function page() {

  const { register, handleSubmit, formState: { errors }, setError, } = useForm<TFormInput>({
    mode: 'all',
    resolver: zodResolver(LoginSchema),
  });

  const SubmitForm: SubmitHandler<TFormInput> = (data) => {
    console.log(data)
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

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">No account? <Link className="underline ms-1 font-semibold hover:text-sky-500" href="/register">register</Link></p>
          <Button type='submit'>
            submit
            {/* <ImSpinner2 className='animate-spin mx-14 ' /> */}
          </Button>
        </div>

      </form>
    </main>
  )
}
