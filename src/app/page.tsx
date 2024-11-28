"use client";
import Footer from "@/components/Footer";
import RunningText from "@/components/RunningText";
import SecondPage from "@/components/SecondPage";
import FirstPage from "@/components/FirstPage";
import { useEffect, useState } from "react";
import Loading from "./loading";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "@/components/Header";
import { ApplicationProvider } from "@/context/useApplication";
import { Toaster } from "react-hot-toast";
import Gift from "@/components/Gift";
import Gallery from "@/components/Gallery";

export default function Home() {
  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ApplicationProvider>
            <Toaster />
            <Header />
            <FirstPage />
            <RunningText />
            <SecondPage />
            <Gallery />
            <Gift />
            <Footer />
          </ApplicationProvider>
        </>
      )}
    </>
  );
}
