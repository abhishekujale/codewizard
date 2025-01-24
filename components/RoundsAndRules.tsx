'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { floatingAnimation, glowAnimation } from './Home';
const RoundesAndRules: React.FC = () => {

    const detailsVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };


    return (
        <div className=" bg-rounds-bg bg-cover  lg:bg-center text-white " id='prizes'>
            {/* Animated header */}
            <motion.div
                className="text-center mb-16 pt-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="lg:text-[90px] text-[70px] mb-8  tracking-wider font-custom1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    animate={glowAnimation}
                >
                    Rounds and Rules
                </motion.h1>

                <motion.div
                    className="space-y-2 flex flex-start lg:justify-start justify-center"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    initial="hidden"
                    animate="visible"
                >
                <div className="flex justify-center items-center space-x-16">
                    <div className='w-1/2 text-right'>
                    <Image
                            src="/images/dialog03.png"
                            alt='Frame1'
                            width={400}
                            height={400}
                        />
                    </div>

                    <div className='w-1/2 flex justify-center'>
                        <Image
                            src="/images/dialog03.png"
                            alt='Frame1'
                            width={400}
                            height={400}
                        />
                    </div>

                    <div className='w-1/2 '>
                    <Image
                            src="/images/dialog03.png"
                            alt='Frame1'
                            width={400}
                            height={400}
                        />
                    </div>
                </div>
                </motion.div>
            </motion.div>

            {/* Main content section */}
            <div className="flex justify-between items-center mx-auto none lg:block">
                {/* Animated message box */}
                <motion.div
                    className="w-1/2 "
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >

                    <motion.div
                        className="hidden lg:flex justify-end items-end "
                        animate={floatingAnimation}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
};

export default RoundesAndRules;