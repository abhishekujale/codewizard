'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { floatingAnimation } from './Home';
export default function SponsorFrame() {
    return (
        <div className="relative min-h-screen  p-8 bg-sponsor-bg bg-center bg-cover" id='sponsor'>
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
                    <div className="flex flex-wrap  text-center justify-center items-center">
                        {[1, 2, 3,].map((frame) => (
                            <motion.div
                                key={frame}
                                className="relative w-64 h-64 flex text-center left-16 lg:left-0 "
                                animate={{
                                    y: [-15, 15, -15],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: frame * 0.3
                                }}
                            >
                                {/* SVG Frame */}
                                <div className="relative w-1/2 h-1/2 lg:w-full lg:h-full">
                                    <Image
                                        src="/images/SponsorKit.png"
                                        alt='sponsorKit'
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </motion.div>
                        ))}

                    </div>
                </div>

            </motion.div>
            {/* Speech bubble */}
            <motion.div
                className="hidden lg:flex justify-end items-end translate-x-96 "
                animate={floatingAnimation}
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
                <Image
                    src="/images/harrymama01.png"
                    alt='Frame1'
                    width={250}
                    height={250}
                    className='translate-x-10 border-b-white'
                />
            </motion.div>

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