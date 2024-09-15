"use client"
import CartItems from './CartItems'
import CheckoutCart from './CheckoutCart';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useCart } from '../../../context/Cart';
import { useToken } from '../../../context/SaveToken';
import LoadingCartItems from './Loading/LoadingCartItems';
import LoadingCheckoutCart from './Loading/LoadingCheckoutCart';
import CartEmpty from './CartEmpty';
import { Button } from '@/components/ui/button';
import { ImSpinner2 } from 'react-icons/im';
import { useRouter } from 'next/navigation'

export default function CartContainer() {
    const { getCartHandel, CartData, EmptyCart, loadingQuantity, RemoveSpecificCartItem, UpdateCartProductQuantity, cartproducts, clearCartHandel } = useCart()
    const [isLoading, setIsLoading] = useState(false);
    const { token } = useToken()
    const router = useRouter()

    // console.log(cartproducts.length)

    async function handleClearCart() {
        setIsLoading(true);
        await clearCartHandel();
        setIsLoading(false);
    }

    useEffect(() => {
        if (token) {
            getCartHandel()
        }
        // else {
        //     router.replace('/login')
        // }
    }, [token])

    return (
        <>
            {!EmptyCart ?
                <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">

                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only"> Items in your shopping cart</h2>
                        {CartData ?
                            <>
                                <CartItems loadingQuantity={loadingQuantity} RemoveSpecificCartItem={RemoveSpecificCartItem} UpdateCartProductQuantity={UpdateCartProductQuantity} cartproducts={cartproducts} />
                                <Button
                                    disabled={isLoading}
                                    onClick={() => handleClearCart()}
                                    className='px-10 py-5 mt-6'
                                    variant="destructive"
                                >
                                    {isLoading ? <ImSpinner2 className='animate-spin mx-14' /> : 'Clear Cart'}
                                </Button>
                            </>

                            : <LoadingCartItems />}
                    </section>


                    {CartData ? <CheckoutCart CartData={CartData} /> : <LoadingCheckoutCart />}
                </div>

                : <CartEmpty />
            }
        </>
    )
}
