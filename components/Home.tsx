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
        ease: "easeInOut",
        repeatType: "reverse" as const,
    },
};

export const glowAnimation = {
    textShadow: [
        "0 0 10px rgba(255, 183, 0, 0.5)",
        "0 0 20px rgba(255, 183, 0, 0.8)",
        "0 0 10px rgba(255, 183, 0, 0.5)",
    ],
    transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
    },
};

const HomePage = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


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
            backgroundImage: 'url(/images/hPhone.png)',
            backgroundSize: 'cover',
            padding: '0',
            margin: '0',
            height: '100%',
        },
        desktop: {
            backgroundImage: 'url(/images/homebg.png)',
            backgroundSize: 'cover',
            height: '150%',
        }
    };

    // Countdown timer setup
    const targetDate = new Date('2025-02-22').getTime();

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

    return (
        <motion.div
            id='home'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full"
            style={{
                ...(isMobile ? backgroundStyles.mobile : backgroundStyles.desktop),
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
            }}
        >
            <Navbar />

            {/* Main Content */}
            <main className="relative z-10 flex items- justify-center container px-4 pt-12 text-center">
                <div>
                    <div>
                        <motion.h1
                            animate={glowAnimation}
                            className="text-[100px] lg:text-[180px] text-white font-custom1 mt-28"
                        >
                            CodeWizard
                        </motion.h1>
                        <motion.h1
                            animate={floatingAnimation}
                            className="hidden text-[25px] lg:text-[40px] text-[#F3AA06] font-custom2 -mt-32 translate-x-44"
                        >
                            -&nbsp; Where Magic Meets Logic
                        </motion.h1>
                    </div>

                    {/* Countdown Timer */}
                    <motion.div
                        variants={containerVariants}
                        className="flex justify-center gap-3 lg:gap-8 mt-48 lg:translate-x-40 lg:translate-y-40"
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
                                        className="text-[40px] lg:text-[110px] font-bold text-white font-custom1"
                                    >
                                        {String(item.value).padStart(2, '0')}
                                    </motion.div>
                                    <div className="text-[38px] lg:text-[55px] text-white font-custom1">{item.label}</div>
                                </motion.div>
                                {index < 3 && (
                                    <motion.div
                                        variants={itemVariants}
                                        className="text-[40px] lg:text-[100px] font-bold text-white"
                                    >
                                        :
                                    </motion.div>
                                )}
                            </React.Fragment>
                        ))}

                        <div className='hidden lg:block'>
                            <motion.div
                                variants={itemVariants}
                                animate={floatingAnimation}
                            >
                                <Image
                                    src="/images/dialog.png"
                                    alt="Rocket"
                                    width={300}
                                    height={300}
                                    className='-translate-y-40 -translate-x-24'
                                />
                            </motion.div>

                            <Image
                                src="/images/harrymama.png"
                                alt="Rocket"
                                width={300}
                                height={300}
                                className='-translate-y-40 translate-x-8'
                            />
                        </div>
                    </motion.div>
                </div>
            </main>
        </motion.div>
    );
};

export default HomePage;