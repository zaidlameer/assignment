'use client';

import { ReactNode } from "react";

interface Dropdown{
    title: string;
    content: ReactNode;
};

export default function DropDown({ title, content }: Dropdown) {
    return (
        <div className="relative group">
            <button className="hover: text-blue-600 transition-colors">
                {title} ▾
            </button>
            <div className="absolute top-full z-50 mt-2 w-[700px] bg-white p-6 shadow-lg border rounded-lg hidden group-hover:flex gap-8">
                {content}
            </div>
        </div>
    );
};

