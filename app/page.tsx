"use client";
import { Suspense, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Head from "next/head";

import Header from "./components/Header";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ContactForm from "./components/ContactForm";
import Instagram from "./components/Instagram";
import Products from "./components/Products";
import About from "./components/About";

import images from "./images";

// Skeleton Loader Component
const SkeletonLoader = () => (
  <div className="animate-pulse flex flex-col space-y-4 p-6">
    <div className="h-6 bg-gray-700 rounded w-3/4"></div>
    <div className="h-4 bg-gray-700 rounded w-1/2"></div>
    <div className="h-4 bg-gray-700 rounded w-1/3"></div>
  </div>
);

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const pathname = usePathname();

  // Scroll handler to update URL with the active section
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 2;

          sections.forEach((section) => {
            const sectionElement = section as HTMLElement;
            const sectionTop = sectionElement.offsetTop;
            const sectionBottom = sectionTop + sectionElement.offsetHeight;
            const sectionId = sectionElement.getAttribute("id");

            if (
              scrollPosition >= sectionTop &&
              scrollPosition < sectionBottom
            ) {
              if (window.location.hash !== `#${sectionId}`) {
                history.replaceState(null, "", `#${sectionId}`);
              }
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top on initial load
  useEffect(() => {
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname]);

  // Fetch video on mount
  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await fetch("/api/video");
        const data = await response.json();
        setVideoUrl(data.videoUrl);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideo();
  }, []);

  return (
    <>
      <Head>
        {/* General Meta Tags */}
        <title>Mobile Solutionz - Premium Car Detailing</title>
        <meta
          name="description"
          content="Premium mobile car detailing in Medford, Oregon. We bring professional detailing to your doorstep."
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Mobile Solutionz | Premium Mobile Car Detailing"
        />
        <meta
          property="keywords"
          content="car detailing, mobile detailing, Medford, Southern Oregon, auto detailing, vehicle cleaning, ceramic coating"
        />
        <meta
          property="og:description"
          content="Premium mobile car detailing in Medford, Oregon. We bring professional detailing to your doorstep."
        />
        <meta
          property="og:image"
          content={images["mobile-solutionz-logo.webp"]}
        />
        <meta property="og:url" content="https://mobile-solutionz.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Mobile Solutionz - Premium Car Detailing"
        />
        <meta
          name="twitter:description"
          content="Premium mobile car detailing in Medford, Oregon. We bring professional detailing to your doorstep."
        />
        <meta
          name="twitter:image"
          content={images["mobile-solutionz-logo.webp"]}
        />

        {/* Viewport & SEO Enhancements */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          className="flex flex-col min-h-screen bg-gradient-to-b from-black/60 via-black/40 to-black"
          id="home"
        >
          <Header />

          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center">
            {!videoLoaded && <SkeletonLoader />}
            {videoUrl && (
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                preload="auto"
                onLoadedData={() => setVideoLoaded(true)}
              />
            )}

            <div className="relative z-1 container mx-auto px-6 text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
                <span className="block mb-2">Premium Mobile</span>
                <span className="text-[#606c38]">Car Detailing</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-gray-300 max-w-2xl mx-auto">
                Experience professional car detailing services at your doorstep.
                We bring the excellence to you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="bg-[#606c38] text-white px-8 py-4 rounded-full hover:bg-[#515c30] transition-all duration-300 hover:scale-105 text-lg font-medium"
                >
                  Book Now
                </a>
                <a
                  href="#services"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-medium"
                >
                  View Services
                </a>
              </div>
            </div>
          </section>

          {/* Suspense Wrapped Sections */}
          <Suspense fallback={<SkeletonLoader />}>
            <Services />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <Pricing />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <Products />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <Instagram />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <About />
          </Suspense>

          {/* Contact Section */}
          <section id="contact" className="py-24 bg-black">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
                  Get in Touch
                </h2>
                <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10">
                  <Suspense fallback={<SkeletonLoader />}>
                    <ContactForm />
                  </Suspense>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-8 bg-black border-t border-white/10">
            <div className="container mx-auto px-6 text-center text-gray-400">
              &copy; {new Date().getFullYear()} Mobile Solutionz. All rights
              reserved.
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
