"use client"
import CartItems from './CartItems'
import CheckoutCart from './CheckoutCart';
import { useEffect } from 'react';
import { useCart } from '../../../context/Cart';
import { useToken } from '../../../context/SaveToken';
import LoadingCartItems from './Loading/LoadingCartItems';
import LoadingCheckoutCart from './Loading/LoadingCheckoutCart';

export default function CartContainer() {
    const { getCartHandel, CartData } = useCart()
    const { token } = useToken()

    // useEffect(() => {
    //     if (token) {
    //         getCartHandel()
    //     }
    // }, [token])

    return (
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">


            <section aria-labelledby="cart-heading" className="lg:col-span-7">
                <h2 id="cart-heading" className="sr-only"> Items in your shopping cart</h2>
                {CartData ?
                    <CartItems CartData={CartData} />
                    :
                    <LoadingCartItems />
                }
            </section>

            {CartData ?
                <CheckoutCart CartData={CartData} />
                :
                <LoadingCheckoutCart/>
            }
        </div>
    )
}
