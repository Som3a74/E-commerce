"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarAlt, FaUser } from 'react-icons/fa';

const MOCK_BLOGS = [
    {
        id: 1,
        title: "The Ultimate Guide to Online Shopping in 2026",
        excerpt: "Discover the best tips and tricks for finding great deals, avoiding scams, and making the most of your online shopping experience.",
        date: "March 12, 2026",
        author: "Admin",
        image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2070&auto=format&fit=crop",
        category: "Shopping Tips"
    },
    {
        id: 2,
        title: "Top 10 Gadgets Every Tech Enthusiast Needs",
        excerpt: "From smart home devices to the latest wearables, here are the top 10 tech gadgets you must have this year.",
        date: "February 28, 2026",
        author: "Tech Reviewer",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
        category: "Technology"
    },
    {
        id: 3,
        title: "How to Build a Sustainable Wardrobe",
        excerpt: "Learn how to choose eco-friendly fabrics, buy from ethical brands, and create a stylish yet sustainable clothing collection.",
        date: "February 15, 2026",
        author: "Fashion Editor",
        image: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
        category: "Fashion"
    },
    {
        id: 4,
        title: "5 Essential Kitchen Tools for Home Chefs",
        excerpt: "Upgrade your culinary skills with these absolute must-have kitchen tools that will make cooking easier and more enjoyable.",
        date: "January 30, 2026",
        author: "Chef Mike",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop",
        category: "Home & Garden"
    },
    {
        id: 5,
        title: "Understanding Skincare Ingredients",
        excerpt: "A comprehensive breakdown of common skincare ingredients like Retinol, Hyaluronic Acid, and Niacinamide, and what they do for your skin.",
        date: "January 14, 2026",
        author: "Beauty Expert",
        image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1974&auto=format&fit=crop",
        category: "Beauty"
    },
    {
        id: 6,
        title: "Upcoming E-Commerce Trends",
        excerpt: "Explore what the future holds for online retail, from augmented reality try-ons to AI-driven personalized recommendations.",
        date: "December 5, 2025",
        author: "Market Analyst",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop",
        category: "Industry News"
    }
];

export default function BlogPage() {
    return (
        <div className="bg-lightUi min-h-screen py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-DarkBeLight tracking-tight mb-4">Our Latest Blog Posts</h1>
                    <p className="text-lg text-GrayBeLight max-w-2xl mx-auto">Stay updated with the latest trends, guides, and news from our store. Explore articles written by our expert team.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {MOCK_BLOGS.map((blog) => (
                        <div key={blog.id} className="bg-white dark:bg-[#1f2937] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 group">
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                                        {blog.category}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6 flex flex-col h-[calc(100%-16rem)]">
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                                    <div className="flex items-center">
                                        <FaCalendarAlt className="mr-2 text-teal-600" />
                                        {blog.date}
                                    </div>
                                    <div className="flex items-center">
                                        <FaUser className="mr-2 text-teal-600" />
                                        {blog.author}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-DarkBeLight mb-3 line-clamp-2 leading-tight group-hover:text-teal-600 transition duration-300">
                                    <Link prefetch={false} href={`#`}>
                                        {blog.title}
                                    </Link>
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow mb-5">
                                    {blog.excerpt}
                                </p>
                                <div className="mt-auto">
                                    <Link prefetch={false} href={`#`} className="inline-flex items-center font-semibold text-teal-600 hover:text-teal-800 transition">
                                        Read More
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
