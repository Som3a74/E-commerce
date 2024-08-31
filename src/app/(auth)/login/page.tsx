import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { PiEye } from "react-icons/pi";

export default function page() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">Get started today!</h1>

        <p className="mt-4 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
          ipsa culpa autem, at itaque nostrum!
        </p>
      </div>

      <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">Email</label>

          <div className="relative">
            <input type="email" className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter email" />

            <span className="absolute text-grayUI2 inset-y-0 end-0 place-content-center px-4">
              @
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">Password</label>

          <div className="relative">
            <input type="password" className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm" placeholder="Enter password" />

            <span className="absolute text-grayUI2 inset-y-0 end-0 place-content-center px-4">
              <PiEye />
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">No account? <Link className="underline ms-1 font-semibold hover:text-sky-500" href="/register">register</Link></p>
          <Button type="submit">Submit</Button>
        </div>

      </form>
    </div>
  )
}
