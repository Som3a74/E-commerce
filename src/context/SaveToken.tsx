"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

interface TokenContextType {
    token: string;
    saveTokenHandel: () => void;
    getTokenHandel: () => void;
    clearTokenHandel: () => void;
}

interface TokenProviderProps {
    children: ReactNode;
}
const TokenContext = createContext<TokenContextType | any | undefined>(undefined);

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {

    const [token, settoken] = useState<string | null>(null);

    useEffect(() => {
        getTokenHandel()
    }, [])
    useEffect(() => {
        getTokenHandel()
    }, [token])


    function saveTokenHandel(userToken: string) {
        localStorage.setItem('userToken', userToken);
        settoken(userToken)
        // decodeToken = jwtDecode(userToken);
    }
    function getTokenHandel() {
        const userToken = localStorage.getItem('userToken');
        settoken(userToken)
    }

    function clearTokenHandel() {
        settoken(null)
        localStorage.removeItem('userToken')
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