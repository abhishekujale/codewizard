'use client';
import Link from 'next/link';
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrLocation } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { IoEarthOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
export default function Footer() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const socialIconVariants = {
        hover: {
            scale: 1.2,
            rotate: 360,
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <motion.footer
            className="bg-[#251300] text-gray-300 py-8 font-custom1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo and Social Media */}
                    <motion.div variants={itemVariants}>
                        <div className="flex items-center mb-4">
                            <motion.img
                                className="h-20 mr-2 w-auto"
                                src="/images/logo.png"
                                alt="Codewizards Acses Logo"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                        <div className="space-y-2 flex justify-evenly">
                            {[
                                { Icon: GrInstagram, href: "https://www.instagram.com/acses.kitcoek/" },
                                { Icon: FaLinkedinIn, href: "https://in.linkedin.com/company/acses-kitcoek" },
                                { Icon: FaFacebookF, href: "https://www.facebook.com/profile.php?id=100064058348227" },
                                { Icon: GrLocation, href: "https://maps.app.goo.gl/7cVXsxj2U4o8mFV87" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center hover:text-white"
                                    variants={socialIconVariants}
                                    whileHover="hover"
                                >
                                    <social.Icon size={30} color='#FFA800' />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* About Us */}
                    <motion.div variants={itemVariants}>
                        <motion.h4
                            className="text-lg font-semibold mb-4 text-[38px]"
                            whileHover={{ scale: 1.02, color: '#FFA800' }}
                        >
                            <Link href='#about-event'>
                                ABOUT EVENT
                            </Link>
                        </motion.h4>
                        <motion.p
                            className="text-sm leading-relaxed font-custom2 text-[16px]"
                            whileHover={{ x: 5 }}
                        >
                            Association of Computer Science & Engineering Students of KIT
                            College of Engineering (Autonomous), Kolhapur
                        </motion.p>
                    </motion.div>

                    {/* Useful Links */}
                    <motion.div variants={itemVariants}>
                        <motion.h4
                            className="text-lg font-semibold mb-4 text-[38px]"
                            whileHover={{ scale: 1.02, color: '#FFA800' }}
                        >
                            USEFUL LINKS
                        </motion.h4>
                        <ul className="space-y-2 text-sm font-custom2">
                            {['Home', 'About Event', 'FAQ', 'SPONSOR',].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 10, color: '#FFA800' }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Link href={item === 'Home' ? '/' : `#${item.toLowerCase().replace(' ', '-')}`}>
                                        <p className="text-[20px]">{item}</p>
                                    </Link>
                                </motion.li>


                            ))}
                            <motion.li
                                whileHover={{ x: 10, color: '#FFA800' }}
                                transition={{ duration: 0.2 }}>
                                <Link href='https://drive.google.com/file/d/1dh_qfDS945OX8BOwopzqJJwNMZJ5laSD/view?usp=sharing'>
                                    <p className="text-[20px]">SponSor Brochure</p>
                                </Link>
                            </motion.li>
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div variants={itemVariants}>
                        <motion.h4
                            className="text-lg font-semibold mb-4"
                            whileHover={{ scale: 1.02, color: '#FFA800' }}
                        >
                            CONTACT
                        </motion.h4>
                        <div className="space-y-2">
                            <motion.a
                                href="mailto:acses.kitcoek@gmail.com"
                                className="flex items-center text-lg font-custom2"
                                whileHover={{ x: 5, color: '#FFA800' }}
                            >
                                <IoIosMail color='#FFA800' size={26} />
                                <span className="ml-2">acses.kitcoek@gmail.com</span>
                            </motion.a>
                        </div>
                        <div className="space-y-2">
                            <motion.a
                                href="https://acses-kitcoek.web.app"
                                className="flex items-center text-lg font-custom2"
                                whileHover={{ x: 5, color: '#FFA800' }}
                            >
                                <IoEarthOutline color='#FFA800' size={26} />
                                <span className="ml-2 font-custom3">ACSES KITCOEk</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-8 text-center text-lg font-custom3"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                >
                    <p>
                        Copyright &copy; {new Date().getFullYear()} All rights reserved | Made
                        with ❤️ by team ACSES
                    </p>
                </motion.div>
            </div>
        </motion.footer >
    );
}