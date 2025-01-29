"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Faqsection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("Choose The question");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleFaq = (index: number, answer: string) => {
    if (index === selectedIndex) {
      // Deselect if already selected
      setSelectedIndex(null);
      setSelectedAnswer("");
    } else {
      setSelectedIndex(index);
      setSelectedAnswer(answer);
    }
  };

  // Intersection Observer to trigger animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current; // Capture the ref value here

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use the captured ref in cleanup
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div
      id="faq"
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-start items-center h-[150%] w-full bg-cover pt-10 px-4 sm:px-8 lg:px-20 xl:px-32 faq-container"
    >
      <style jsx>{`
        .faq-container {
          background-image: url("/images/faqbg.png");
          background-size: cover;
          background-position: center;
        }

        @media (max-width: 768px) {
          .faq-container {
            background-image: url("/images/faq_Phone.png");
          }
        }
      `}</style>

      {/* Heading */}
      <h1
        className={`font-custom1 text-white text-[80px] sm:text-[70px] md:text-[90px] lg:text-[130px] mb-8 ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
      >
        F.A.Q.s
      </h1>

      {/* FAQ Scrollable List */}
      <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl flex flex-col">
        <div className="max-h-96 overflow-y-auto bg-[#FBAA4B] p-4 rounded-xl shadow-lg custom-scrollbar">
          {[
            {
              question: "What is the mode of the event?",
              answer:
                "The event will be conducted offline. Participants are required to be present at the designated venue for the competition.",
            },
            {
              question: "What platform will be used for coding?",
              answer:
                "The coding challenges will be hosted on HackerRank, providing a seamless and competitive coding experience.",
            },
            {
              question: "Where is the event venue?",
              answer:
                "The event will take place at KIT's College of Engineering, Kolhapur. Please arrive 15 minutes before the start time for registration.",
            },
            {
              question: "Will laptops be required for participation?",
              answer:
                "No, laptops are not required. PCs will be provided at the venue. However, participants must bring their registered email ID and know their password to access the platform.",
            },
            {
              question: "How will the rounds be structured?",
              answer:
                "The event will consist of multiple rounds, and each round will be an elimination round. Only selected participants will advance to the next stage based on their performance.",
            },
            {
              question: "What are the prizes for the winners?",
              answer:
                "Winners will receive exciting prizes and certificates of excellence. Details will be announced during the event.",
            },
            {
              question: "Can I participate in a team?",
              answer:
                "No,the event allows individual participation",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className={`p-4 font-custom2 rounded-xl shadow-md cursor-pointer transition-all duration-500 ease-in-out mb-4 text-3xl ${selectedIndex === index
                ? "bg-[#E28F04] text-white"
                : "bg-[#FFD185] text-[#5C3317]"
                } ${isVisible ? "animate-fadeIn" : "opacity-0"}`}
              style={{
                animationDelay: `${0.3 + index * 0.2}s`,
              }}
              onClick={() => toggleFaq(index, faq.answer)}
            >
              <div>{faq.question}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Answer Box */}
      <div
        className={`relative w-full max-w-md font-custom2 sm:max-w-lg lg:max-w-2xl bg-[#FBAA4B] text-[#5C3317] font-medium p-6 rounded-lg shadow-md mt-8 text-center text-2xl sm:text-3xl md:text-4xl transition-all duration-500 ease-in-out transform ${selectedAnswer ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
      >
        {/* The actual selected answer text with a margin top for gap */}
        <div className="mt-6">{selectedAnswer}</div>
      </div>
    </div>
  );
}
