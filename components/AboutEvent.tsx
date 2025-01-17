"use client";

import React, { useEffect, useState } from "react";

export default function AboutEvent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("about-event");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <div
      id="about-event"
      className="relative flex flex-col justify-center items-center h-[150%] w-[100%] bg-cover bg-center bg-no-repeat sm:px-0 lg:px-20 xl:px-32"
      style={{ backgroundSize: "100%" }}
    >
      {/* Heading */}
      <h1
        className={`text-[80px] sm:text-[70px] lg:text-[100px] xl:text-[120px] font-custom1 font-bold text-white mb-8 sm:mb-4 text-center ${
          isVisible ? "animate-fade-in" : "opacity-0"
        }`}
      >
        About Event
      </h1>

      {/* Image Box */}
      <div
        className={`bg-white bg-opacity-80 rounded-lg shadow-lg w-full sm:w-4/5 md:w-3/5 lg:w-1/2 xl:w-2/3 flex justify-center items-center ${
          isVisible ? "animate-zoom-in" : "opacity-0"
        }`}
      >
        <img
          src="/images/Poster.png"
          alt="Event Poster"
          className="w-full h-auto rounded-md object-contain"
        />
      </div>

      
      <style jsx global>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoom-in {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.5s ease-out;
        }

        .animate-zoom-in {
          animation: zoom-in 1.5s ease-out;
        }

        @media (max-width: 768px) {
          #about-event {
            background-image: url("/images/about_Phone.png");
            background-size: contain;
            padding: 0; 
            margin: 0; 
            height: 80%; 
          }
        }

        @media (min-width: 769px) {
          #about-event {
            background-image: url("/images/2ndpagebg.png");
            background-size: cover;
          }
        }
      `}</style>
    </div>
  );
}
