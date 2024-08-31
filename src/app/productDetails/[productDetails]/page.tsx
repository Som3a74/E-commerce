import React from 'react'
import ProductContainer from '../_components/ProductContainer'

interface ProductDetailsProps {
  params: { productDetails: string };
}

export default function page({ params }: ProductDetailsProps) {
  // console.log(params.productDetails)
  return (
    <main>
      <ProductContainer productId={params.productDetails} />
    </main>
  )
}
