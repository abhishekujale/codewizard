"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const CodeWizard = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Set your target date here
    const targetDate = new Date('2024-12-31').getTime();

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
    const floatingAnimation
        //   : TargetAndTransition
        = {
        y: [-10, 10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
        },
    };

    const glowAnimation = {
        textShadow: [
            "0 0 10px rgba(255, 183, 0, 0.5)",
            "0 0 20px rgba(255, 183, 0, 0.8)",
            "0 0 10px rgba(255, 183, 0, 0.5)",
        ],
        transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className=" bg-Home-bg bg-cover bg-center h-screen"
        >
            {/* Background overlay with magical effect */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1a0f2e]/80"
            />

            {/* Navigation */}
            <motion.nav
                variants={itemVariants}
                className="relative z-10 p-4"
            >
                <div className="container mx-auto flex justify-between items-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="text-amber-500 text-2xl font-bold"
                    >
                        ACSES
                    </motion.div>
                    <div className="space-x-8">
                        {['Home', 'About', 'Contact'].map((item) => (
                            <motion.a
                                key={item}
                                href="#"
                                whileHover={{ scale: 1.1, color: '#fcd34d' }}
                                className="text-amber-500 hover:text-amber-400"
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.nav>

            {/* Main Content */}
            <main className="relative z-10 container mx-auto px-4 pt-12 text-center">
                <motion.h1
                    //animate={glowAnimation}
                    className="text-7xl mb-16 text-white font-custom1"

                >
                    CodeWizard
                </motion.h1>

                {/* Countdown Timer */}
                <motion.div
                    variants={containerVariants}
                    className="flex justify-center gap-8 mb-12"
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
                                    //animate={floatingAnimation}
                                    className="text-4xl font-bold text-amber-500"
                                >
                                    {String(item.value).padStart(2, '0')}
                                </motion.div>
                                <div className="text-sm text-amber-400">{item.label}</div>
                            </motion.div>
                            {index < 3 && (
                                <motion.div
                                    variants={itemVariants}
                                    className="text-4xl font-bold text-amber-500"
                                >
                                    :
                                </motion.div>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>

                {/* Dialog Box */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-amber-900/80 rounded-lg p-4 text-amber-500 max-w-md mx-auto"
                >
                    <motion.p
                        //   animate={floatingAnimation}
                        className="text-lg"
                    >
                        Did you put your name in the competition, Harry?
                    </motion.p>
                </motion.div>
            </main>
        </motion.div>
    );
};

export default CodeWizard;
