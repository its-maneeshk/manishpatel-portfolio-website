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
        <header className="bg-stone-300 text-black shadow-lg">
            <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">

                {/* Logo */}
                <a href="/" className="flex items-center text-gray-900 font-bold text-3xl">
                    <span className="ml-3 font-ananda font-bold tracking-wide">Maneesh Patel</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex md:ml-auto md:mr-auto space-x-8 text-lg font-medium">
                    {["/", "/projects", "/skills", "/contact"].map((path, index) => (
                        <Link
                            key={index}
                            to={path}
                            className={`transition-colors ${location.pathname === path ? "text-black underline decoration-red-500 underline-offset-4 font-semibold" : "hover:text-gray-700"
                                }`}
                        >
                            {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
                        </Link>
                    ))}
                </nav>

                {/* Call-to-Action Button (Desktop) */}
                <div className="hidden md:inline-flex justify-center">
                    <a
                        href='https://github.com/its-maneeshk'
                        target='_blank'
                        rel='noopener noreferrer'
                        className="inline-flex items-center justify-center w-auto text-gray-950 bg-white border-0  py-2 px-6 focus:outline-none hover:bg-stone-200 hover:scale-105 transition-transform duration-200 rounded-lg text-lg">
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2">
                            <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.266c-3.338.726-4.037-1.61-4.037-1.61-.547-1.39-1.335-1.76-1.335-1.76-1.09-.743.084-.727.084-.727 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.806 1.305 3.49.997.108-.776.42-1.305.764-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.236-3.22-.124-.303-.536-1.525.116-3.176 0 0 1.01-.323 3.3 1.23a11.43 11.43 0 0 1 3-.404c1.02.006 2.045.137 3 .404 2.29-1.553 3.298-1.23 3.298-1.23.653 1.65.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.477 5.922.43.37.81 1.104.81 2.226v3.293c0 .32.19.694.8.577C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                        </svg>
                        Visit GitHub
                    </a>
                </div>

                {/* Hamburger Menu Button (Mobile) */}
                <button onClick={toggleMenu} className="md:hidden text-black focus:outline-none">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-stone-200 text-center py-5 space-y-2">
                    {["/", "/projects", "/skills", "/contact"].map((path, index) => (
                        <Link
                            key={index}
                            to={path}
                            onClick={() => setIsOpen(false)}
                            className={`block text-lg py-1 transition-colors ${location.pathname === path ? "text-black underline decoration-red-500 underline-offset-4 font-semibold" : "hover:text-gray-900"
                                }`}
                        >
                            {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
                        </Link>
                    ))}

                    {/* Call-to-Action Button (Mobile) */}
                    <div className="flex justify-center">
                        <a
                            href='https://github.com/its-maneeshk'
                            target='_blank'
                            rel='noopener noreferrer'
                            className="inline-flex items-center justify-center w-auto text-gray-950 bg-white border-0  py-2 px-6 focus:outline-none hover:bg-stone-200 hover:scale-105 transition-transform duration-200 rounded-lg text-lg">
                            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mr-2">
                                <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.266c-3.338.726-4.037-1.61-4.037-1.61-.547-1.39-1.335-1.76-1.335-1.76-1.09-.743.084-.727.084-.727 1.204.085 1.838 1.236 1.838 1.236 1.07 1.835 2.806 1.305 3.49.997.108-.776.42-1.305.764-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.236-3.22-.124-.303-.536-1.525.116-3.176 0 0 1.01-.323 3.3 1.23a11.43 11.43 0 0 1 3-.404c1.02.006 2.045.137 3 .404 2.29-1.553 3.298-1.23 3.298-1.23.653 1.65.242 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.804 5.625-5.477 5.922.43.37.81 1.104.81 2.226v3.293c0 .32.19.694.8.577C20.565 21.796 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                            </svg>
                            Visit GitHub
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar