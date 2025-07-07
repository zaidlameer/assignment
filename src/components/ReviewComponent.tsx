import React from 'react';
import ReviewCarousel from './ReviewCarousel';
import Image from 'next/image';

// --- Your Data ---
// Put the paths to your three review PNGs here.
const reviewImages = [
  { src: '/images/reviews/review-1.svg', alt: 'Review from a client in the Middle East' },
  { src: '/images/reviews/review-2.svg', alt: 'Another positive customer review' },
  { src: '/images/reviews/review-3.svg', alt: 'A third rave review' },
];
// -----------------

export default function TestimonialsSection() {
  return (
    <section className="relative w-full h-[650px] md:h-[750px] text-white">
      {/* Layer 1: Background Image */}
      <Image
        src="/images/review-background.svg" // Your scenic background
        alt="Scenic view of Sigiriya Rock in Sri Lanka"
        fill
        className="object-cover"
        priority
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* We use a grid for a robust two-column layout */}
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          
          {/* Column 1: Static Text Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dont Just Take Our Word For It
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We pride ourselves on creating unforgettable journeys. Heres what some of our travelers have to say about their experience with us.
            </p>
            {/* You can add more text or a button here if you like */}
          </div>

          {/* Column 2: The Image Carousel */}
          <div className="w-full">
            <ReviewCarousel images={reviewImages} />
          </div>
        </div>
      </div>
    </section>
  );
}