"use client"
import { createContext, ReactNode, useContext, useEffect, useState, useOptimistic } from 'react';
import { useToken } from './SaveToken';
import { useToast } from '@/hooks/use-toast';
import { TLoggedCart } from './../types/CartType';
import { ProductElement } from './../types/CartType';

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
    UpdateCartProductQuantity: (productId: string, productCount: number) => Promise<void>;
    getCartHandel: () => void;
    clearCartHandel: () => Promise<void>;
}

interface CartProviderProps {
    children: ReactNode;
}


// const [optimisticState, addOptimistic] = useOptimistic(0);


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
    const { toast } = useToast()
    console.log(token)
    // console.log(cartproducts)

    async function AddToCartHandel(productId: string) {
        setisEmptyCart(false);

        if (CartID.find(item => item === productId) === undefined) {
            setcartNum(e => e + 1)
            setCartID(ele => [...ele, productId])
        }

        try {
            const request = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({ productId: productId }),
                // cache: 'no-store',
            });

            if (!request.ok) {
                setcartNum(e => e - 1)
                let error = await request.text()
                setisErrorCart(JSON.parse(error).message)
                console.log(JSON.parse(error).message)
                toast({
                    duration: 1500,
                    variant: "destructive",
                    description: "please login first",
                })
            } else {
                let success = await request.text()
                // console.log(JSON.parse(success))
                toast({
                    duration: 1500,
                    variant: "default",
                    className: "bg-green-500 text-white",
                    description: JSON.parse(success).message,
                })

            }
        } catch (error) {
            console.log(error)
        }
    }

    async function getCartHandel() {
        try {
            const request = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
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
                console.log(error.message)
                toast({
                    duration: 1500,
                    variant: "destructive",
                    description: "please login first",
                })
            }
            else {
                let response: TLoggedCart = await request.json()
                // console.log(response)
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


    async function UpdateCartProductQuantity(productId: string, productCount: number) {

        const CurrProduct = cartproducts.find(item => item.product._id === productId)
        if(CurrProduct){
            setistotalPrice(e => e + CurrProduct.price)
        }

        setcartproducts(currItems => {
            if (currItems.find(item => item.product._id === productId) === null) {
                toast({ duration: 1000, variant: "destructive", description: "product is not in Cart" })
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

        try {
            const request = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
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
                console.log(error.message)
                toast({
                    duration: 1500,
                    variant: "destructive",
                    description: error.message,
                })
            } else {
                let success = await request.json()
                toast({
                    duration: 1500,
                    variant: "default",
                    className: "bg-green-500 text-white",
                    description: "Update product success",
                })
            }
        } catch (error) {
            console.log(error)
        }
        setisloadingQuantity(false)
    }


    async function RemoveSpecificCartItem(productId: string) {
        setcartproducts((oldCart) => oldCart.filter((item) => item.product._id !== productId))

        setcartNum(e => e - 1)
        try {
            const request = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, {
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
                toast({
                    duration: 1500,
                    variant: "destructive",
                    description: error.message,
                })
            } else {
                let success = await request.json()
                toast({
                    duration: 1500,
                    variant: "default",
                    className: "bg-green-500 text-white",
                    description: "remove product success",
                })
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
            const request = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
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
                toast({
                    duration: 1500,
                    variant: "destructive",
                    description: error.message,
                })
            } else {
                toast({
                    duration: 1500,
                    variant: "default",
                    className: "bg-green-500 text-white",
                    description: "Clear Cart success",
                })
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        token && getCartHandel()
    }, [token])


    return (
        <CartContext.Provider value={{ cartNum, loadingQuantity, totalPrice, CartData, cartproducts, ErrorCart, EmptyCart, AddToCartHandel, getCartHandel, UpdateCartProductQuantity, RemoveSpecificCartItem, clearCartHandel }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}