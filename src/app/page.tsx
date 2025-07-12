// app/page.tsx
'use client'; // This is a client component, so we need to import 'use client' at the top
// import Button from '@/components/Button'; // <-- See the cool '@/' path alias? More on that later.
import Header from "@/components/Header";
import Carousel1 from "@/components/Carousel1"; // Import the ImageCarousel component
import Footer from "@/components/Footer"; // Import the Footer component
import Carousel2 from "@/components/Carousel2"; // Import the Carousel2 component
import PricesBanner from "@/components/PricesBanner";
import Image from "next/image"; // Import Next.js Image component
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SplashScreen from '../components/SplashScreen';
import ReviewComponent from "@/components/ReviewComponent"; // Import the ReviewComponent
//import {motion, AnimatePresence} from 'framer-motion'; // Import Framer Motion for animations]
import { slides, slides2 } from "@/data/HomePageData"; // Import the slides data
import TripPlanner from "@/components/TripPlanner"; // Import the TripPlanner component
import DestinationHighlight from "@/components/DestinationHighlight";

// A simple, reusable banner component
const Banner = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <section className={`px-10 py-12 ${className}`}>
        {children}
    </section>
);

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
       <AnimatePresence mode="wait">
            {loading ? (
                // 1. While loading is true, ONLY the SplashScreen is in the DOM.
                <motion.div key="splash">
                    <SplashScreen />
                </motion.div>
            ) : (
                // 2. When loading becomes false, this main content is rendered for the first time.
                // AnimatePresence will handle the fade-in.
                <motion.main
                    key="main"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="min-h-screen bg-white text-[#0D244D]"
                >
                <Header />
                
                <Banner className="text-center">
                    <h1 className="text-3xl font-bold">Explore. Work. Wander</h1>
                    <h2 className="text-3xl font-bold">Gypcey Your Journey</h2>
                </Banner>
                
                <Carousel1 slides={slides} />
                
                <TripPlanner />

                <Banner>
                    <h2 className="text-3xl text-green-600 italic">
                        Travel with Us. We Introduce <span className="text-orange-500">Better</span> Places to Visit
                    </h2>
                </Banner>
                
                <Carousel2 slides={slides2} />

                <Banner className="flex items-center justify-between flex-wrap gap-4">
                    <h1 className="text-4xl text-blue-400">
                        <span className="text-orange-500">Surfing</span> On World Best, Untouched Beaches
                    </h1>
                    <a
                        href="/contact-us"
                        className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
                    >
                        Contact Us Now
                    </a>
                </Banner>
                
                <div className="w-full">
                    <Image 
                        src="/images/slides-3/slide-1.png" 
                        alt="Surfing on World Best, Untouched Beaches" 
                        width={1920} 
                        height={1080} 
                        className="w-full h-auto" 
                    />
                </div>
                <br />
                <br />
                <ReviewComponent />
                <PricesBanner />
                <DestinationHighlight />
                <Footer />
            </motion.main>
            )}
        </AnimatePresence>
    );
}