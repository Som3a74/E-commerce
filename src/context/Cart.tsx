"use client"
import { createContext, ReactNode, useContext, useEffect, useState, useOptimistic } from 'react';
import { useToken } from './SaveToken';
import { TLoggedCart } from './../types/CartType';
import { ProductElement } from './../types/CartType';
import { toast } from 'sonner';

interface CartContextType {
    cartNum: number;
    CartData: TLoggedCart | null;
    cartproducts: ProductElement[] | [];
    ErrorCart: string | null;
    totalPrice: number;
    EmptyCart: boolean;
    loadingQuantity: boolean;
    AddToCartHandel: (productId: string) => Promise<void>;
    RemoveSpecificCartItem: (productId: string) => Promise<void>;
    UpdateCartProductQuantity: (productId: string, productCount: number, action: string) => Promise<void>;
    getCartHandel: () => void;
    clearCartHandel: () => Promise<void>;
    createCashOrder: (shippingAddress: {}, token: string) => Promise<void>;
}

const baseURL = process.env.NEXT_PUBLIC_BASEURL;
const domain = process.env.NEXT_PUBLIC_DOMAIN;

interface CartProviderProps {
    children: ReactNode;
}

const CartContext = createContext({} as CartContextType);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

    const { token, getTokenHandel } = useToken()
    const [cartNum, setcartNum] = useState<number>(0);
    const [CartData, setCartData] = useState<TLoggedCart | null>(null);
    const [CartID, setCartID] = useState<(string)[]>([]);
    const [cartproducts, setcartproducts] = useState<ProductElement[] | []>([]);
    const [ErrorCart, setisErrorCart] = useState<string | null>(null);
    const [totalPrice, setistotalPrice] = useState<number>(0);
    const [EmptyCart, setisEmptyCart] = useState<boolean>(false);
    const [loadingQuantity, setisloadingQuantity] = useState<boolean>(false);

    // console.log(token)
    // console.log(cartproducts)

    // useEffect(() => {
    //     getTokenHandel()
    // }, [])


    async function AddToCartHandel(productId: string) {
        setisEmptyCart(false);

        if (CartID.find(item => item === productId) === undefined) {
            setcartNum(e => e + 1)
            setCartID(ele => [...ele, productId])
        }

        try {
            const request = await fetch(`${baseURL}/api/v1/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({ productId: productId }),
            });

            if (!request.ok) {
                setcartNum(e => e - 1)
                let error = await request.text()
                setisErrorCart(JSON.parse(error).message)
                console.log(JSON.parse(error).message)
                toast.error('please login first')
            } else {
                let success = await request.text()
                // console.log(JSON.parse(success))
                toast.success('Product added successfully')

            }
        } catch (error) {
            console.log(error)
        }
    }

    async function getCartHandel() {
        try {
            const request = await fetch(`${baseURL}/api/v1/cart`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                cache: 'no-store',
            });
            if (!request.ok) {
                let error = await request.json()
                setisErrorCart(error.message)
                toast.error(error.message)
            }
            else {
                let response: TLoggedCart = await request.json()
                // console.log(response.cartId)
                setcartNum(response.numOfCartItems)
                setCartData(response)
                setCartID(response.data.products.map(ele => ele.product._id))
                setcartproducts(response.data.products)
                setistotalPrice(response?.data?.totalCartPrice)
                if (+response?.numOfCartItems === 0) {
                    setisEmptyCart(true)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }


    async function UpdateCartProductQuantity(productId: string, productCount: number, action: string) {

        const CurrProduct = cartproducts.find(item => item.product._id === productId)
        if (CurrProduct) {
            if (action === 'increase') {
                setistotalPrice(e => e + CurrProduct.price)
            } else if (action === 'decrease') {
                setistotalPrice(e => e - CurrProduct.price)
            }
        }

        setcartproducts(currItems => {
            if (currItems.find(item => item.product._id === productId) === null) {
                toast.error('product is not in Cart')

                return { ...currItems, count: 1 }
            } else {
                return currItems.map(item => {
                    if (item.product._id === productId) {
                        return { ...item, count: productCount }
                    } else {
                        return item
                    }
                })
            }
        })

        setisloadingQuantity(true)
        toast.success('Update product success')
        try {
            const request = await fetch(`${baseURL}/api/v1/cart/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({ count: productCount }),
                cache: 'no-store',
            });

            if (!request.ok) {
                let error = await request.json()
                setisErrorCart(error.message)
                toast.error(error.message)
            } else {
                let success = await request.json()
            }
        } catch (error) {
            console.log(error)
        }
        setisloadingQuantity(false)
    }


    async function RemoveSpecificCartItem(productId: string) {
        setcartproducts((oldCart) => oldCart.filter((item) => item.product._id !== productId))

        const CurrProduct = cartproducts.find(item => item.product._id === productId)
        if (CurrProduct) {
            setistotalPrice(e => e - (CurrProduct.price * CurrProduct.count))
        }
        setcartNum(e => e - 1)
        toast.success('remove product success')
        try {
            const request = await fetch(`${baseURL}/api/v1/cart/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                cache: 'no-store',
            });

            if (!request.ok) {
                let error = await request.json()
                setisErrorCart(error.message)
                console.log(error.message)
                toast.error(error.message)
            } else {
                let success = await request.json()
            }
        } catch (error) {
            console.log(error)
        }
    }


    async function clearCartHandel() {
        setisEmptyCart(true);
        setcartNum(0)
        setistotalPrice(0)
        setcartproducts([])
        setCartID([])
        setCartData(null)
        try {
            const request = await fetch(`${baseURL}/api/v1/cart`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                cache: 'no-store',
            });

            if (!request.ok) {
                let error = await request.json()
                setisErrorCart(error.message)
                toast.error(error.message)
            } else {
                toast.success('Clear Cart success')
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function createCashOrder(shippingAddress: {}, token: string) {
        console.log(shippingAddress)
        console.log(token)
        try {
            const request = await fetch(`${baseURL}/api/v1/orders/${CartData?.cartId}?url=${domain || 'http://localhost:3000'}`,
                // const request = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/66eb353b945e017d6e5bc177?url=http://localhost:3000`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'token': token,
                    },
                    body: JSON.stringify({
                        shippingAddress: shippingAddress
                    }),

                    cache: 'no-store'
                }
            )

            if (!request.ok) {
                let error = await request.json()
                setisErrorCart(error.message)
                console.log(error.message)
            }


            const response = await request.json();
            console.log(response)

            // if (JSON.parse(success).message === 'success') {
            //   console.log('save');
            //   saveTokenHandel(success.token)
            //   router.replace('/')
            // }

        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {
        token && getCartHandel()
    }, [token])


    return (
        <CartContext.Provider value={{ cartNum, loadingQuantity, totalPrice, CartData, cartproducts, ErrorCart, EmptyCart, AddToCartHandel, getCartHandel, UpdateCartProductQuantity, RemoveSpecificCartItem, clearCartHandel, createCashOrder }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}