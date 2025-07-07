'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Seasons from './Seasons';
import TravelMode from './TravelMode';
import FreeStyle from './FreeStyle';

type Tab = 'seasons' | 'travelMode' | 'freeStyle';

const TABS: {id: Tab, label: string}[] = [
  { id: 'seasons', label: 'Seasons' },
  { id: 'travelMode', label: 'Travel Mode' },  
    { id: 'freeStyle', label: 'Free Style' },
];

const renderComponent = (selected: Tab) => {
  switch (selected) {
    case 'seasons':
      return <Seasons />;
    case 'travelMode':
      return <TravelMode />;
    case 'freeStyle':
      return <FreeStyle />;
    default:
      return null;
  }
}

export default function TripPlanner() {
  const [selected, setSelected] = useState<Tab>('seasons');

  return (
    <section className="px-6 py-12 text-center">
            <h2 className="text-2xl font-bold mb-8 uppercase tracking-wide">
                Where will the wind take you?
            </h2>

            <div className="text-center space-y-8">
                {/* Tabs */}
                <div className="flex justify-center gap-12 text-lg font-semibold">
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setSelected(tab.id)}
                            className={`pb-2 transition-all duration-300 ${
                                selected === tab.id
                                    ? 'text-blue-500 border-b-2 border-blue-500'
                                    : 'text-gray-500 hover:text-blue-500 border-b-2 border-transparent'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Animated Component Switch */}
                <div className="min-h-[250px] flex items-center justify-center"> {/* Set a min-height to prevent layout shift */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selected}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {renderComponent(selected)}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
  );
}
