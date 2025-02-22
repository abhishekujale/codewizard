'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { glowAnimation } from './Home';

const ResultPage = () => {
    const handleClick = (round : string) => {
        if(round == "Round 1"){
            window.open("https://drive.google.com/file/d/10AKhXkUQUColSm7RBY7FqXJJO8cTlnjo/view?usp=drive_link", "_blank");
        }else if(round == "Round 2"){
            window.open("https://drive.google.com/file/d/1SLlTZj_YxAJuvG_dRFwSXpSNZg4qc29t/view?usp=sharing", "_blank");
        }else{
            window.open("", "_blank");
        }
    };

    // Hover effect animation
    const hoverEffect = {
        hover: {
            scale: 1.2,
            textShadow: "0px 0px 8px rgba(255, 255, 255, 0.9)",
            boxShadow: "0px 0px 15px rgba(255, 176, 0, 0.8)",
            transition: { duration: 0.3 },
        },
    };

    return (
        <div id="results" className="relative min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Image with Opacity */}
            <div className="absolute inset-0 bg-contact-bg bg-center bg-cover opacity-70"></div>

            {/* Content */}
            <motion.div
                className="text-center mb-8 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="lg:text-[120px] text-[80px] font-custom1 text-[#FFB000]">Result's</h2>
            </motion.div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-20 mt-21 relative z-10">
                {['Round 1', 'Round 2', 'Round 3'].map((round) => (
                    <motion.div
                        key={round}
                        onClick={() => handleClick(round)}
                        animate={glowAnimation}
                        whileHover="hover"
                        variants={hoverEffect}
                        className="text-[60px] lg:text-[80px] text-white font-custom1 cursor-pointer"
                    >
                        {round}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ResultPage;
