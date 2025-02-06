'use client'
import React, { useEffect, useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { floatingAnimation, glowAnimation } from './Home';
const RewardsPage: React.FC = () => {

    const detailsVariants: Variants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };

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
            backgroundImage: 'url(/images/pPhone.png)',
            backgroundSize: 'cover',
            padding: '0',
            margin: '0',
            height: '100%',
        },
        desktop: {
            backgroundImage: 'url(/images/prizebg.png)',
            backgroundSize: 'cover',
            height: '150%',
        }
    };



    return (
        <div className="w-full text-white"
            style={{
                ...(isMobile ? backgroundStyles.mobile : backgroundStyles.desktop),
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: 'screen',
            }}

            id='prizes'>
            {/* Animated header */}
            <motion.div
                className="text-center mb-16 pt-8"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <motion.h1
                    className="lg:text-[150px] text-[100px] mb-8  tracking-wider font-custom1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    animate={glowAnimation}
                >
                    Prizes
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
                    <div className='lg:translate-x-16'>

                        <motion.h2

                            className={`text-[60px] lg:text-[100px] font-custom1 tracking-wide`}

                            variants={detailsVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                        >
                            {' 1) 5,000 /-'}
                        </motion.h2>
                        <motion.h2

                            className={`text-[60px] lg:text-[100px] font-custom1`}

                            variants={detailsVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                        >
                            {' 2) 3,000 /-'}
                        </motion.h2>
                        <motion.h2

                            className={`text-[60px] lg:text-[100px] font-custom1 tracking-wide`}

                            variants={detailsVariants}
                            whileHover={{ scale: 1.02, x: 10 }}
                        >
                            {' 3) 2,000 /-'}
                        </motion.h2>
                    </div>
                </motion.div>
            </motion.div>

            {/* Main content section */}
            <div className="flex justify-between items-center mx-auto  ">
                {/* Animated message box */}
                <motion.div
                    className="w-1/2 "
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >

                    <Image
                        src="/images/kindpng.png"
                        alt="Codewizards acses dialog"

                        width={350}
                        height={350}
                        className=' border-b-white -translate-x-11 hidden lg:block'
                    />
                    <motion.div
                        className="hidden lg:flex justify-end items-end "
                        animate={floatingAnimation}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Image
                            src="/images/dialog03.png"
                            alt='Frame1'
                            width={400}
                            height={400}
                            className='-translate-y-96 -translate-x-28'
                        />

                    </motion.div>

                </motion.div>
            </div>
        </div>
    );
};

export default RewardsPage;
