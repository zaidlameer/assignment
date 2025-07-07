'use client';

import Image from 'next/image';   
import Link from 'next/link';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative bg-gray-700 text-white px-6 md:px-20 py-12">
      {/* Background skyline image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/footer-bg-skyline.svg" // Replace with your image path
          alt="Skyline"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold mb-4 tracking-wide">ABOUT SITE</h2>
          <p className="text-sm text-gray-300 mb-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
          </p>
          <input
            type="email"
            placeholder="Email Address Here"
            className="w-full px-3 py-2 rounded border border-gray-500 bg-transparent placeholder-gray-400 text-sm"
          />
        </div>

        {/* Pages */}
        <div>
          <h2 className="text-lg font-semibold mb-4 tracking-wide">PAGES</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="#">Travel Packages</Link></li>
            <li><Link href="#">Coworking and Coliving</Link></li>
            <li><Link href="#">Warm Escape</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">About Us</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold mb-4 tracking-wide">SOCIAL MEDIA</h2>
          <div className="flex gap-4 text-2xl text-white">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
            <FaWhatsapp className="hover:text-green-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-300 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>

        {/* Custom section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 tracking-wide">WHAT EVER YOU WANT</h2>
          <p className="text-sm text-gray-300">you can add something here</p>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="relative z-10 mt-12 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        © 2024 @fraiz valley. All Rights Reserved.
      </div>
    </footer>
  );
}
