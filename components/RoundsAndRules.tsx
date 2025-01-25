'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import { floatingAnimation } from "./Home";
import { glowAnimation } from "./Home";
import Link from "next/link";
import { div } from "framer-motion/client";
const RoundsAndRules = () => {
    return (
        <div className=" bg-rounds-bg bg-cover bg-center text-white ">
            <div className="flex flex-col items-center justify-center text-center">
                <div className="flex justify-center">
                    <motion.h1
                        animate={glowAnimation}
                        className="text-[70px] lg:text-[120px]  text-white font-custom1 mt-16">
                        Rounds and Rules
                    </motion.h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className=" text-white p-8 rounded-lg shadow-lg"
                >

                    <div className="flex flex-wrap lg:grid grid-cols-3 lg:gap-36 gap-11 mb-10 translate-x-16 lg:translate-x-0">
                        <div className="flex flex-col justify-center">

                            <Image
                                src="/images/round.png"
                                alt="Rounds for Codewizard"
                                width={260}
                                height={300}
                                className="w-56 lg:w-72"
                            />
                            <div className="flex justify-center items-center text-center mt-8   w-56 lg:w-72">
                                <Link href='https://forms.gle/SxeRBFGbFLFvaUK46' target="_blank">
                                    <Image
                                        src='/images/registerBtn.png'
                                        alt="Register Btn"
                                        width={200}
                                        height={200}
                                    />
                                </Link>
                            </div>

                        </div>
                        <motion.div className="hidden lg:flex justify-end items-end "
                            animate={floatingAnimation}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}>
                            <Image
                                src='/images/dialog04.png'
                                alt="Dialog04"
                                width={300}
                                height={200}
                                className="w-56 lg:w-72"
                            />
                        </motion.div>
                        <div>
                            <Image
                                src="/images/rule.png"
                                alt="Rounds for Codewizard"
                                width={260}
                                height={200}
                                className="w-56 lg:w-72"
                            />
                        </div>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default RoundsAndRules;