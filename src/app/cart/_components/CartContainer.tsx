import CartItems from './CartItems'
import CheckoutCart from './CheckoutCart';

export default function CartContainer() {
    return (
        <div className="mt-10 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
            <CartItems />
            <CheckoutCart />
        </div>
    )
}
