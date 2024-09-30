"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useToken } from './SaveToken';
import { TLoggedWish, TProduct } from './../types/WishType';
import { toast } from 'sonner';

interface wishlist {
    wishNum: number;
    wishproducts: TProduct[] | [];
    wishData: TLoggedWish | null;
    ErrorWish: string | null;
    EmptyWish: boolean;
    wishID: string[];

    getWishHandel: () => void;
    AddToWishHandel: (productId: string) => Promise<void | any>;
    RemoveSpecificWishItem: (productId: string) => Promise<void>;
}

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const wishContext = createContext({} as wishlist);

export const WishProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

    const { token } = useToken()
    const [wishNum, setwishNum] = useState<number>(0);
    const [wishID, setwishID] = useState<string[]>([]);
    const [wishproducts, setwishproducts] = useState<TProduct[] | []>([]);
    const [wishData, setwishData] = useState<TLoggedWish | null>(null);
    const [ErrorWish, setisErrorWish] = useState<string | null>(null);
    const [EmptyWish, setisEmptyWish] = useState<boolean>(false);

    async function AddToWishHandel(productId: string) {
        if (!token) return toast.error('please login first')

        setisEmptyWish(false);

        if (wishID.find(item => item === productId) === undefined) {
            setwishNum(e => e + 1)
            setwishID(ele => [...ele, productId])
        } else {
            return toast.info('Product Already in Favotite')
        }

        try {
            const request = await fetch(`${baseURL}/api/v1/wishlist`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                body: JSON.stringify({ productId: productId }),
            });

            if (!request.ok) {
                setwishNum(e => e - 1)
                let error = await request.json()
                setisErrorWish(error.message)
                toast.error(error.message)
            } else {
                let response = await request.json()
                toast.success('Product added successfully')
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function getWishHandel() {
        try {
            const request = await fetch(`${baseURL}/api/v1/wishlist`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                cache: 'no-store',
            });
            if (!request.ok) {
                let error = await request.json()
                setisErrorWish(error.message)
                console.log(error.message)
                toast.error('please login first')
            }
            else {
                let response: TLoggedWish = await request.json()
                setwishNum(response.count)
                setwishproducts(response.data)
                setwishData(response)
                setwishID(response.data.map(ele => ele._id))

                if (+response?.count === 0) {
                    setisEmptyWish(true)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function RemoveSpecificWishItem(productId: string) {
        setwishproducts((oldCart) => oldCart.filter((item) => item._id !== productId))

        setwishID((ele) => ele.filter(item => item != productId))

        setwishNum(e => e - 1)

        toast.success('remove product success')

        try {
            const request = await fetch(`${baseURL}/api/v1/wishlist/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'token': token,
                },
                cache: 'no-store',
            });

            if (!request.ok) {
                let error = await request.json()
                setisErrorWish(error.message)
                console.log(error.message)
                toast.error(error.message)
            } else {
                let success = await request.json()
            }
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        token && getWishHandel()
    }, [token])


    return (
        <wishContext.Provider value={{ wishNum, wishData, wishproducts, wishID, ErrorWish, EmptyWish, getWishHandel, AddToWishHandel, RemoveSpecificWishItem }}>
            {children}
        </wishContext.Provider>
    );
};

export function useWish() {
    return useContext(wishContext);
}