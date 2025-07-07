import React from "react";
import Image from "next/image";

type mode = {
    imageSrc: string;
    alt: string;
    title: string;    
}

const modes: mode[] = [
    {
        imageSrc: '/images/travel-mode-pics/image.png',
        alt: 'image',
        title: 'Free-Spirit',
    },
    {
        imageSrc: '/images/travel-mode-pics/image2.png',
        alt: 'image',
        title: 'Adrenaline'
    },
    {
        imageSrc: '/images/travel-mode-pics/image3.png',
        alt: 'image',
        title: 'Barefoot-Luxe'
    },
    {
        imageSrc: '/images/travel-mode-pics/image4.png',
        alt: 'image',
        title: 'Soulful'
    },
    {
        imageSrc: '/images/travel-mode-pics/image5.png',
        alt: 'image',
        title: 'Retreat'
    }
    
]


export default function TravelMode() {
    return (
    <div className="flex flex-wrap items-start justify-center gap-x-12 gap-y-10 p-4">
      {/* 4. Map over the data array to render each item */}
      {modes.map((item) => (
        <div key={item.title} className="flex w-48 flex-col items-center text-center">
          
          {/* Image Container: Applies the blue circle conditionally */}
          <div
            className={`
              mb-4 flex h-44 w-44 items-center justify-center`}
          >
            <Image
              src={item.imageSrc}
              alt={item.alt}
              width={180}  // The actual width of your image file
              height={240} // The actual height of your image file
              className="object-contain"
            />
          </div>

          {/* Text Container */}
          <div className="flex h-16 flex-col">
            <p className="font-semibold text-gray-700">{item.title}</p>

          </div>

        </div>
      ))}
    </div>
    );
};