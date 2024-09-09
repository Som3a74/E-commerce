"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useToken } from './SaveToken';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
    cartNum: string;
    CartData: string[];
    ErrorCart: string;
    AddToCartHandel: () => void;
    getCartHandel: () => void;
    clearCartHandel: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}
const CartContext = createContext<CartContextType | any | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {

    const { token, getTokenHandel } = useToken()
    console.log(token)
    const [CartNum, setCartNum] = useState<string | null>(null);
    const [CartData, setCartData] = useState<string[] | null>(null);
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
                cache: 'no-store',
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
                let error = await request.text()
                setisErrorCart(JSON.parse(error).message)
                console.log(JSON.parse(error).message)
                toast({
                    variant: "destructive",
                    description: "please login first",
                })
            } else {

                let success = await request.text()
                console.log(JSON.parse(success))

                setCartNum(JSON.parse(success).numOfCartItems)
                setCartData(JSON.parse(success))
            }

        } catch (error) {
            console.log(error)
        }
    }

    function clearCartHandel() {
        console.log('hello');
    }



    return (
        <CartContext.Provider value={{ CartNum, CartData, ErrorCart, AddToCartHandel, getCartHandel, clearCartHandel }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart() {
    return useContext(CartContext);
}