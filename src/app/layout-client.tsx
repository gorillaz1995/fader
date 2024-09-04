"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import StairTransition from "./components/StairTransition";
import Menux from "./components/Menux";
import { Providers } from "./providers";
import Footer from "./components/Footer";

interface LayoutClientProps {
  children: React.ReactNode;
}

const LayoutClient: React.FC<LayoutClientProps> = ({ children }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 1000); // Adjust timing as needed
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router]);

  return (
    <>
      {isTransitioning && <StairTransition>{children}</StairTransition>}
      <Menux />
      <Providers>
        <main className="flex-grow">{children}</main>
      </Providers>
      <Footer />
    </>
  );
};

export default LayoutClient;
