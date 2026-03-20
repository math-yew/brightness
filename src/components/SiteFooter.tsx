"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import ReCAPTCHA from "react-google-recaptcha";

export default function SiteFooter() {
  // --- Form Logic (Same as homepage) ---
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState('');
  const themeColor = "#8b9a7d"; // Your themed color

  useEffect(() => {
    // Dynamic redirect URL setup for StaticForms
    const origin = window.location.origin;
    const path = window.location.pathname === '/' ? '' : window.location.pathname.replace(/\/$/, "");
    setRedirectUrl(`${origin}${path}/success?from=${path || '/'}`);
  }, []);
  // ------------------------------------

  return (
    <footer className="w-full bg-white font-montserrat">
      
      {/* ================= SECTION 1: Video & Contact Form ================= */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 py-16 px-6 gap-12">
        
        {/* Left Column: Video Plant */}
        <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-xl">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            {/* The video file as requested in the prompt */}
            <source src="/plant1.mp4" type="video/mp4" />
          </video>
          {/* Slight overlay to ensure text pop if you add any over video later */}
          <div className="absolute inset-0 bg-black/10" />
        </div>


        {/* Right Column: Contact Info & Form */}
        <div className="flex flex-col justify-center text-gray-700">
          <h2 className="text-4xl font-bold mb-8 font-amiri font-normal" style={{ color: themeColor }}>Contact Us</h2>
          
          {/* Contact Details Links */}
          <div className="space-y-4 mb-8 text-lg">
            <Link href="tel:9702321999" className="flex items-center gap-3 hover:text-emerald-700 transition-colors">
              <Phone size={20} style={{ color: themeColor }} />
              <span>970-232-1999</span>
            </Link>
            <Link href="mailto:susan@brightnessofhopecounseling.com" className="flex items-center gap-3 hover:text-emerald-700 transition-colors">
              <Mail size={20} style={{ color: themeColor }} />
              <span>susan@brightnessofhopecounseling.com</span>
            </Link>
            <div className="flex items-start gap-3">
              <MapPin size={20} style={{ color: themeColor }} className="mt-1 shrink-0" />
              <span>Unit D, 631 Birch St, Windsor, CO 80550</span>
            </div>
          </div>
           <p className="text-sm mb-6 text-gray-500">Or send us a message and we'll be in touch.</p>


          {/* Footer StaticForm */}
          <form 
            action="https://api.staticforms.xyz/submit" 
            method="POST"
            className="grid grid-cols-2 gap-4"
          >
            <input type="hidden" name="accessKey" value="sf_309l6lj7mj6h8f1f2f1e405b" />
            <input type="hidden" name="redirectTo" value={redirectUrl} />
            <input type="text" name="honeypot" style={{ display: 'none' }} />

            {/* Input styles match the lighter beige/green look from the screenshot */}
            <div className="col-span-1">
              <input name="firstName" type="text" placeholder="First name" className="w-full bg-[#8b9a7d]/20 border-transparent focus:border-[#8b9a7d] rounded-lg p-3 outline-none placeholder-gray-500 transition-all" required />
            </div>
            <div className="col-span-1">
               <input name="lastName" type="text" placeholder="Last name" className="w-full bg-[#8b9a7d]/20 border-transparent focus:border-[#8b9a7d] rounded-lg p-3 outline-none placeholder-gray-500 transition-all" required />
            </div>
             <div className="col-span-1">
               <input name="email" type="email" placeholder="Email" className="w-full bg-[#8b9a7d]/20 border-transparent focus:border-[#8b9a7d] rounded-lg p-3 outline-none placeholder-gray-500 transition-all" required />
            </div>
            <div className="col-span-1">
               <input name="phone" type="tel" placeholder="Phone number" className="w-full bg-[#8b9a7d]/20 border-transparent focus:border-[#8b9a7d] rounded-lg p-3 outline-none placeholder-gray-500 transition-all" />
            </div>
            <div className="col-span-2">
              <textarea name="message" rows={4} placeholder="Message" className="w-full bg-[#8b9a7d]/20 border-transparent focus:border-[#8b9a7d] rounded-lg p-3 outline-none placeholder-gray-500 transition-all" required />
            </div>

             {/* ReCAPTCHA for Footer Form */}
            {/* <div className="col-span-2 flex justify-start py-2">
              <ReCAPTCHA
                sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
                onChange={(value) => setCaptchaValue(value)}
                // Using light theme here as it sits on a white background
                theme="light" 
              />
              <input type="hidden" name="g-recaptcha-response" value={captchaValue || ''} />
            </div> */}

            <div className="col-span-2">
               <button 
                type="submit" 
                disabled={!captchaValue}
                style={{ backgroundColor: themeColor }}
                className="text-white font-bold px-10 py-3 rounded-full transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>


      {/* ================= SECTION 2: Map Section ================= */}
      {/* NOTE: This is a static placeholder image designed to look like the map 
          in your screenshot. To make it interactive later, you would replace 
          this div with an iframe embed code from Google Maps or Mapbox.
      */}
      <section className="w-full h-[400px] bg-gray-200 relative grayscale-[30%] border-t border-b border-[#8b9a7d]/30">
          {/* <Image 
            src="/map-placeholder.jpg" // You'll need to save your map screenshot as this filename
            alt="Location Map of Windsor, CO"
            fill
            className="object-cover"
          /> */}
          {/* Optional: A marker overlay if you just use a generic map image */}
          {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full text-[#8b9a7d]">
             <MapPin size={40} fill={themeColor} />
          </div> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000.082661591498!2d-104.92106386607726!3d40.48145307324303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876eb10891fa3a53%3A0x7b371d40b635a2eb!2sBrightness%20of%20Hope%20Counseling!5e0!3m2!1sen!2sus!4v1771629034648!5m2!1sen!2sus"
              width="800"
              height="600"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>


      </section>


      {/* ================= SECTION 3: Centered Info Section ================= */}
      <section className="py-16 px-6 bg-[#8b9a7d]/10 text-center text-gray-700">
        <div className="max-w-md mx-auto flex flex-col items-center space-y-6">
          {/* Logo Image */}
          <div className="relative w-64 h-24">
             <Image 
                src="/bright-logo.jpg" 
                alt="Brightness of Hope Counseling" 
                fill 
                className="object-contain"
              />
          </div>

          <h3 className="text-xl font-bold uppercase tracking-widest font-amiri font-normal" style={{ color: themeColor }}>Contact Information</h3>
          
          <div className="space-y-1">
            <p className="font-bold">Phone</p>
            {/* Clickable phone link */}
            <Link href="tel:9702321999" className="hover:text-emerald-700">970-232-1999</Link>
          </div>

          <div className="space-y-1">
            <p className="font-bold">Email</p>
            {/* Clickable email link */}
            <Link href="mailto:susan@brightnessofhopecounseling.com" className="hover:text-emerald-700">susan@brightnessofhopecounseling.com</Link>
          </div>

          <div className="space-y-1">
             <p className="font-bold">Address</p>
             <p>Unit D, 631 Birch St, Windsor, CO 80550</p>
          </div>
        </div>
      </section>


      {/* ================= SECTION 4: Copyright FooterBar ================= */}
      {/* Background color set to theme color as per design */}
      <div className="py-6 text-center text-white text-sm" style={{ backgroundColor: themeColor }}>
        <p>© {new Date().getFullYear()} All Rights Reserved | Brightness of Hope Counseling</p>
      </div>
    </footer>
  );
}