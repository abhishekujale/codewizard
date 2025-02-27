'use client';

import React from 'react';
const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black scrollbar-track-black overflow-x-hidden">
            <div className="relative w-64 h-64 flex justify-center items-center ">
                {/* <div>
                    <div>
                        <div className="absolute -inset-[30px]">
                            <div style={{
                                animation: "spin 2s linear infinite",
                            }} className="w-full h-full rounded-full border-8 border-[#ffb835]  border-t-[#ffb835] border-r-black border-b-[#F8A300] border-transperant animate-spin duration-[7s]" />
                        </div>

                        <div className="absolute top-[10px] left-[79px] animate-spinAround">
                            <div className='rotate-90'>
                                <motion.div
                                    animate={{
                                        x: [-20, 20, -20],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.3
                                    }}>
                                    <Image
                                        src="/images/wingLeft.png"
                                        alt="Codewizards acses Spinning Image"

                                        width={50}
                                        height={50}
                                        className=''
                                    />
                                </motion.div>
                                <motion.div
                                    animate={{
                                        x: [-8, 8, -8],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.8
                                    }}>
                                    <Image
                                        src="/images/wingCircle.png"
                                        alt="Codewizards Spinner Image "

                                        width={50}
                                        height={50}
                                        className='translate-x-8'
                                    />
                                </motion.div>
                                <motion.div
                                    animate={{
                                        x: [-20, 20, -20],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: 0.3
                                    }}>
                                    <Image
                                        src="/images/wingRight.png"
                                        alt="Spinning Image codewizard Acses"
                                        width={50}
                                        height={50}
                                        className='rotate-180'
                                    />
                                </motion.div>
                            </div>

                        </div>
                    </div>

                    
                    <div className="inset-2 rounded-full overflow-hidden flex items-center justify-center">
                        <Image
                            src="/images/loaderLogo.png"
                            alt="Codewizards acses Loader logo"
                            className="w-44 h-44 object-cover"
                            width={200}
                            height={200}
                        />
                    </div>
                </div> */
                }
                <video
                    src="/IntroVideo.mp4"
                    className="h-screen w-screen object-cover bg-black"
                    autoPlay
                    muted
                    loop
                    playsInline
                ></video>


            </div>
        </div >
    );
};

export default Loading;