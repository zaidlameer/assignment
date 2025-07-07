'use client';

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

// Define the type for a single slides data
interface Slide {
  imageUrl: string;
  title: string;
  subtitle: string;
  cta: string;
}

interface ImageCarouselProps {
  slides: Slide[];  
}

const Carousel1 = ({slides}: ImageCarouselProps) => {
  // 1. Set up Embla with responsive options
  const [emblaRef] = useEmblaCarousel({
    loop: true, // Make it loop
    align: 'start',
    // Default: 1 slide visible
    slidesToScroll: 1,
    // Breakpoints for responsive behavior
    breakpoints: {
      // From 'md' breakpoint (768px) and up, show 3 slides
      '(min-width: 768px)': { slidesToScroll: 3, align: 'start' },
    },
  });

  return (
    <div className="px-4 md:px-8">
      {/* 2. This is the main carousel viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        {/* 3. The container holds the slides */}
        <div className="flex">
          {/* 4. Each slide needs a specific class and responsive width */}
          {slides.map((slide, index) => (
            <div
              className="relative h-[500px] flex-shrink-0 flex-grow-0 basis-full md:basis-1/3"
              key={index}
            >
              <div className="p-2 h-full w-full"> {/* Optional: for spacing between slides */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                    <Image src={slide.imageUrl} alt={slide.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6 text-white">
                      <h3 className="text-xl font-bold uppercase">{slide.title}</h3>
                      <h4 className="text-xl font-bold uppercase">{slide.subtitle}</h4>
                      <p className="mt-2 text-sm">{slide.cta}</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* You can still have custom dots or arrows by using the Embla API */}
    </div>
  );  
}

export default Carousel1;

