import React from 'react'
import ProductContainer from '../_components/ProductContainer'

interface props {
  params: { productDetails: string };
}

export default function page({ params }: props) {
  // console.log(params.productDetails)
  return (
    <main>
      <ProductContainer productId={params.productDetails} />
    </main>
  )
}
