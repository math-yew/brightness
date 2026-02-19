// components/Navbar.js
"use client";
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Anxiety Counseling', href: '/anxiety-counseling' },
    { name: 'Services', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Portfolio', href: '#' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tighter">LOGO</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium hover:text-blue-600 transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button (Pill shaped) */}
        <div className="hidden md:block">
          <a href="tel:1234567890" className="bg-black text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all flex items-center gap-2">
            <Phone size={16} /> Call Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute top-20 left-0 w-full p-6 border-b shadow-lg animate-in slide-in-from-top">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
            <a href="tel:1234567890" className="bg-black text-white py-4 rounded-full text-center font-semibold">
              Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;