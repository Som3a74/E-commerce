"use client"
import Image from "next/image"
import { useState } from "react"
import { DataSpecificType } from '../../../types/SpecificProductType';

interface props {
  productData: DataSpecificType
}

export default function ProductSlider({ productData }: props) {

  const [BigImage, setBigImage] = useState('')

  return (
    <div className='flex items-start'>

      <div>
        {productData.images.map((url) =>
          <Image
            key={url}
            src={url}
            alt={url}
            width={100}
            height={100}
            className={`w-24 cursor-pointer opacity-70 hover:opacity-100 duration-300 ${BigImage == url && ` border border-gray-500 rounded-sm opacity-100 scale-105`}` }
            onClick={(() => setBigImage(url))}
          />
        )}
      </div>

      <div className="relative w-full h-96 my-auto">
        <Image
          src={BigImage || productData.imageCover}
          alt={BigImage || productData.imageCover}
          fill
          className="object-contain"
        />
      </div>

    </div>
  )
}
