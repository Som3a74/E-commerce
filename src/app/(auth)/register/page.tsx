import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Loginbg from '../../../assets/Loginbg.webp'
import React from 'react'
import Link from 'next/link'

export default function page() {

  return (
    <main className="bg-white mb-10 lg:mb-0">
      <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-12 gap-4 justify-items-center">

        <section className="relative hidden lg:block w-full h-[82vh] lg:col-span-5 xl:col-span-6">
          <Image src={Loginbg} alt='Loginbg' fill className="object-cover" />

          <div className="hidden lg:block absolute bottom-0  p-12">
            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Welcome to Squid 🦑</h2>
            <p className="mt-4 leading-relaxed text-white/90">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.</p>
          </div>

        </section >



        <main className="flex items-center justify-center px-8 col-span-12 lg:col-span-7 xl:col-span-6">
          <form className="mt-8 grid grid-cols-6 gap-6">




            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" id="FirstName" name="first_name" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
            </div>


            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">phone</label>
              <input type="tel" id="phone" name="phone" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
            </div>


            <div className="col-span-6">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="Email" name="email" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
            </div>


            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="Password" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="Password" name="password" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
            </div>
            

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">Password Confirmation</label>
              <input type="password" id="PasswordConfirmation" name="password_confirmation" className="mt-1 w-full rounded-lg border border-gray-200 p-3 pe-12 text-sm shadow-sm  focus:border-sky-400 bg-white text-gray-700" />
            </div>










            <div className="col-span-6">
              <label htmlFor="MarketingAccept" className="flex gap-4">
                <input type="checkbox" id="MarketingAccept" name="marketing_accept" className="size-5 rounded-md border-gray-200 bg-white shadow-sm" />
                <span className="text-sm text-gray-700"> I want to receive emails about events, product updates and company announcements.</span>
              </label>
            </div>
            <div className="col-span-6">
              <p className="text-sm text-gray-500">By creating an account, you agree to our
                <a href="#" className="text-gray-700 underline"> terms and conditions </a>and
                <a href="#" className="text-gray-700 underline">privacy policy</a>.
              </p>
            </div>
            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <Button type='submit'>Create an account</Button>
              <p className="mt-4 text-sm text-gray-500 sm:mt-0"> Already have an account?<Link href="/login" className="text-gray-700 font-semibold hover:text-sky-500 ms-3 underline">Log in</Link>. </p>
            </div>

          </form>
        </main>


      </div>
    </main>
  )
}
