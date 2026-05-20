"use client";
import { motion } from 'framer-motion';
import { formatCityName } from '../lib/cities';

export default function CareGiversContent({ citySlug }: CareGiversContentProps) {
  const cityName = formatCityName(citySlug);

  return (
    <div className="pt-32">
      <section className="px-6 py-20 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.h1 className="text-5xl font-bold text-gray-900 mb-6">
            Supporting the Supporters in {cityName}
          </motion.h1>
          <p className="text-xl text-gray-600">
            Caregiving is a journey of immense love, but it can also lead to exhaustion. 
            We provide the tools to help you navigate {cityName} life while caring for others.
          </p>
        </div>
      </section>
      {/* ... Add more sections here ... */}
    </div>
  );
}

interface CareGiversContentProps {
  citySlug: string;
}