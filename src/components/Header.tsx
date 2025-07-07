'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import TravelDropdown from './TravelDropdown1';
import Dropdown from './Dropdown';
import TripsDropdownContent from './TripsDropdown';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState<null | number>(null);

  const toggleDropdown = (index: number) => {
    setShowDropdown(prev => (prev === index ? null : index));
  };

  return (
    <header className="w-full bg-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
        {/* Logo */}
          <Image src="/images/logo.svg" alt="Logo" width={100} height={40} />
        </Link>
        {/*Desktop Navigation*/}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium">
            <Dropdown title="Trips" content={<TripsDropdownContent />} />
            <div className="relative group">
                <button>Experience ▾</button>
            </div>
            <div className="relative group">
                <button>Essentials ▾</button>
            </div>
            <Link href='/about'>About</Link>
            <Link href='/community'>Community</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/bucket' className='text-blue-500'>🛒 Bucket List</Link>
            <Link href='/shop' className='text-orange-600'>🛍 Shop</Link>
        </div>
        {/* Mobile Navigation */}
        <div className='flex gap-3 md:hidden'>
            {/* Icon 1 */}
          <button onClick={() => toggleDropdown(1)}>
            <Image src="/images/drop-down-1.svg" alt="Travel Type" width={30} height={30} />
          </button>
          {/* Icon 2 */}
          <button onClick={() => toggleDropdown(2)}>
            <Image src="/images/drop-down-2.svg" alt="Location" width={30} height={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Section (only on small screens) */}
      {/* Conditional dropdown display */}
      <div className='md:hidden'>
        {showDropdown === 1 && <TravelDropdown type="travel" />}
        {showDropdown === 2 && <TravelDropdown type="location" />}
      </div>
    </header>
  );
}
