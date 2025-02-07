import React from 'react';
import { motion } from 'framer-motion';

const EventDetailsPage = () => {
    const cards = [
        {
            title: "Round 1",
            subtitle: "Wizard's Quest",
            description: "It's all about the Aptitude. There will be Multiple Choice Questions which will test your understanding of Aptitude topics and solving speed will be tested."
        },
        {
            title: "Round 2",
            subtitle: "Room of Riddles",
            description: "This round unlocks the gateway to greater opportunities, challenging participants with Puzzles and Pseudocodes. It is designed to test your logic and IQ."
        },
        {
            title: "Round 3",
            subtitle: "Goblet of Code",
            description: "With your Knowledge about coding, and a great problem solving approach you will seize the victory and be the ultimate CodeWizard."
        }
    ];

    return (
        <div className="relative h-[150%] w-screen bg-event-bg bg-cover lg:bg-center bg-no-repeat">

            <div
                className="absolute inset-0 z-0 lg:mt-[100px]">
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="text-center lg:text-[130px] text-[60px] font-bold text-white mb-12 font-custom1 lg:mt-10"
                >
                    Event Details
                </motion.h1>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:gap-10 ">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative group lg:h-[450px] lg:w-[310px]"
                        >
                            <div className=" inset-0 bg-[#A59687] rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300 w-1/2" />
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative bg-[#A59687] p-6 rounded-2xl lg:h-full m-4"
                            >
                                <div className='text-center font-custom3 flex lg:block justify-center gap-8'>
                                    <h2 className="lg:text-[38px] text-[25px] font-bold text-black mb-2 tracking-wider">{card.title}</h2>
                                    <h3 className="lg:text-[38px] text-[25px] font-semibold text-black mb-4">{card.subtitle}</h3>
                                </div>

                                <p className="text-black leading-relaxed lg:text-[20px] text-[15px] font-bold">
                                    {card.description}
                                </p>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventDetailsPage;
