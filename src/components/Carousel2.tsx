'use client';

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

interface Slide {
  imageUrl: string;
  imageTitle: string;
  subtitle: string;
  exploreText: string;
}

interface ImageCarouselProps {
  slides: Slide[];
}

const Carousel2 = ({ slides }: ImageCarouselProps) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 4, align: 'start' },
    },
  });

  return (
    <div className="px-4 md:px-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              className="relative h-[500px] flex-shrink-0 flex-grow-0 basis-full md:basis-1/4"
              key={index}
            >
              <div className="p-2 h-full w-full">
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <Image src={slide.imageUrl} alt={slide.imageTitle} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold uppercase">{slide.imageTitle}</h3>
                    <br />
                    <h4 className="text-sm uppercase">{slide.subtitle}</h4>
                    <br />
                    <p className="mt-2 text-sm-2 text-orange-500 text-right">{slide.exploreText}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel2;