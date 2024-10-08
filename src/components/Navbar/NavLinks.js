import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-900" smooth to="/#">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-red-900"smooth to="/#shop">
                Shop
            </HashLink>
            <HashLink className="text-white bg-red-900 hover:bg-red-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;
