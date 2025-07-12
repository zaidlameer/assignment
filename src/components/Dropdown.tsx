'use client';

import { ReactNode, useState, useRef, useEffect } from "react";

interface Dropdown {
    title: string;
    content: ReactNode;
};

export default function DropDown({ title, content }: Dropdown) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="hover:text-black transition-colors"
                aria-expanded={isOpen}
            >
                {title} ▾
            </button>
            
            <div
                className={`
                    absolute top-full z-50 mt-2 w-[700px] bg-white p-6 flex gap-8
                    
                    // --- STYLE CHANGES TO MATCH THE IMAGE ---
                    shadow-xl      // 1. Heavier, more pronounced shadow
                    rounded-xl     // 2. Softer, more rounded corners
                                   // 3. The 'border' class has been removed
                    
                    // --- TRANSITION CLASSES (no changes here) ---
                    transition-all duration-300 ease-in-out
                    
                    // --- STATE-DEPENDENT CLASSES (no changes here) ---
                    ${isOpen 
                        ? 'opacity-100 visible translate-y-0' 
                        : 'opacity-0 invisible -translate-y-4'
                    }
                `}
            >
                {content}
            </div>
        </div>
    );
};