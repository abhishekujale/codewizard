"use client"
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';





interface navComponents {
    text: string
    link: string
    largeDevice: boolean
}
const allComp = [
    {
        text: "Home",
        link: "#"
    },
    {
        text: "Sponsor",
        link: "#sponsor"
    }, {
        text: "About",
        link: "#about-event"
    }, {
        text: "FAQ's",
        link: "#faq"
    }
    , {
        text: "Register",
        link: "https://forms.gle/SxeRBFGbFLFvaUK46"
    }
]

const Card = ({ text, link, largeDevice }: navComponents) => {
    return (
        <div className='text-center cursor-pointer navContainer'>

            <Link href={link} className="text-[#FFB000] hover:text-[#FFB000] font-custom1 text-4xl" >
                {text}

                {largeDevice && (<Image
                    src="/images/navdesign.png"
                    alt="Acses Nav Design"
                    width={90}
                    className='-my-1.3 navImage'
                    height={90}
                />)}
            </Link>
        </div>
    )
}




const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <nav className="bg-[#251300] border-b border-[#3d3d3d] fixed z-50 w-screen">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-24">
                    <div className='lg:-mx-40 mx-0 sm:mx-0'>
                        <Link href="#">
                            <Image
                                src="/images/logo.png"
                                alt="Acses Logo Design"
                                width={180}
                                height={180}
                                className='-my-1.3'
                            />
                        </Link>

                    </div>


                    {/* Desktop menu */}
                    <div className="hidden lg:flex items-center space-x-16 -mx-28">
                        {
                            allComp.map((item, index) => (

                                <Card text={allComp[index].text} link={allComp[index].link} key={index} largeDevice={true} />

                            ))
                        }

                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden flex items-center">
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
                    <div className="lg:hidden text-center">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#251300]">
                            {
                                allComp.map((item, index) => (
                                    <div key={index} onClick={() => {
                                        toggleMenu();
                                    }}>
                                        <Card text={allComp[index].text} link={allComp[index].link} largeDevice={false} />
                                    </div>

                                ))
                            }
                        </div>

                    </div>
                )}
            </div>
        </nav>
    );
};


export default Navbar;