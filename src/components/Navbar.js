"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const serviceLinks = [
    { name: 'Anxiety Counseling', href: '/anxiety-counseling' },
    { name: 'Care Givers Support', href: '#' },
    { name: 'Depression Counseling', href: '#' },
    { name: 'Divorce Counseling', href: '#' },
    { name: 'Grief & Loss Counseling', href: '#' },
    { name: 'Life Transitions Counseling', href: '#' },
    { name: 'Stress Counseling', href: '#' },
    { name: 'Trauma Counseling', href: '#' },
  ];

  const mainLinks = [
    { name: 'Telehealth', href: '#' },
    { name: 'Price and Policy', href: '#' },
    { name: 'Blogs', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* 1. Logo Section */}
        <Link href="/" className="relative w-40 h-16 transition-transform hover:scale-105">
          <Image 
            src="/bright-logo.jpg" 
            alt="Bright Logo" 
            fill 
            className="object-contain"
            priority
          />
        </Link>

        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center space-x-8 text-[15px] font-bold tracking-tight text-gray-900">
          <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>

          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className={`flex items-center gap-1 py-8 transition-colors border-b-2 ${
              isDropdownOpen ? 'text-emerald-800 border-emerald-800' : 'hover:text-emerald-700 border-transparent'
            }`}>
              Services <ChevronDown size={14} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full w-64 bg-[#f8f9fa] border border-gray-200 shadow-xl"
                >
                  <div className="flex flex-col">
                    {serviceLinks.map((service, idx) => (
                      <Link key={idx} href={service.href} className="px-6 py-4 text-[14px] font-medium text-gray-700 hover:bg-white hover:text-emerald-800 border-b border-gray-50 last:border-0 transition-all">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {mainLinks.map((link, idx) => (
            <Link key={idx} href={link.href} className="hover:text-emerald-700 transition-colors py-8">{link.name}</Link>
          ))}
        </div>

        {/* 3. Call Now Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link 
            href="tel:1234567890" 
            className="hidden sm:flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md active:scale-95"
          >
            <Phone size={16} />
            Call Now
          </Link>

          {/* Hamburger Icon */}
          <button 
            className="lg:hidden p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* 4. Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-4 font-bold text-gray-900">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
              
              {/* Mobile Accordion for Services */}
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full py-2"
                >
                  Services <ChevronDown size={18} className={isMobileServicesOpen ? 'rotate-180' : ''} />
                </button>
                {isMobileServicesOpen && (
                  <div className="bg-gray-50 rounded-xl mt-2 overflow-hidden">
                    {serviceLinks.map((service, idx) => (
                      <Link 
                        key={idx} 
                        href={service.href} 
                        className="block px-6 py-3 text-sm font-medium text-gray-600 border-b border-gray-100"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {mainLinks.map((link, idx) => (
                <Link key={idx} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</Link>
              ))}
              
              <Link 
                href="tel:1234567890" 
                className="flex items-center justify-center gap-2 bg-emerald-700 text-white py-4 rounded-xl mt-4"
              >
                <Phone size={18} /> Call Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}