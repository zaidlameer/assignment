'use client';

import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
// 1. Import the Autoplay plugin from the package you just installed
import Autoplay from 'embla-carousel-autoplay';

interface ReviewCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ReviewCarousel = ({ images }: ReviewCarouselProps) => {
  // 2. Initialize the plugin and pass it to the hook
  const [emblaRef] = useEmblaCarousel(
    // First argument: Options
    { loop: true }, 
    // Second argument: An array of plugins
    [
      Autoplay({
        delay: 2000, // The delay in milliseconds (2 seconds)
        stopOnInteraction: false, // Continue playing even after user interaction
        stopOnMouseEnter: false, // Pause the carousel when the mouse is over it
      }),
    ]
  );

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {images.map((image, index) => (
          // Each slide takes up the full width of the container
          <div className="flex-[0_0_100%] relative min-w-0 pl-4" key={index}>
            {/* The Image component itself */}
            <Image
              src={image.src}
              alt={image.alt}
              width={500} // Base width for the SVG
              height={250} // Base height for the SVG
              className="w-full h-auto" // These classes make it responsive
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;