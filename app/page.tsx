import AboutEvent from "@/components/AboutEvent";
import Faqsection from "@/components/Faqsection";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import Sponsor from "@/components/Sponsor";
import RewardsPage from "@/components/Prizes";
import RoundesAndRules from "@/components/RoundsAndRules";
export default function Home() {
  // const [showIntro, setShowIntro] = React.useState(true);

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowIntro(false);
  //   }, 5000); // 5 seconds

  //   return () => clearTimeout(timer);
  // }, []);
  return (
    <div>
      {/* {showIntro ? ( */}
      {/* <IntroSpinner /> */}
      {/* ) : (
        // Your main page content
      )
      } */}
      <main>

        <div className="h-screen w-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#FFB000] scrollbar-track-black overflow-x-hidden">
          <HomePage />
          <AboutEvent />
          <RoundesAndRules />
          <RewardsPage />

          <Sponsor />
          
          <Faqsection />
          <Footer />

        </div>
      </main>



    </div >
  );
}