'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import RegisterFooter from './RegisterFooter'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { IFormInput, RegisterSchema } from './../../../../validations/RegisterSchema';


export default function RegisterForm() {

    const { register, handleSubmit, formState: { errors }, setError, } = useForm<IFormInput>({
        mode: 'all',
        resolver: zodResolver(RegisterSchema),
    });

    const SubmitForm: SubmitHandler<IFormInput> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(SubmitForm)} className="mt-8 grid grid-cols-6 gap-6">


            <div className="col-span-6 sm:col-span-3">
                <label style={errors.name &&{color:"red"}} htmlFor="name" className="block text-sm font-medium text-gray-700">First Name</label>
                <input {...register("name")} style={errors.name &&{border:"1px solid red"}} type="text" id="name" name="name" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
                {errors.name && <h6 className="p-1 text-sm text-red-800">{errors.name?.message}</h6>}
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label style={errors.phone &&{color:"red"}} htmlFor="phone" className="block text-sm font-medium text-gray-700">phone</label>
                <input {...register("phone")} style={errors.phone &&{border:"1px solid red"}} type="tel" id="phone" name="phone" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
                {errors.phone && <h6 className="p-1 text-sm text-red-500">{errors.phone.message}</h6>}
            </div>

            <div className="col-span-6">
                <label style={errors.email &&{color:"red"}} htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input {...register("email")} style={errors.email &&{border:"1px solid red"}} type="email" id="email" name="email" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
                {errors.email && <h6 className="p-1 text-sm text-red-500">{errors.email.message}</h6>}
            </div>

            <div className="col-span-6 sm:col-span-3">
                <label style={errors.password &&{color:"red"}} htmlFor="password" className="block text-sm font-medium text-gray-700">password</label>
                <input {...register("password")} style={errors.password &&{border:"1px solid red"}} type="password" id="password" name="password" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
                {errors.password && <h6 className="p-1 text-sm text-red-500">{errors.password.message}</h6>}
            </div>


            <div className="col-span-6 sm:col-span-3">
                <label style={errors.rePassword &&{color:"red"}} htmlFor="rePassword" className="block text-sm font-medium text-gray-700">Password Confirmation</label>
                <input {...register("rePassword")} style={errors.rePassword &&{border:"1px solid red"}} type="password" id="rePassword" name="rePassword" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
                {errors.rePassword && <h6 className="p-1 text-sm text-red-500">{errors.rePassword.message}</h6>}
            </div>







            <RegisterFooter />
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                <Button type='submit'>Create an account</Button>
                <p className="mt-4 text-sm text-gray-500 sm:mt-0"> Already have an account?<Link href="/login" className="text-gray-700 font-semibold hover:text-sky-500 ms-3 underline">Log in</Link>. </p>
            </div>

        </form>
    )
}
