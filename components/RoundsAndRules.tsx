"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { glowAnimation } from "./Home";
import Link from "next/link";
import { useEffect, useState } from "react";
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 20,
        scale: 0.95
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

const floatingAnimation = {
    y: [-10, 10],
    transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
    }
};
const RoundsAndRules = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentView, setCurrentView] = useState<'rounds' | 'rules'>('rounds');

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const NavigationArrow = ({ direction, onClick }: { direction: 'left' | 'right', onClick: () => void }) => (
        <motion.button
            onClick={onClick}
            className="p-2 rounded-full bg-black/30 backdrop-blur-sm shadow-glow"
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(0,0,0,0.5)' }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            style={{
                textShadow: "0 0 10px rgba(255, 183, 0, 0.5)",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-[#F3AA06]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                {direction === 'left' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                )}
            </svg>
        </motion.button>
    );

    const backgroundStyles = {
        mobile: {
            backgroundImage: 'url(/images/rPhone.png)',
            backgroundSize: 'cover',
            padding: '0',
            margin: '0',
            height: '100%',
        },
        desktop: {
            backgroundImage: 'url(/images/rulesbg.png)',
            backgroundSize: 'cover',
            height: '150%',
        }
    };

    return (
        <div className="w-full" style={{
            ...(isMobile ? backgroundStyles.mobile : backgroundStyles.desktop),
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
        }}>
            <div className="flex flex-col items-center justify-center text-center">
                <div className="flex justify-center">
                    <motion.h1
                        animate={glowAnimation}
                        className="text-[70px] lg:text-[120px] text-white font-custom1 mt-16">
                        Rounds and Rules
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-white p-8 rounded-lg shadow-lg"
                >
                    {isMobile ? (
                        <div className="flex flex-col items-center gap-8">
                            <div className="flex items-center gap-4">
                                {currentView === 'rules' && (
                                    <NavigationArrow direction="left" onClick={() => setCurrentView('rounds')} />
                                )}

                                {currentView === 'rounds' ? (
                                    <Image
                                        src="/images/round.png"
                                        alt="Rounds"
                                        width={260}
                                        height={300}
                                        className="w-56"
                                    />
                                ) : (
                                    <Image
                                        src="/images/rule.png"
                                        alt="Rules"
                                        width={260}
                                        height={300}
                                        className="w-56"
                                    />
                                )}

                                {currentView === 'rounds' && (
                                    <NavigationArrow direction="right" onClick={() => setCurrentView('rules')} />
                                )}
                            </div>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href='https://forms.gle/SxeRBFGbFLFvaUK46' target="_blank">
                                    <Image
                                        src='/images/registerBtn.png'
                                        alt="Register Button"
                                        width={200}
                                        height={200}
                                    />
                                </Link>
                            </motion.div>
                        </div>
                    ) : (
                        <motion.div
                            className="grid grid-cols-3 gap-36 mb-10"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            <motion.div
                                className="flex flex-col justify-center items-center"
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src="/images/round.png"
                                        alt="Rounds"
                                        width={260}
                                        height={300}
                                        className="w-72"
                                    />
                                </motion.div>
                                <div className="mt-8 flex text-center lg:justify-center items-center">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link href='https://forms.gle/SxeRBFGbFLFvaUK46' target="_blank">
                                            <Image
                                                src='/images/registerBtn.png'
                                                alt="Register Button"
                                                width={200}
                                                height={200}
                                            />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex justify-end items-end"
                                variants={itemVariants}
                            >
                                <motion.div
                                    animate={floatingAnimation}
                                >
                                    <Image
                                        src='/images/dialog04.png'
                                        alt="Dialog"
                                        width={300}
                                        height={200}
                                        className="w-72"
                                    />
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="flex flex-col justify-center"
                                variants={itemVariants}
                            >
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src="/images/rule.png"
                                        alt="Rules"
                                        width={260}
                                        height={200}
                                        className="w-72"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default RoundsAndRules;