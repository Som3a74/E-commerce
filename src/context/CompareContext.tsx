"use client"
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { TypeProductsDate } from '../types/type';
import { toast } from 'sonner';

interface CompareContextType {
    compareItems: TypeProductsDate[];
    isCompareOpen: boolean;
    addToCompare: (product: TypeProductsDate) => void;
    removeFromCompare: (productId: string) => void;
    openCompare: () => void;
    closeCompare: () => void;
}

const CompareContext = createContext({} as CompareContextType);

export const CompareProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [compareItems, setCompareItems] = useState<TypeProductsDate[]>([]);
    const [isCompareOpen, setIsCompareOpen] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('compareItems');
        if (saved) {
            try {
                setCompareItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse compareItems", e);
            }
        }
    }, []);

    const addToCompare = (product: TypeProductsDate) => {
        setCompareItems(prev => {
            let newItems = [...prev];
            const exists = newItems.find(item => item._id === product._id);
            if (exists) {
                toast.info('Product is already in compare list');
                return prev;
            }
            if (newItems.length >= 2) {
                // Remove the oldest one to make space for the new one
                newItems.shift();
            }
            newItems.push(product);
            localStorage.setItem('compareItems', JSON.stringify(newItems));
            toast.success('Product added to compare');
            return newItems;
        });
    }

    const removeFromCompare = (productId: string) => {
        setCompareItems(prev => {
            const newItems = prev.filter(item => item._id !== productId);
            localStorage.setItem('compareItems', JSON.stringify(newItems));
            toast.success('Product removed from compare');
            return newItems;
        });
    }

    const openCompare = () => setIsCompareOpen(true);
    const closeCompare = () => setIsCompareOpen(false);

    return (
        <CompareContext.Provider value={{ compareItems, isCompareOpen, addToCompare, removeFromCompare, openCompare, closeCompare }}>
            {children}
        </CompareContext.Provider>
    );
};

export const useCompare = () => useContext(CompareContext);
