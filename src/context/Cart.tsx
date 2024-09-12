"use client"
import { createContext, ReactNode, useContext, useEffect, useState, useOptimistic } from 'react';
import { useToken } from './SaveToken';
import { useToast } from '@/hooks/use-toast';
import { TLoggedCart } from './../types/CartType';

interface CartContextType {
    cartNum: number;
    CartData: TLoggedCart;
    ErrorCart: string;
    AddToCartHandel: () => void;
    getCartHandel: () => void;
    clearCartHandel: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}


// const [optimisticState, addOptimistic] = useOptimistic(0);


const CartContext = createContext<CartContextType | any | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

    const { token, getTokenHandel } = useToken()
    console.log(token)
    const [CartNum, setCartNum] = useState<number>(0);
    const [CartData, setCartData] = useState<TLoggedCart | null>(null);
    const [ErrorCart, setisErrorCart] = useState<string | null>(null);
    const { toast } = useToast()

    async function AddToCartHandel(CartId: string) {
        try {
            const request = await fetch(`https://ecommerce.routemisr.com/api/v1/cart`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({ productId: CartId }),
                // cache: 'no-store',
            });

            if (!request.ok) {
                let error = await request.text()
                setisErrorCart(JSON.parse(error).message)
                console.log(JSON.parse(error).message)
                toast({
                    variant: "destructive",
                    description: "please login first",
                })
            } else {

                let success = await request.text()
                console.log(JSON.parse(success).message)
                toast({
                    variant: "default",
                    className: "bg-green-500 text-white",
                    description: JSON.parse(success).message,
                })
                getCartHandel();
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
                    variant: "destructive",
                    description: "please login first",
                })
            }
            else {
                let response: TLoggedCart = await request.json()
                // console.log(response)
                setCartNum(response.numOfCartItems)
                setCartData(response)
            }

        } catch (error) {
            console.log(error)
        }
    }

    function clearCartHandel() {
        console.log('hello');
    }


    useEffect(() => {
        if (token) {
            getCartHandel()
        }
    }, [token])


    return (
        <CartContext.Provider value={{ CartNum, CartData, ErrorCart, AddToCartHandel, getCartHandel, clearCartHandel }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}