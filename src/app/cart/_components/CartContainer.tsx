"use client"
import CartItems from './CartItems'
import CheckoutCart from './CheckoutCart';
import { useEffect } from 'react';
import { useCart } from '../../../context/Cart';
import { useToken } from '../../../context/SaveToken';

export default function CartContainer() {
    const { getCartHandel , CartData } = useCart()
    const { token } = useToken()

    useEffect(() => {
        if (token) {
            getCartHandel()
        }
    }, [token])

    return (
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <CartItems />
            <CheckoutCart CartData={CartData} />
        </div>
    )
}
