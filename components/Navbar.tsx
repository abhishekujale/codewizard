"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#1a1a1a] border-b border-[#3d3d3d]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    <div className='lg:-mx-40 mx-0 md:mx-0'>
                        <Image
                            src="/images/logo.png"
                            alt="Acses Logo Design"
                            width={150}
                            height={150}
                            className='-my-1.3'
                        />
                    </div>


                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-16 -mx-28">
                        <div className='text-center cursor-pointer navContainer'>
                            <a href="#" className="text-[#ffd700] hover:text-[#ffed4a] font-custom1 text-4xl md:text-4xl">
                                Home
                            </a>
                            <Image
                                src="/images/navdesign.png"
                                alt="Acses Nav Design"
                                width={90}
                                height={90}
                                className='-my-1.3 navImage'
                            />
                        </div>
                        <div className='text-center cursor-pointer navContainer'>
                            <a href="#" className="text-[#ffd700] hover:text-[#ffed4a] font-custom1 text-4xl">
                                About
                            </a>
                            <Image
                                src="/images/navdesign.png"
                                alt="Acses Nav Design"
                                width={90}
                                height={90}
                                className='-my-1.3 navImage'
                            />
                        </div>
                        <div className='text-center cursor-pointer navContainer'>

                            <a href="#" className="text-[#ffd700] hover:text-[#ffed4a] font-custom1 text-4xl">
                                Contact
                            </a>
                            <Image
                                src="/images/navdesign.png"
                                alt="Acses Nav Design"
                                width={90}
                                className='-my-1.3 navImage'
                                height={90}
                            />
                        </div>

                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-[#ffd700] hover:text-[#ffed4a] focus:outline-none"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#1a1a1a]">
                            <a
                                href="#"
                                className="block px-3 py-2 text-[#ffd700] hover:text-[#ffed4a]"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-[#ffd700] hover:text-[#ffed4a]"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                className="block px-3 py-2 text-[#ffd700] hover:text-[#ffed4a]"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;