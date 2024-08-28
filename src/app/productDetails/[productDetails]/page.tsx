import React from 'react'

export default function page({ params }: any) {
  console.log(params.productDetails)
  return (
    <div>{params.productDetails}</div>
  )
}
