"use client";

import { useState } from 'react';
import Link from 'next/link';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticked w-full bg-indigo-500 text-white p-3 flex justify-between items-center px-6 shadow-lg">
            <div className="text-2xl font-bold">
                <Link href='/'>Astronauts App</Link>
            </div>
            <div className="md:hidden flex justify-end">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <svg className={`h-6 w-6 fill-current ${isOpen ? 'transform rotate-180' : ''}`} viewBox="0 0 24 24">
                        {isOpen ? (
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414l-7 7a1 1 0 01-1.414 0l-7-7a1 1 0 010-1.414z" />
                        ) : (
                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H5a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H5z" />
                        )}
                    </svg>
                </button>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:flex-grow md:justify-center md:items-center`}>
                <ul className="flex flex-col md:flex-row md:justify-center md:space-x-10">
                    <li><Link href="/" className="hover:text-indigo-300">Home</Link></li>
                    <li><Link href="/astronauts" className="hover:text-indigo-300">Astronauts</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavMenu;