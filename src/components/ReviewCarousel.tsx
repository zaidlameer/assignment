'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

type CarouselProps = {
  images: { src: string; alt: string }[];
};

export default function ReviewCarousel({ images }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Autoplay logic
  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const autoplayInterval = setInterval(autoplay, 4000); // Loop every 4 seconds
    return () => clearInterval(autoplayInterval);
  }, [autoplay]);

  return (
    <div className="overflow-hidden rounded-lg shadow-xl" ref={emblaRef}>
      <div className="flex">
        {images.map((img, idx) => (
          // 1. Each slide takes up 100% of the width
          <div className="relative flex-[0_0_100%]" key={idx}>
            {/* 2. Set a fixed aspect ratio for consistency */}
            {/* aspect-[4/3] means the width will be 4 units for every 3 units of height */}
            <div className="aspect-video bg-gray-100 dark:bg-gray-800">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                // 3. 'object-contain' is KEY here. It ensures the whole PNG is visible.
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}