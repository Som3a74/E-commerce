"use client"
import React, { useEffect } from 'react';
import { useCompare } from '../../../context/CompareContext';
import { TypeProductsDate } from '../../../types/type';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import BtnAddToCart from '../Product/BtnAddToCart';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { X } from "lucide-react";

export default function CompareModal() {
    const { compareItems, removeFromCompare, isCompareOpen, closeCompare } = useCompare();

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isCompareOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isCompareOpen]);

    if (!isCompareOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
            <div 
                className="relative w-full max-w-6xl max-h-[90vh] bg-lightUi rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-white dark:bg-gray-900 sticky top-0 z-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-DarkBeLight">Product Comparison</h2>
                    <button 
                        onClick={closeCompare}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                        aria-label="Close modal"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-4 sm:p-6 flex-grow custom-scrollbar">
                    {compareItems.length === 0 ? (
                        <div className="min-h-[40vh] flex flex-col items-center justify-center text-center">
                            <div className="w-24 h-24 mb-6 text-gray-300 dark:text-gray-700">
                                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-medium text-DarkBeLight mb-2">No products to compare</h3>
                            <p className="text-gray-500 dark:text-gray-400 max-w-md">
                                You haven't selected any products yet. Go back to the shop and click the compare icon on products you want to compare side by side.
                            </p>
                            <button 
                                onClick={closeCompare}
                                className="mt-8 px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition shadow-md"
                            >
                                Browse Products
                            </button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto pb-4">
                            <table className="w-full text-left border-collapse min-w-[600px]">
                                <thead>
                                    <tr>
                                        <th className="p-4 border-b-2 border-gray-200 w-1/4 align-bottom bg-white dark:bg-gray-900 sticky left-0 z-10 font-medium text-gray-500 uppercase text-xs tracking-wider">
                                            Features
                                        </th>
                                        {compareItems.map((item: TypeProductsDate) => (
                                            <th key={item._id} className="p-4 border-b-2 border-gray-200 relative text-center w-1/3 min-w-[250px] align-bottom">
                                                <button 
                                                    onClick={() => removeFromCompare(item._id)}
                                                    className="absolute top-2 right-2 text-2xl text-gray-400 hover:text-red-500 transition-colors bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm border border-gray-100 dark:border-gray-700 z-20"
                                                    title="Remove from comparison"
                                                >
                                                    <IoIosCloseCircleOutline />
                                                </button>
                                                <div className="flex flex-col items-center gap-3">
                                                    <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white dark:bg-gray-800 rounded-xl p-2 border border-gray-100 dark:border-gray-700 shadow-sm">
                                                        <Image 
                                                            src={item.imageCover} 
                                                            alt={item.title} 
                                                            fill 
                                                            className="object-contain p-2 hover:scale-105 transition-transform duration-300" 
                                                        />
                                                    </div>
                                                    <Link prefetch={false} href={`/productDetails/${item._id}`} onClick={closeCompare} className="group">
                                                        <h3 className="font-bold text-lg text-DarkBeLight line-clamp-2 group-hover:text-teal-600 transition-colors h-14 overflow-hidden">
                                                            {item.title}
                                                        </h3>
                                                    </Link>
                                                </div>
                                            </th>
                                        ))}
                                        {compareItems.length < 2 && (
                                            <th className="p-4 border-b-2 border-gray-200 w-1/3 min-w-[250px] align-bottom">
                                                <div className="flex flex-col items-center justify-center h-full min-h-[200px] border-2 border-dashed border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-xl transition-colors hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-900/10">
                                                    <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-teal-600 shadow-sm mb-3">
                                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                                                    </div>
                                                    <p className="text-gray-500 dark:text-gray-400 font-medium text-sm">Add another product</p>
                                                    <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">to compare side by side</p>
                                                </div>
                                            </th>
                                        )}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                                            Price
                                        </td>
                                        {compareItems.map((item: TypeProductsDate) => (
                                            <td key={item._id} className="p-5 border-b border-gray-100 dark:border-gray-800 text-center">
                                                <div className="inline-block px-4 py-2 bg-teal-50 dark:bg-teal-900/20 text-teal-700 dark:text-teal-400 rounded-lg text-xl font-bold border border-teal-100 dark:border-teal-800/50 shadow-sm">
                                                    ${item.price}
                                                </div>
                                            </td>
                                        ))}
                                        {compareItems.length < 2 && <td className="p-5 border-b border-gray-100 dark:border-gray-800"></td>}
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                                            Category
                                        </td>
                                        {compareItems.map((item: TypeProductsDate) => (
                                            <td key={item._id} className="p-5 border-b border-gray-100 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
                                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium">
                                                    {item.category?.name || "N/A"}
                                                </span>
                                            </td>
                                        ))}
                                        {compareItems.length < 2 && <td className="p-5 border-b border-gray-100 dark:border-gray-800"></td>}
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                                            Brand
                                        </td>
                                        {compareItems.map((item: TypeProductsDate) => (
                                            <td key={item._id} className="p-5 border-b border-gray-100 dark:border-gray-800 text-center">
                                                {item.brand?.name ? (
                                                    <span className="font-medium text-DarkBeLight">{item.brand.name}</span>
                                                ) : (
                                                    <span className="text-gray-400 italic">Not specified</span>
                                                )}
                                            </td>
                                        ))}
                                        {compareItems.length < 2 && <td className="p-5 border-b border-gray-100 dark:border-gray-800"></td>}
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                                            Ratings
                                        </td>
                                        {compareItems.map((item: TypeProductsDate) => (
                                            <td key={item._id} className="p-5 border-b border-gray-100 dark:border-gray-800">
                                                <div className="flex flex-col items-center justify-center">
                                                    <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-900/20 px-3 py-1.5 rounded-lg border border-amber-100 dark:border-amber-800/50">
                                                        <FaStar className="text-yellow-400 w-5 h-5" />
                                                        <span className="font-bold text-lg text-amber-700 dark:text-amber-500 mx-1">{item.ratingsAverage}</span>
                                                        <span className="text-sm text-gray-500 font-medium">/ 5</span>
                                                    </div>
                                                    <span className="text-xs text-gray-500 mt-2 font-medium">({item.ratingsQuantity} customer reviews)</span>
                                                </div>
                                            </td>
                                        ))}
                                        {compareItems.length < 2 && <td className="p-5 border-b border-gray-100 dark:border-gray-800"></td>}
                                    </tr>
                                    <tr className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="p-5 border-b border-gray-100 dark:border-gray-800 font-semibold text-gray-700 dark:text-gray-300 align-top bg-white dark:bg-gray-900 sticky left-0 z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]">
                                            Description
                                        </td>
                                        {compareItems.map((item: TypeProductsDate) => (
                                            <td key={item._id} className="p-5 border-b border-gray-100 dark:border-gray-800 align-top">
                                                <div className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50/50 dark:bg-gray-800/30 p-4 rounded-xl leading-relaxed">
                                                    {item.description}
                                                </div>
                                            </td>
                                        ))}
                                        {compareItems.length < 2 && <td className="p-5 border-b border-gray-100 dark:border-gray-800"></td>}
                                    </tr>
                                    <tr>
                                        <td className="p-5 bg-white dark:bg-gray-900 sticky left-0 z-10 pt-8 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.05)]"></td>
                                        {compareItems.map((item: TypeProductsDate) => (
                                            <td key={item._id} className="p-5 text-center pt-8">
                                                <BtnAddToCart ProductID={item._id} />
                                            </td>
                                        ))}
                                        {compareItems.length < 2 && <td className="p-5 pt-8"></td>}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="p-4 sm:p-6 border-t border-gray-200 bg-gray-50 dark:bg-gray-800/50 flex justify-end">
                    <button 
                        onClick={closeCompare}
                        className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-medium rounded-lg transition-colors"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}
