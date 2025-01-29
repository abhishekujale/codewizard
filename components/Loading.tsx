'use client';

import Image from 'next/image';
import React from 'react';

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-black scrollbar-track-black overflow-x-hidden">
            <div className="relative w-64 h-64 flex justify-center items-center ">
                <div>
                    {/* Container for the rotating border */}
                    <div>
                        <div className="absolute -inset-[30px]">
                            <div style={{
                                animation: "spin 1.5s linear infinite",
                            }} className="w-full h-full rounded-full border-8 border-transparent border-t-[#ffb835] border-r-transperant border-b-[#F8A300] border-l-[#ffb835] animate-spin duration-[7s]" />
                        </div>

                        <div className="absolute top-[65px] left-[70px] animate-spinAround ">
                            <Image
                                src="/images/wingIcon.png"
                                alt="Spinning Image"
                                width={140}
                                height={140}
                            />
                        </div>
                    </div>

                    {/* Image container */}
                    <div className="inset-2 rounded-full overflow-hidden flex items-center justify-center">
                        <Image
                            src="/images/loaderLogo.png"
                            alt="Loading content"
                            className="w-44 h-44 object-cover"
                            width={200}
                            height={200}
                        />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Loading;