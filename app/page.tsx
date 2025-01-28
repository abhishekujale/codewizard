"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import AboutEvent from "@/components/AboutEvent";
import Faqsection from "@/components/Faqsection";
import Footer from "@/components/Footer";
import HomePage from "@/components/Home";
import Sponsor from "@/components/Sponsor";
import RewardsPage from "@/components/Prizes";
import RoundesAndRules from "@/components/RoundsAndRules";
import Loading from "@/components/Loading";

export default function Home() {
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

    // Add event listeners for navigation events
    window.addEventListener('beforeunload', handleNavigationStart);

    // Create a navigation observer
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          handleNavigationEnd();
        }
      }
    });

    navigationObserver.observe({ entryTypes: ['navigation'] });

    // Watch for pathname or search params changes
    const handleRouteChange = () => {
      handleNavigationStart();
      // Add a small delay to simulate navigation
      setTimeout(handleNavigationEnd, 100);
    };

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', handleNavigationStart);
      navigationObserver.disconnect();
    };
  }, [pathname, searchParams]); // Re-run effect when pathname or search params change

  // Monitor soft navigation (client-side navigation)
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <div>
      {isLoading && <Loading />}

      <main>
        <div className="h-screen w-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#FFB000] scrollbar-track-black overflow-x-hidden bg-black">
          <HomePage />
          <AboutEvent />
          <RoundesAndRules />
          <RewardsPage />
          <Sponsor />
          <Faqsection />
          <Footer />
        </div>
      </main>
    </div>
  );
}