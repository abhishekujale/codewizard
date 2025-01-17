import AboutEvent from "@/components/AboutEvent";
import Faqsection from "@/components/Faqsection";
import HomePage from "@/components/Home";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="h-screen w-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-black overflow-x-hidden">
      <Navbar />
      <HomePage />
      <AboutEvent />
      <Faqsection/>
    </div> 
  );
}
