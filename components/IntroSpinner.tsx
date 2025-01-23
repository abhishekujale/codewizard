import React, { useState, useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import Image from 'next/image';
const IntroSpinner = () => {
    const [isVisible, setIsVisible] = useState(true);
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000); // Hide the animation after 5 seconds

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isVisible) {
            controls.start({
                rotate: 360,
                transition: { duration: 3, repeat: Infinity, ease: "linear" },
            });
        } else {
            controls.stop();
        }
    }, [isVisible, controls]);

    return (
        <div className='bg-black w-screen h-screen flex justify-center items-center'>
            <div className=' flex justify-center items-center'>
                <Image
                    src="/images/intrologo.png"
                    width={200}
                    height={200}
                    alt='ACSES logo'
                />
            </div>

            <div className='flex justify-center items-center'>
                <Image
                    src="/images/circle.png"
                    width={250}
                    height={250}
                    alt='logo circle'
                    className='-translate-x-52'
                />
                <Image
                    src="/images/wingIcon.png"
                    width={90}
                    height={90}
                    alt='logo circle'
                    className='-translate-x-64 -translate-y-5'
                />
            </div>

        </div>
    );
};

export default IntroSpinner;


