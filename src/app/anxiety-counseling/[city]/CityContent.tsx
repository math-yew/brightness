// src/app/anxiety-counseling/[city]/CityContent.tsx
"use client";
import { motion } from 'framer-motion';

export default function CityContent({ citySlug }) {
  // Safety check: If citySlug is undefined, don't try to split it yet
  if (!citySlug) return null;

  const cityName = citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    <div className="font-montserrat">
      <section className="pt-40 pb-20 bg-emerald-50 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Anxiety Counseling in {cityName}, CO
          </motion.h1>
       </section>

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Localized Support for {cityName} Residents</h2>
          <p className="text-gray-700 text-lg mb-8">
            Whether you're dealing with work stress, social anxiety, or the general pressures of life in Northern Colorado, 
            our {cityName} focused counseling provides the tools you need to thrive.
          </p>
          <div className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-emerald-800">Your Journey Starts in {cityName}</h3>
            <p className="text-gray-600 italic">"The path to peace isn't about getting rid of anxiety—it's about learning to live a full life alongside it."</p>
          </div>
        </div>
      </section>
    </div>
  );
}