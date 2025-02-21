"use client";

import { useState, useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import AboutEvent from "@/components/AboutEvent";
import Faqsection from "@/components/Faqsection";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import Sponsor from "@/components/Sponsor";
import RewardsPage from "@/components/Prizes";
import RoundesAndRules from "@/components/RoundsAndRules";
import Loading from "@/components/Loading";
import EventDetailsPage from "@/components/About";
import ResultPage from "@/components/Result";
// Create a separate component for the content that uses useSearchParams
function PageContent() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleNavigationStart = () => {
      setIsLoading(true);
    };

    const handleNavigationEnd = () => {
      setTimeout(() => setIsLoading(false), 800);
    };

    window.addEventListener('beforeunload', handleNavigationStart);

    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          handleNavigationEnd();
        }
      }
    });

    navigationObserver.observe({ entryTypes: ['navigation'] });

    return () => {
      window.removeEventListener('beforeunload', handleNavigationStart);
      navigationObserver.disconnect();
    };
  }, [pathname, searchParams]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (

    <div>
      {isLoading ? <Loading />
        :
        <main>
          <div className="h-screen w-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#FFB000] scrollbar-track-black overflow-x-hidden bg-black">
            <HomePage />
            <AboutEvent />
            <EventDetailsPage />
            <RoundesAndRules />
            <RewardsPage />
            <Sponsor />
            <ResultPage />
            <Faqsection />
            <Footer />
          </div>
        </main>
      }
    </div>
  );
}

// Main component with Suspense boundary
export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <PageContent />
    </Suspense>
  );
}
