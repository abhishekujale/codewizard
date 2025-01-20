import AboutEvent from "@/components/AboutEvent";
import Faqsection from "@/components/Faqsection";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import Sponsor from "@/components/Sponsor";
import RewardsPage from "@/components/Prizes";
export default function Home() {
  return (
    <div className="h-screen w-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#FFB000] scrollbar-track-black overflow-x-hidden">
      <HomePage />
      <AboutEvent />
      <RewardsPage />
      <Sponsor />
      <Faqsection />
      <Footer />

    </div>
  );
}
