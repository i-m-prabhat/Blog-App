import React, { useState } from 'react';

const Nav = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="/" className="text-white font-bold font-serif">
                            Mini Blog
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                Home
                            </a>
                            <a href="/login" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <button
                                    className="rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500">
                                    Login
                                </button>
                            </a>
                            <a href="/signup" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                                <button
                                    className="rounded-md bg-gray-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white hover:bg-gray-500">
                                    Sign Up
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Home
                        </a>
                        <a href="/login" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Login
                        </a>
                        <a href="/signup" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                            Sign Up
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Nav;
