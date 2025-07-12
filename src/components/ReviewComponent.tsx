import React from 'react';
import Image from 'next/image';
import ReviewCarousel from './ReviewCarousel'; // Your existing carousel component
import PlayIcon from './PlayIcon'; // The new icon component

// --- Your Data ---
// The paths to your SVG review cards.
const reviewImages = [
  { src: '/images/reviews/review-1.svg', alt: 'Review from Akshaya Kumar' },
  { src: '/images/reviews/review-2.svg', alt: 'Review from Theresa Jordan' },
  { src: '/images/reviews/review-3.svg', alt: 'Review from Samuel Lee' },
];
// -----------------

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] md:min-h-[800px] text-white">
      
      {/* Layer 1: Background Image & Gradient Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/review-background.svg" // Use your high-quality background image
          alt="Scenic view of Sigiriya Rock in Sri Lanka"
          fill
          className="object-cover"
          priority
        />
        {/* A gradient overlay provides better contrast for text at the top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/40" />
      </div>

      {/* Layer 2: Content Grid */}
      {/* This grid will hold our two columns. It fills the entire section. */}
      <div className="relative z-10 grid h-full max-w-7xl mx-auto px-6 lg:px-8 lg:grid-cols-2 items-center">
        
        {/* Left Column: Headline and Play Button */}
        {/* We use flexbox to push content to the bottom on mobile */}
        <div className="flex flex-col justify-end h-full pt-32 pb-16 lg:pb-24">
            <div>
                <PlayIcon />
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                    Escape Winter in Style!
                </h1>
                <p className="mt-4 text-lg text-gray-200 max-w-lg">
                    MO is the best. Besides the many and Superb Products, the service...
                </p>
            </div>
        </div>

        {/* Right Column: Testimonial Carousel */}
        {/* 'items-center' on the parent grid vertically centers this column's content on desktop */}
        <div className="w-full">
            <ReviewCarousel images={reviewImages} />
        </div>
        
      </div>
    </section>
  );
}