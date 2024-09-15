"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from "universal-cookie";

interface TokenContextType {
    token: string | null;
    saveTokenHandel: (userToken: string) => void;
    getTokenHandel: () => void;
    clearTokenHandel: () => void;
}

interface TokenProviderProps {
    children: ReactNode;
}
const TokenContext = createContext<TokenContextType | any | undefined>(undefined);

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
    const cookies = new Cookies();

    const [token, settoken] = useState<string | null>(null);

    useEffect(() => {
        getTokenHandel();
    }, [token]);



    function saveTokenHandel(userToken: string) {
        // Set cookie to expire in 7 days (1 week)
        const oneWeekFromNow = new Date();
        oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
        cookies.set('userToken', userToken, { path: '/', expires: oneWeekFromNow });
        
        settoken(userToken)
        // decodeToken = jwtDecode(userToken);
    }

    function getTokenHandel() {
        // const userToken = localStorage.getItem('userToken');
        const userToken = cookies.get('userToken')
        settoken(userToken)
    }

    function clearTokenHandel() {
        cookies.remove('userToken',{ path: '/'});
        settoken(null)
        // localStorage.removeItem('userToken')
    }

    return (
        <TokenContext.Provider value={{ token, saveTokenHandel, getTokenHandel, clearTokenHandel }}>
            {children}
        </TokenContext.Provider>
    );
};

export function useToken() {
    return useContext(TokenContext);
}


// export const useToken = () => {
//     const context = useContext(TokenContext);
//     return context;
// }