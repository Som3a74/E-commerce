import React from 'react'
import WishlistContainer from './_components/WishlistContainer'

export default function page() {
  return (
    <main className="max-w-screen-xl mx-auto py-10 px-4 lg:px-0">

      <div className="border-b border-b-gray-300 pb-6">

        <h1 className="text-2xl font-bold tracking-tight text-DarkBeLight sm:text-3xl">Favorite Products</h1>
        <p className="mt-2 text-sm text-gray-500 max-w-[600px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias laboriosam sapiente eaque nisi doloribus aliquid perspiciatis error rerum adipisci veritatis, quae cupiditate deserunt ex explicabo quis velit rem asperiores minus.
        </p>

      </div>

      <WishlistContainer />
    </main>
  )
}
