import React from 'react'
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-900 text-gray-200 shadow-lg">
            <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">

                {/* Logo */}
                <a href="/" className="flex items-center text-white font-semibold text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 bg-orange-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span className="ml-3 font-bold tracking-wide">Manish Patel</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:ml-auto md:mr-auto space-x-8 text-lg font-medium">
                    {["/", "/projects", "/skills", "/contact"].map((path, index) => (
                        <Link
                            key={index}
                            to={path}
                            className={`transition-colors ${location.pathname === path ? "text-orange-400 font-bold" : "hover:text-orange-400"
                                }`}
                        >
                            {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
                        </Link>
                    ))}
                </nav>

                {/* Call-to-Action Button (Desktop) */}
                <button className="hidden md:inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded-lg text-lg font-semibold shadow-md transition-all duration-300">
                    Let's Connect
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </button>

                {/* Hamburger Menu Button (Mobile) */}
                <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-gray-800 text-center py-4 space-y-4">
                    {["/", "/projects", "/skills", "/contact"].map((path, index) => (
                        <Link
                            key={index}
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg py-2 transition-colors ${location.pathname === path ? "text-orange-400 font-bold" : "hover:text-orange-400"
                                }`}
                        >
                            {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
                        </Link>
                    ))}

                    {/* Call-to-Action Button (Mobile) */}
                    <button className="w-full mt-4 bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg text-lg font-semibold shadow-md transition-all duration-300">
                        Let's Connect
                    </button>
                </div>
            )}
        </header>
    )
}

export default Navbar



