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
    },
    // {
    //     url: '/sponsors/xyz.webp',
    // },
    // {
    //     url: '/sponsors/xyz.webp',
    // }, {
    //     url: '/sponsors/xyz.webp',
    // },
    // {
    //     url: '/sponsors/xyz.webp',
    // },
    {
        url: '/sponsors/spcl.webp',
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
        <div className=" bg-cover bg-no-repeat bg-center"
            style={{
                ...(isMobile ? backgroundStyles.mobile : backgroundStyles.desktop),
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}

            id='sponsor'>
            <motion.div
                className="w-full rounded-lg  flex items-center text-center justify-center"
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
                    <div className="flex flex-wrap  text-center justify-center items-center gap-2 lg:gap-8">
                        {sponsorsImages.map((frame, index) => (
                            <motion.div
                                key={index}
                                className="w-auto h-auto lg:w-64 lg:h-64 flex text-center left-10 lg:left-0 "
                                animate={{
                                    y: [-10, 10, -10],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.3
                                }}
                            >
                                {/* SVG Frame */}
                                <div className="w-[150px] h-[150px] lg:w-[230px] bg-white lg:h-[180px] rounded-xl p-5 ">

                                    <Image
                                        src={frame.url ? frame.url : "/images/SponsorKit.png"}
                                        alt="Codewizards acses Sponsors"
                                        width={160}
                                        height={160}
                                        className='w-full h-full border rounded-[30px]'
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
                        className='translate-y-[10px] translate-x-20'
                    />
                </motion.div>
                <Image
                    src="/images/Harrymama01.png"
                    alt='Frame1'
                    width={250}
                    height={250}
                    className='border-b-white translate-y-[240px]'
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