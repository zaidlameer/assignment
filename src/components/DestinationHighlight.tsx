// app/components/DestinationHighlight.tsx
'use client';

import React, { useRef, useState, useCallback } from 'react';
import Image from 'next/image';

type Position = {
  x: number;
  y: number;
};

const DestinationHighlight = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imagePosition, setImagePosition] = useState<Position>({ x: -150, y: -150 });
  
  // Use a ref to store the starting position of the pan
  const panStartRef = useRef<Position>({ x: 0, y: 0 });
  const imageStartPosRef = useRef<Position>({ x: 0, y: 0 });

  // This function will be attached to 'mousemove' and 'touchmove' ONLY during a pan
  const handlePanMove = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const deltaX = clientX - panStartRef.current.x;
    const deltaY = clientY - panStartRef.current.y;

    let newX = imageStartPosRef.current.x + deltaX;
    let newY = imageStartPosRef.current.y + deltaY;
    
    // Boundary checks
    const containerRect = containerRef.current.getBoundingClientRect();
    const imageWidth = containerRect.width * 1.5;
    const imageHeight = containerRect.height * 1.5;
    const maxPanX = imageWidth - containerRect.width;
    const maxPanY = imageHeight - containerRect.height;
    
    newX = Math.max(-maxPanX, Math.min(0, newX));
    newY = Math.max(-maxPanY, Math.min(0, newY));

    setImagePosition({ x: newX, y: newY });
  }, []); // useCallback with empty dependency array as it doesn't depend on props/state

  // This is the main event handler for starting the pan
  const handlePanStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault(); // Prevent default image drag behavior
    if (!containerRef.current) return;

    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    panStartRef.current = { x: clientX, y: clientY };
    imageStartPosRef.current = { ...imagePosition };

    // Define move and end handlers within the scope of the start handler
    const onMove = (moveEvent: MouseEvent | TouchEvent) => {
      const moveClientX = 'touches' in moveEvent ? moveEvent.touches[0].clientX : moveEvent.clientX;
      const moveClientY = 'touches' in moveEvent ? moveEvent.touches[0].clientY : moveEvent.clientY;
      handlePanMove(moveClientX, moveClientY);
    };

    const onEnd = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };

    // Add listeners for the drag operation
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('touchend', onEnd);
  };

  return (
    <section className="flex flex-col md:flex-row max-w-7xl mx-auto my-12 bg-white shadow-xl overflow-hidden">
      {/* Left Column: Interactive Map */}
      <div
        ref={containerRef}
        className="flex-1 relative overflow-hidden cursor-grab active:cursor-grabbing select-none h-96 md:h-auto"
        onMouseDown={handlePanStart}
        onTouchStart={handlePanStart}
      >
        <Image
          src="/images/srilanka-map.jpg"
          alt="Illustrated map of Sri Lanka"
          fill
          className="object-cover"
          style={{
            transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(1.25)`,
            transition: 'transform 0.1s ease-out', // Smooth transition, but fast
          }}
          priority
          draggable={false} // Explicitly disable native browser dragging
        />
      </div>

      {/* Right Column: Details (No Changes Here) */}
      <div className="flex-1 p-8 md:p-12 flex flex-col gap-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          <span className="text-orange-500">Sri Lanka</span> is the Most Valuable destination you have to visit
          <span className="text-teal-600 block mt-2">Pricing</span>
        </h1>
        <div className="location-feature">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Galle Fort</h2>
          <p className="text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
          </p>
        </div>
        <div className="photo-gallery flex gap-4 mt-auto pt-4">
          <div className="relative w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
            <Image src="/images/travel-mode-pics/image.png" alt="Woman walking towards a lighthouse in Galle Fort" fill className="object-cover" />
          </div>
          <div className="relative w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
            <Image src="/images/travel-mode-pics/image2.png" alt="Kandyan dancers in traditional costume" fill className="object-cover" />
          </div>
          <div className="relative w-1/3 aspect-[4/3] rounded-xl overflow-hidden">
            <Image src="/images/travel-mode-pics/image3.png" alt="Large tree in a grassy field in Sri Lanka" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationHighlight;