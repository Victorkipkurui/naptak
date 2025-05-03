import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <Link href="/">
                            <a className="text-xl font-bold text-gray-800">MyApp</a>
                        </Link>
                    </div>
                    <nav className="hidden md:flex space-x-4">
                        <Link href="/">
                            <a className="text-gray-600 hover:text-gray-900">Home</a>
                        </Link>
                        <Link href="/about">
                            <a className="text-gray-600 hover:text-gray-900">About</a>
                        </Link>
                        <Link href="/contact">
                            <a className="text-gray-600 hover:text-gray-900">Contact</a>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;