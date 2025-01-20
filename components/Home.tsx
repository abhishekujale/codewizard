"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from './Navbar';


export const floatingAnimation = {
    y: [-10, 10, 0],
    transition: {
        duration: 2,
        repeat: Infinity,
    },
};


export const glowAnimation = {
    animate: {
        opacity: [0.5, 1, 0.5],
        scale: [1, 1.05, 1],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
        },
    },
};

const HomePage = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Set your target date here
    const targetDate = new Date('2025-02-26').getTime();

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    // Floating animation



    return (
        <motion.div
            id='home'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="bg-Home-bg bg-cover bg-center"
        >
            <Navbar />


            {/* Main Content */}
            <main className="relative z-10 flex items- justify-center container  px-4 pt-12 text-center">
                <div>

                    <div>
                        <motion.h1
                            animate={glowAnimation}
                            className="text-[100px] lg:text-[160px]  text-white font-custom1  -translate-y-16  mt-16"

                        >
                            CodeWizard
                        </motion.h1>
                        <motion.h1
                            animate={floatingAnimation}
                            className="hidden text-[25px] lg:text-[40px]  text-[#F3AA06] font-custom2 -mt-32  translate-x-44"
                        >
                            -&nbsp;  Where Magic Meets Logic
                        </motion.h1>
                    </div>

                    {/* Countdown Timer */}
                    <motion.div
                        variants={containerVariants}
                        className="flex justify-center gap-3 lg:gap-8 mt-48 lg:translate-x-40 lg:translate-y-36"
                    >
                        {[
                            { label: 'Days', value: timeLeft.days },
                            { label: 'Hours', value: timeLeft.hours },
                            { label: 'Minutes', value: timeLeft.minutes },
                            { label: 'Seconds', value: timeLeft.seconds },
                        ].map((item, index) => (
                            <React.Fragment key={item.label}>
                                <motion.div
                                    variants={itemVariants}
                                    className="flex flex-col items-center"
                                >
                                    <motion.div
                                        animate={floatingAnimation}
                                        className="text-[40px] lg:text-[90px]  font-bold text-white font-custom1"
                                    >
                                        {String(item.value).padStart(2, '0')}
                                    </motion.div>
                                    <div className="text-[38px] lg:text-[55px]  text-white font-custom1">{item.label}</div>
                                </motion.div>
                                {index < 3 && (
                                    <motion.div
                                        variants={itemVariants}
                                        className="text-[40px] lg:text-[90px] font-bold text-white"
                                    >
                                        :
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}

                        <div>
                            <Image
                                src="/images/dialog.png"
                                alt="Rocket"
                                width={300}
                                height={300}
                                className='-translate-y-40 lg:block -translate-x-24'
                            />
                            <Image
                                src="/images/harrymama.png"
                                alt="Rocket"
                                width={300}
                                height={300}
                                className='-translate-y-40 lg:block translate-x-8'
                            />
                        </div>
                    </motion.div>



                </div>
            </main>
        </motion.div>
    );
};

export default HomePage;
