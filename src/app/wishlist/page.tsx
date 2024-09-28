import React from 'react'
import WishlistContainer from './_components/WishlistContainer'

export default function page() {
  return (
    <main className="max-w-screen-xl mx-auto py-10 px-4 lg:px-0">

        <div className="border-b border-b-gray-300 pb-6">

          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Favorite Products</h2>
          <p className="mt-2 text-sm text-gray-500 max-w-[500px] tracking-wide">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta
            ut commodi ipsam provident numquam, odit cupiditate, incidunt cum
            pariatur excepturi dicta laboriosam error quo dolore libero.
            Maxime ad laborum libero?
          </p>
          
        </div>

        <WishlistContainer />
    </main>
  )
}
