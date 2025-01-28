'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';


const sponsorsImages = [
    {
        url: '/sponsors/HackerRank.jpg',
    },
    {
        url: '/sponsors/xyz.webp',
    }

]
export default function SponsorFrame() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
            const checkScreenSize = () => {
                setIsMobile(window.innerWidth < 768);
            };
    
            
            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);
            
            return () => window.removeEventListener('resize', checkScreenSize);
        }, []);
    
    
        const backgroundStyles = {
            mobile: {
                backgroundImage: 'url(/images/sPhone.png)',
                backgroundSize: 'cover',
                padding: '0',
                margin: '0',
                height: '100%',
            },
            desktop: {
                backgroundImage: 'url(/images/sponserbg.png)',
                backgroundSize: 'cover',
                height: '150%',
            }
        };
    return (
        <div className="w-full"
        style={{
            ...(isMobile ? backgroundStyles.mobile : backgroundStyles.desktop),
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
        }}
        
        id='sponsor'>
            <motion.div
                className="w-full  p-8 rounded-lg shadow-2xl flex items-center text-center justify-center"
                animate={{
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                {/* Gothic header text */}
                <div >
                    <motion.h2
                        className="text-[100px] lg:text-[160px] mb-8  font-custom1 text-white tracking-wider"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Sponsors
                    </motion.h2>

                    {/* Frames container */}
                    <div className="flex flex-wrap  text-center justify-center items-center gap-4">
                        {sponsorsImages.map((frame, index) => (
                            <motion.div
                                key={index}
                                className="relative w-64 h-64 flex text-center left-10 lg:left-0 "
                                animate={{
                                    y: [-15, 15, -15],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.3
                                }}
                            >
                                {/* SVG Frame */}
                                <div className="relative  lg:w-full lg:h-full">
                                    <Image
                                        src={frame.url ? frame.url : "/images/SponsorKit.png"}
                                        alt='sponsorKit'
                                        width={200}
                                        height={200}
                                        className='lg:w-full lg:h-full border rounded-[30px]'
                                    />
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>

            </motion.div>
            {/* Speech bubble */}
            <div
                className="hidden lg:flex justify-end items-end "

            >
                <motion.div

                    animate={{
                        y: [-15, 15, -15],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",

                    }}
                >

                    <Image
                        src="/images/dialog01.png"
                        alt='Frame1'
                        width={400}
                        height={400}
                        className='-translate-y-64 translate-x-20'
                    />
                </motion.div>
                <Image
                    src="/images/Harrymama01.png"
                    alt='Frame1'
                    width={250}
                    height={250}
                    className='translate-x-10 border-b-white translate-y-10'
                />
            </div>

            <style jsx global>{`
                @keyframes flicker {
                    0%, 100% { opacity: 0.5; }
                    50% { opacity: 0.7; }
                }
                .animate-flicker {
                    animation: flicker 3s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
}