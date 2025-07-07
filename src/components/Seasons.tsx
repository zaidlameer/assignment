import React from "react";
import Image from "next/image";

type Season = {
    imageSrc: string;
    alt: string;
    title: string;
    subtitle: string;
    
}

const seasons: Season[] = [
    {
        imageSrc: '/images/srilanka-images/srilanka-1.svg',
        alt: 'Sri Lanka',
        title: 'South-West Season',
        subtitle: '(November-March)',

    },
    {
        imageSrc: '/images/srilanka-images/srilanka-2.svg',
        alt: 'Sri Lanka',
        title: 'East Season',
        subtitle: '(April-October)',

    },
    {
        imageSrc: '/images/srilanka-images/srilanka-3.svg',
        alt: 'Sri Lanka',
        title: 'Year-Round',
        subtitle: '(Perfect Anytime)',

    },
    {
        imageSrc: '/images/srilanka-images/srilanka-4.svg',
        alt: 'Sri Lanka',
        title: 'Special Escapes',
        subtitle: '',

    },
    {
        imageSrc: '/images/srilanka-images/srilanka-5.svg',
        alt: 'Sri Lanka',
        title: 'Offbeat',
        subtitle: 'Hidden Gems',

    }
]


export default function Seasons() {
    return (
         <div className="flex flex-wrap items-start justify-center gap-x-8 gap-y-10 p-4">
      {/* 4. Map over the data array to render each item */}
      {seasons.map((item) => (
        <div key={item.title} className="flex w-40 flex-col items-center text-center">
          
          {/* Image Container: Applies the blue circle conditionally */}
          <div
            className={`
              mb-4 flex h-36 w-36 items-center justify-center`}
          >
            <Image
              src={item.imageSrc}
              alt={item.alt}
              width={90}  // The actual width of your image file
              height={120} // The actual height of your image file
              className="object-contain"
            />
          </div>

          {/* Text Container */}
          <div className="flex h-16 flex-col">
            <p className="font-semibold text-gray-700">{item.title}</p>
            {item.subtitle && (
              <p className="text-sm text-gray-500">{item.subtitle}</p>
            )}
          </div>

        </div>
      ))}
    </div>
    );
};