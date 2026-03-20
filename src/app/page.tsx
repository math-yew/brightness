"use client";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  const [redirectUrl, setRedirectUrl] = useState('');
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'New Website Inquiry',
    honeypot: '',
    message: '',
    source: '',
    service: 'Anxiety',
    firstName: '',
    lastName: ''
  });

  useEffect(() => {
  const origin = window.location.origin;
  const path = window.location.pathname === '/' ? '' : window.location.pathname.replace(/\/$/, "");
  setRedirectUrl(`${origin}${path}/success?from=${path || '/'}`);
}, []);

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = async (e) => {
  e.preventDefault();
  setStatus({ ...status, submitting: true });

  const res = await fetch('/api/contact', { 
    method: 'POST',
    body: JSON.stringify({
      ...formData,
      accessKey: 'sf_309l6lj7mj6h8f1f2f1e405b', 
      name: `${formData.firstName} ${formData.lastName}`
    }),
    headers: { 'Content-Type': 'application/json' }
  });

  const json = await res.json();

    if (json.success) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: 'Success! Your message has been sent.' }
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: json.message }
      });
    }
  };

  if (status.submitted) {
    return (
      <main className="relative min-h-screen">
        <Navbar />
        <section className="h-screen w-full flex items-center justify-center bg-emerald-900 text-white text-center px-6">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
            <h1 className="text-4xl font-bold mb-4 font-montserrat">Message Received!</h1>
            <p className="text-xl">I'll reach out to you in Northern Colorado soon.</p>
            <button onClick={() => setStatus({ ...status, submitted: false })} className="mt-8 bg-white text-emerald-900 px-8 py-3 rounded-full font-bold">
              Send Another
            </button>
          </motion.div>
        </section>
      </main>
    );
  }

  return (
    <div>
    <main className="relative min-h-screen">
      <Navbar />
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <video autoPlay muted loop playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
          <source src="/scenery1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center pt-20">
          
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-white">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4 font-amiri font-normal">Cultivating Your <br /> Strengths & Values</h1>
            <p className="text-xl md:text-2xl font-light mb-2 italic">Acceptance Commitment Therapy (ACT)</p>
            <p className="text-xl font-bold mb-8">Serving clients in Northern Colorado</p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform">Our Reviews</button>
              <button className="bg-white/20 backdrop-blur-md border border-white text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-white/30 transition-all">About Us</button>
            </div>
          </motion.div>

          <motion.div className="bg-black/30 backdrop-blur-xl p-8 rounded-[2rem] border border-white/20 shadow-2xl">
            <form 
              action="https://api.staticforms.xyz/submit" 
              method="POST"
              autoComplete="off"
              className="grid grid-cols-2 gap-4 text-white"
            >
              <input type="text" name="honeypot" style={{ display: 'none' }} />
              {/* Replace with your key */}
              <input type="hidden" name="accessKey" value="sf_309l6lj7mj6h8f1f2f1e405b" />
              
              <input type="hidden" name="redirectTo" value={redirectUrl} />
              {/* Anti-Spam Honeypot (Hidden from users) */}
              {/* <input type="text" name="honeypot" style={{ display: 'none' }} onChange={handleInputChange} /> */}

              <div className="col-span-1 text-left">
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block opacity-70">How did you hear?</label>
                <input name="source" type="text" onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none transition-all" required />
              </div>
              <div className="col-span-1 text-left">
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block opacity-70">Help with:</label>
                <select name="service" onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 outline-none text-black">
                  <option>Anxiety</option>
                  <option>Depression</option>
                  <option>Personal Growth</option>
                </select>
              </div>
              <div className="col-span-1 text-left">
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block opacity-70">First Name</label>
                <input name="firstName" type="text" onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-xl p-3 outline-none" required />
              </div>
              <div className="col-span-1 text-left">
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block opacity-70">Last Name</label>
                <input name="lastName" type="text" onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-xl p-3 outline-none" required />
              </div>
              <div className="col-span-2 text-left">
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block opacity-70">Email Address</label>
                <input name="email" type="email" onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-xl p-3 outline-none" required />
              </div>
              <div className="col-span-2 text-left">
                <label className="text-[10px] uppercase font-bold tracking-widest mb-1 block opacity-70">Message</label>
                <textarea name="message" rows={3} onChange={handleInputChange} className="w-full bg-white/10 border border-white/20 rounded-xl p-3 outline-none" required />
              </div>
              
              <button type="submit" className="col-span-2 bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold py-3 rounded-full mt-2">
                Submit Request
              </button>
                {/* {status.submitting ? 'Processing...' : 'Submit Request'} */}
              {/* </button> */}

              {status.info.error && (
                <p className="col-span-2 text-red-400 text-center text-sm">{status.info.msg}</p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
    <SiteFooter />
    </div>
  );
}