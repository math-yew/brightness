"use client";
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link'; // Import Link
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { Suspense } from 'react';

// We wrap the content in Suspense because useSearchParams() requires it in static exports
function SuccessContent() {
  const searchParams = useSearchParams();
  const returnPath = searchParams.get('from') || '/'; // Default to home if missing

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md w-full text-center"
    >
      <div className="flex justify-center mb-6">
        <div className="bg-emerald-100 p-4 rounded-full">
          <CheckCircle2 size={64} className="text-emerald-600" />
        </div>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">Thank You!</h1>
      <p className="text-lg text-gray-600 mb-10 leading-relaxed">
        Your message has been received. I'll be in touch shortly.
      </p>

      {/* Fresh Navigation Link instead of router.back() */}
      <Link 
        href={returnPath}
        className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all active:scale-95 shadow-lg"
      >
        <ArrowLeft size={18} />
        Return to Site
      </Link>
    </motion.div>
  );
}

export default function SuccessPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col items-center justify-center relative px-6">
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}