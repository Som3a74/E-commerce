"use client"
import { useEffect } from "react"
import { useWish } from "../../../context/wishlist"
import { useToken } from './../../../context/SaveToken';
import WishEmpty from "./WishEmpty";
import WishlistItem from "./WishlistItem";
import LoadingCartItems from './../../cart/_components/Loading/LoadingCartItems';

export default function WishlistContainer() {

  const { wishNum, wishData, wishproducts, RemoveSpecificWishItem, ErrorWish, EmptyWish, getWishHandel } = useWish()
  const { Storetoken } = useToken()

  useEffect(() => {
     Storetoken && getWishHandel()
  }, [])


  return (
    <div className="mt-6 flow-root px-4 sm:mt-10 sm:px-0">


      {wishData ?

        <div className="-my-6 divide-y divide-gray-200 sm:-my-10">

          {wishproducts?.length !== 0 || wishNum !== 0 ?
            <>
              {wishproducts?.map((product) =>
                <WishlistItem key={product?._id} product={product} RemoveSpecificWishItem={RemoveSpecificWishItem} />
              )}
            </>

            : <WishEmpty />
          }

        </div>

        : EmptyWish ? <WishEmpty /> : <LoadingCartItems />
      }


    </div>
  )
}