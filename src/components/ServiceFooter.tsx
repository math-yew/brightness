"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ServiceFooter() {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [redirectUrl, setRedirectUrl] = useState('');
  const themeColor = "#8b9a7d"; // Your themed color

  useEffect(() => {
    const origin = window.location.origin;
    const path = window.location.pathname === '/' ? '' : window.location.pathname.replace(/\/$/, "");
    setRedirectUrl(`${origin}${path}/success?from=${path || '/'}`);
  }, []);

  return (
    <footer className="w-full bg-white font-montserrat">
      <section className="flex flex-col md:flex-row mx-auto py-16">
        <div className="flex-1 flex flex-col items-center justify-center text-gray-700 p-20">
          <div className="w-full">
            <h2 className="text-4xl font-bold mb-8" style={{ color: themeColor }}>Contact Us</h2>
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

            <form
              action="https://api.staticforms.xyz/submit"
              method="POST"
              className="grid grid-cols-2 gap-4"
            >
              <input type="hidden" name="accessKey" value="sf_309l6lj7mj6h8f1f2f1e405b" />
              <input type="hidden" name="redirectTo" value={redirectUrl} />
              <input type="text" name="honeypot" style={{ display: 'none' }} />

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
        </div>

        <div className="flex-1 flex items-center justify-center p-20">
          <div className="relative w-full h-[550px] border-gray-200 border-1 rounded-3xl overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12000.082661591498!2d-104.92106386607726!3d40.48145307324303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876eb10891fa3a53%3A0x7b371d40b635a2eb!2sBrightness%20of%20Hope%20Counseling!5e0!3m2!1sen!2sus!4v1771629034648!5m2!1sen!2sus"
              width="800"
              height="600"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <div className="py-6 text-center text-white text-sm" style={{ backgroundColor: themeColor }}>
        <p>© {new Date().getFullYear()} All Rights Reserved | Brightness of Hope Counseling</p>
      </div>
    </footer>
  );
}