"use client";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { throttle } from 'lodash';
export default function ScrollArrow() {
    const [scrolled, setScrolled] = useState(false);
    const [isHomePage, setIsHomePage] = useState(true);



    useEffect(() => {
        // Check if we're on homepage by looking for a specific element
        const homeElement = document.querySelector('[data-homepage]');
        setIsHomePage(!!homeElement);

        const handleScroll = throttle(() => {
            setScrolled(window.scrollY > window.innerHeight / 2);
        }, 200);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (isHomePage) return null;

    return (
        <button
            onClick={(e) => {
                window.scrollTo({
                    top: window.innerHeight, behavior: "smooth"

                })

                e.preventDefault();
                document.querySelector("#home")?.scrollIntoView({ behavior: 'smooth' });

            }
            }
            className={`fixed bottom-10 right-0 lg:right-10 transform z-40 rotate-180 bg-[#FFB000] text-[#251300] p-3 rounded-full shadow-lg transition-all ${scrolled ? "top-5 left-auto right-5 bottom-auto" : ""
                }`}
        >
            <ChevronDown className="w-6 h-6" />
        </button>
    );
}
