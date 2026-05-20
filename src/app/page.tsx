"use client";
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
import SiteFooter from "../components/SiteFooter";
import FAQSection from '../components/FAQSection';

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

      {/* New ACT Section */}
      <section className="w-full bg-[#f9f9f9] py-20">
        <div className="w-full mx-auto grid md:grid-cols-2 items-stretch overflow-hidden shadow-sm bg-white">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[400px] md:min-h-full"
          >
            <img 
              src="/purple flowers.jpg" 
              alt="Field of purple flowers" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-10 md:p-16 flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-normal font-amiri text-gray-800 mb-8 leading-tight">
              Acceptance Commitment <br /> Therapist (ACT)
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg">
              <p>
                Do you find yourself struggling with intense emotions, feeling empty, 
                disconnected, or struggling to process what's happening around you? 
                Life can be messy, and it's common to feel isolated during challenging 
                times. Brightness of Hope Counseling offers Acceptance Commitment 
                Therapy (ACT) that guides you toward a brighter future.
              </p>
              
              <p>
                Our ACT focused therapy is designed to help you move from feeling 
                stuck and overwhelmed, to embracing life, the people and the things 
                that matter most. Through our time together you can begin to 
                experience a brightness of hope and healing that will empower you to 
                live the life you desire. If you're ready to take the first step, please don't 
                hesitate to contact Brightness of Hope Counseling.
              </p>
            </div>

            <div className="mt-10">
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Get Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Meet the Counselor Section */}
      <section className="w-full bg-white py-20">
        <div className="mx-auto grid md:grid-cols-2 items-center overflow-hidden bg-white shadow-sm">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 md:p-16 flex flex-col justify-center"
          >
            <p className="text-xs uppercase font-bold tracking-widest text-[#8fa189] mb-3">Meet the Counselor</p>
            
            <h2 className="text-4xl md:text-5xl font-normal font-amiri text-gray-800 leading-tight">
              Susan C. Merrill, LCSW
            </h2>
            <div className="w-16 h-px bg-gray-300 mt-4 mb-8" />
            
            <div className="space-y-6 text-gray-600 leading-relaxed font-light text-lg mb-10">
              <p>
                My husband Ron and I have a blended family consisting of 8 adult children, their spouses and several grandchildren. We love spending time with our family, and we also enjoy traveling. We are both certified in open water scuba diving and spend most of our vacations on the beach or in the ocean.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-normal font-amiri text-[#8fa189] mb-6 leading-tight">
              Professional Qualifications
            </h3>

            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-base mb-12 list-outside list-none">
              <div>
                <strong className="font-bold">Education</strong>
                <ul className="pl-6 space-y-2 list-disc mt-2">
                  <li>Masters of Science in Social Work (MSSW) - University of Louisville
                    <ul className="pl-6 space-y-1 list-circle mt-1">
                      <li>Specialization in Psychosocial Oncology</li>
                    </ul>
                  </li>
                  <li>Bachelors of Science in Social Work (BSW) -Weber State University</li>
                  <li>Minor in Health Promotion with an emphasis on
                    <ul className="pl-6 space-y-1 list-circle mt-1">
                      <li>Mindfulness and Stress Reduction</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <strong className="font-bold">Professional License</strong>
                <ul className="pl-6 space-y-2 list-disc mt-2">
                  <li>Licensed Clinical Social Worker (LCSW)
                    <ul className="pl-6 space-y-1 list-circle mt-1">
                      <li>Specialization in Psychosocial Oncology</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <strong className="font-bold">Professional Affiliations</strong>
                <ul className="pl-6 space-y-2 list-disc mt-2">
                  <li>National Association of Social Workers (NASW)</li>
                </ul>
              </div>
            </div>

            <div className="mt-auto">
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Get Started Today
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square md:aspect-auto md:h-full bg-[#f9f9f9]"
          >
            {/* Here is the image. It does not have rounded corners, which I've ensured.
              Place your headshot image in the public folder and call it "susan_c_merrill.jpg"
            */}
            <img 
              src="/susan.png" 
              alt="Susan C. Merrill, LCSW headshot" 
              className="absolute inset-0 w-full h-full object-cover p-12"
            />
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative w-full py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover">
            <source src="/flower bush.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70" />
          {/* <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" /> */}
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-black mb-12 font-montserrat">
            What our Clients Say About Us
          </h2>

          <div className="space-y-4">
            {/* Google Summary Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-5" />
                    <span className="text-lg font-semibold text-gray-700">Reviews</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-2xl font-bold">5.0</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">(1)</span>
                  </div>
                </div>
              </div>
              <button className="bg-[#1a73e8] hover:bg-[#1557b0] text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors shadow-sm">
                Review us on Google
              </button>
            </motion.div>

            {/* Individual Review Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0 border border-gray-100">
                  {/* Replace with actual avatar image if available */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-orange-400 to-yellow-200 text-white font-bold">JW</div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <h4 className="font-bold text-gray-900">J W</h4>
                    <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  </div>
                  <p className="text-xs text-gray-400">8 months ago</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    ))}
                  </div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-4 opacity-50" />
              </div>
              
              <p className="text-gray-600 leading-relaxed text-sm">
                Susan has been a and a blessing while navigating some pretty difficult circumstances in my life. 
                Her calm and encouraging demeanor and advice have been so helpful, and the tools she gives me 
                to handle all of this have been so amazing. I have had previous unpleasant counseling 
                experiences, and Susan has helped renew my appreciation for counseling in general. 
                She's been a breath of fresh air in a real...
              </p>
              <button className="text-blue-500 font-semibold text-sm mt-2 hover:underline">Read more</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="w-full bg-white py-24">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-[50%] md:flex-shrink-0 relative z-0"
          >
            <img 
              src="/butterfly.jpg" 
              alt="Butterfly landing on hand" 
              className="w-full h-64 md:h-full object-cover block"
            />
          </motion.div>

          {/* Right: Card — overlaps on desktop, stacks below on mobile */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 bg-white p-8 md:p-16 shadow-2xl 
                      w-[90%] md:w-auto 
                      -mt-12 md:mt-12 md:-ml-16 md:my-12
                      mx-auto md:mx-0"
          >
            <h2 className="text-3xl md:text-5xl font-normal font-amiri text-gray-800 mb-6 md:mb-8 leading-tight">
              Offering the Support You Need
            </h2>
            
            <div className="text-gray-600 leading-relaxed font-light text-base md:text-lg mb-8 md:mb-10">
              <p>
                At Brightness of Hope Counseling, we believe that every individual has 
                the potential for growth, healing, and empowerment. Our goal is to 
                provide a safe and non-judgmental space where our clients can feel 
                heard, supported, and validated as they work through life's challenges. 
                We understand that seeking help can be difficult, but we want to 
                reassure you that we are here to support you every step of the way. 
                Reach out today and get started on the path to healing.
              </p>
            </div>
            <div>
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Connect With Us
              </button>
            </div>
          </motion.div>

        </div>
      </section>



      {/* Hope and Healing Section */}
      <section className="w-full grid md:grid-cols-2 min-h-[600px]">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#8fa189] text-white p-12 md:p-20 flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-normal font-amiri leading-tight mb-4">
            Helping You Find Hope and <br /> Healing:
          </h2>
          
          <h3 className="text-xl font-bold mb-4 font-montserrat">
            Grief Counseling & Therapy
          </h3>
          
          <div className="w-16 h-px bg-white/40 mb-8" />
          
          <div className="space-y-6 text-white/90 leading-relaxed font-light text-lg mb-12">
            <p>
              At Brightness of Hope Counseling, we take a holistic approach to therapy. 
              Our therapist works with you to identify your strengths, values, and goals. 
              From there a tailored treatment plan is created to meet your individual 
              needs. We understand that therapy is not a one-size-fits-all solution 
              and that each person's journey toward healing and growth is individual.
            </p>
            
            <p>
              If you're struggling with emotional challenges and would like to learn 
              more about how we can support you, we encourage you to reach out to us. 
              We offer a free phone consultation so you can determine if Brightness of 
              Hope Counseling is the right fit for you. So don't wait, get in touch today.
            </p>
          </div>

          <div>
            <button className="border border-white text-white px-10 py-3 rounded-full font-medium hover:bg-white hover:text-[#8fa189] transition-all duration-300">
              See Our Blog
            </button>
          </div>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-full min-h-[400px]"
        >
          <img 
            src="/bird flock.jpg" 
            alt="Birds flying over mountains at sunset" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </section>

      {/* More About Our Services Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Heading */}
          <h2 className="text-4xl text-center font-normal font-amiri text-gray-800 mb-16">
            More About Our Services
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Content Lists */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              {/* Therapeutic Aim Section */}
              <div className="mb-10">
                <h3 className="text-xl font-bold text-[#8fa189] mb-6">
                  Our Therapeutic Aim is building skills to:
                </h3>
                <ul className="space-y-4 text-gray-700 leading-relaxed font-light list-disc pl-5">
                  <li>
                    <span className="font-bold">Be Present</span> - Being intentional in your here and now experience.
                  </li>
                  <li>
                    <span className="font-bold">Open Up</span> - Noticing thoughts and feeling while making room for them.
                  </li>
                  <li>
                    <span className="font-bold">Do what matters</span> - Setting goals, committed action, guided by your values.
                  </li>
                </ul>
              </div>

              {/* Holistic Approach Section */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-[#8fa189] mb-6">
                  Our Holistic Approach Includes:
                </h3>
                <ul className="space-y-4 text-gray-700 leading-relaxed font-light list-disc pl-5">
                  <li>
                    <span className="font-bold">Psychological</span> - A values focused perspective to life's challenges.
                  </li>
                  <li>
                    <span className="font-bold">Social</span> - Nourishing relationships set within healthy boundaries.
                  </li>
                  <li>
                    <span className="font-bold">Physical</span> - Committed life-enhancing action, guided by one's values to optimize wellbeing.
                  </li>
                  <li>
                    <span className="font-bold">Spiritual</span> - Compassion and gratitude for self, others and the world around you.
                  </li>
                </ul>
              </div>

              <div>
                <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                  Get Started Now
                </button>
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <img 
                src="/rocks.png" 
                alt="Stacked stones with mind, body, soul text" 
                className="w-full max-w-md h-auto shadow-sm"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grief and Loss Section */}
      <section className="w-full bg-[#f9f9f9] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] overflow-hidden shadow-lg"
          >
            <img 
              src="/wood fence.jpg" 
              alt="Mountain sunrise with yellow flowers" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-normal font-amiri text-[#8fa189] mb-8 leading-tight">
              Grief and Loss
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <p className="font-bold text-gray-900">
                Life transitions mean change. With change, intense feelings of fear and 
                uncertainty often arise as one of life's chapters closes and another one 
                opens to a new beginning.
              </p>
              
              <p>
                Grief and loss come in many shapes and sizes. The process of working 
                through these emotions is an individual one, yet the necessity of 
                walking through the grief, and not simply around it, is universal to 
                healing. At Brightness of Hope Counseling, we understand that navigating 
                through grief and loss can be difficult. With our compassionate assistance, 
                we can help you move forward toward healing.
              </p>
            </div>

            <div className="mt-10">
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Reach Out
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anxiety and Depression Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-5xl font-normal font-amiri text-[#8fa189] mb-4 leading-tight">
              Learn to Embrace Your Strengths and <br />
              Values to Navigate Anxiety, Depression, <br />
              and Stress
            </h2>
            
            <div className="w-16 h-px bg-[#8fa189]/30 mb-8" />
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <p className="font-bold text-gray-900">
                It's important to remember that Anxiety, Depression and Stress 
                are challenges you may face, but they don't define who you are 
                as a person.
              </p>
              
              <p>
                At Brightness of Hope Counseling, we believe that externalizing 
                these challenges while focusing on your inherent strengths and 
                skills, will help you move past these hurdles and start embracing 
                the life you truly desire.
              </p>
              
              <p>
                Our goal is to help you gain a new perspective of your challenges, 
                so you can build on your strengths and feel empowered to take 
                control of your life. Please don't hesitate to contact us. We're here to 
                support you.
              </p>
            </div>

            <div className="mt-10">
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Connect With Us
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] overflow-hidden shadow-sm"
          >
            <img 
              src="/dandelion.jpg" 
              alt="Dandelion seeds blowing in the wind" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Trauma to Triumph Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch">
          
          {/* Left: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative z-0 h-64 md:h-auto"
          >
            <img 
              src="/iron bars.png" 
              alt="Small green sprout growing between rusted iron bars" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Content Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 relative z-10 bg-[#f4f4f4] p-10 md:p-16 shadow-2xl
                      -mt-8 md:mt-0 md:-ml-8"
          >
            <h2 className="text-4xl md:text-5xl font-normal font-amiri text-[#8fa189] mb-8 leading-tight">
              From Trauma to Triumph
            </h2>
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg mb-10">
              <p className="font-bold text-gray-900">
                Experiencing trauma can leave you feeling like your 
                life is out of control. However, at Brightness of Hope 
                Counseling, we believe that utilizing your values and 
                strengths, to guide your goals, will help you heal 
                and realize post traumatic growth, advancing 
                toward the future that you choose.
              </p>
              
              <p>
                Our approach is focused on helping you recognize your 
                values and strengths, providing you the resources to 
                overcome the adverse effects of trauma and actually 
                grow from past painful experiences to realize the 
                future you choose. If you're ready to take the first step 
                toward healing and growth, please contact us to 
                schedule an appointment.
              </p>
            </div>

            <div>
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Schedule Appointment
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Honoring the Journey Section */}
      <section className="relative w-full py-24 px-6 overflow-hidden min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/bird hand.jpg')" }}
        />
          {/* Subtle overlay to improve text readability */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#6d4127] mb-2 font-montserrat">
              Finding Hope and Healing
            </h2>
            <h3 className="text-2xl md:text-3xl font-light text-[#a67c52] mb-4">
              Grief Counseling and Therapy
            </h3>
            
            <div className="w-16 h-px bg-[#a67c52]/50 mb-10" />

            <div className="max-w-3xl">
              <h4 className="text-2xl md:text-3xl font-normal text-gray-800 mb-6 font-amiri">
                Honoring the Journey toward Healing
              </h4>
              
              <div className="space-y-6 text-gray-800 leading-relaxed font-normal text-lg mb-10">
                <p>
                  Losing a loved one due to death or divorce can be one of the most 
                  challenging experiences in life, and it can leave individuals feeling 
                  overwhelmed and alone. At Brightness of Hope Counseling, we understand 
                  the pain and grief that can come with loss, and we are 
                  here to provide compassionate support and guidance.
                </p>
                
                <p>
                  Our grief counseling services aim to help individuals process their emotions, 
                  learn coping strategies, and find hope and healing amid their grief. Our 
                  licensed therapist uses evidence-based approaches to address the unique 
                  needs of each client, allowing them to feel heard and understood. If you 
                  are struggling with the loss of a loved one, we are here to help you 
                  find your way forward.
                </p>
              </div>

              <button className="bg-white border border-gray-200 text-[#8fa189] px-10 py-3 rounded-full font-bold hover:bg-gray-50 transition-all shadow-lg">
                Connect With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Healing and Moving Forward Section */}
      <section className="w-full grid md:grid-cols-2 bg-white">
        
        {/* Left Column: Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[500px] h-full"
        >
          <img 
            src="/red flower field.jpg" 
            alt="Sunlight breaking through clouds over a field of red poppies" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#f2f2f2] p-12 md:p-20 flex flex-col justify-center"
        >
          <h2 className="text-3xl md:text-4xl font-normal font-amiri text-[#8fa189] leading-tight mb-2">
            Healing and Moving Forward:
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-[#8fa189] mb-4">
            Loss Counseling and Therapy
          </h3>
          
          <div className="w-16 h-px bg-[#8fa189]/40 mb-8" />
          
          <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg mb-12">
            <p>
              Loss can come in many forms and can be a difficult and 
              painful experience to navigate through. At Brightness of 
              Hope Counseling, we offer loss counseling to provide a 
              safe and compassionate space for you to process and 
              work through your feelings of grief, sadness, and 
              emptiness.
            </p>
            
            <p>
              Our licensed therapist understands that loss can be a 
              heartbreaking experience that can impact every aspect 
              of your life. We will work with you to develop a 
              personalized treatment plan that addresses your unique 
              needs and supports healing while helping you develop 
              the skills and tools you need to move forward. We are 
              committed to helping you find hope and healing as you 
              journey through the complexities of loss.
            </p>
          </div>

          <div>
            <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
              Ready to Start?
            </button>
          </div>
        </motion.div>
      </section>

      {/* Reclaiming Your Life Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-normal font-amiri text-[#8fa189] leading-tight mb-2">
              Reclaiming your life: Trauma <br />
              Counseling and Therapy
            </h2>
            
            <div className="w-16 h-px bg-[#8fa189]/30 mb-8" />
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <h4 className="text-2xl font-normal text-gray-900 font-amiri">
                Overcoming and Building Resilience
              </h4>
              
              <p>
                Trauma can have a profound impact on an individual's life, leaving 
                them feeling helpless and overwhelmed. At Brightness of Hope 
                Counseling, we offer trauma counseling to provide a safe and 
                supportive environment for you to process your emotions and 
                experiences. Our licensed therapist is trained in evidence-based 
                therapies to help you build resilience and overcome the effects of 
                trauma.
              </p>
              
              <p>
                We understand that every individual's journey toward healing is 
                unique, and we will work with you to develop a personalized 
                treatment plan that addresses your specific needs and concerns. 
                Our goal is to help you develop the tools and skills you need to 
                move forward, build resiliency and reclaim your life. We believe that 
                everyone has the potential for growth and healing, and we are 
                committed to supporting you everystep of the way.
              </p>
            </div>

            <div className="mt-10">
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Connect With Us
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] overflow-hidden"
          >
            <img 
              src="/purple plant.jpg" 
              alt="Close up of purple flowers with water droplets on green grass" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Depression Counseling Section */}
      <section className="w-full bg-[#f9f9f9] py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] overflow-hidden shadow-sm"
          >
            <img 
              src="/sprout.jpg" 
              alt="A small green sprout emerging from soil in warm sunlight" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-normal font-amiri text-[#8fa189] leading-tight mb-2">
              Finding the Light Within: <br />
              Depression Counseling & Therapy
            </h2>
            
            <div className="w-16 h-px bg-[#8fa189]/30 mb-8" />
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <h4 className="text-2xl font-bold text-gray-900">
                Regaining Control and Finding Hope
              </h4>
              
              <p>
                Depression can make you feel like you're stuck in a dark place, but you 
                don't have to stay there alone. At Brightness of Hope Counseling, we 
                offer depression counseling to help you regain control, to find hope and 
                purpose in your life again. Our licensed therapist is experienced in 
                evidence-based approaches to help you address depression and 
                develop effective coping strategies.
              </p>
              
              <p>
                We understand that depression can impact every aspect of your life, 
                from your relationships, to your work and personal goals. We strive to 
                help you identify and overcome the obstacles that are keeping you from 
                living the life you desire. With our support, you can learn skills to 
                manage your symptoms, and find hope for a brighter future.
              </p>
            </div>

            <div className="mt-10">
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Get Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anxiety Counseling Section */}
      <section className="relative w-full py-24 px-6 overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/wheat.jpg" 
            alt="Close up of wheat stalks at sunset" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center text-white">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-1"
          >
            <h2 className="text-3xl md:text-4xl font-normal font-amiri text-gray-800 leading-tight mb-2">
              Embracing Calm & Peace <br />
              <span className="text-3xl font-light">Anxiety Counseling & Therapy</span>
            </h2>
            
            <div className="w-16 h-px bg-gray-400 mb-8" />
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <h4 className="text-2xl md:text-3xl font-normal text-gray-800 mb-6 font-amiri">
                Managing Emotions and Finding Peace
              </h4>
              
              <p>
                Anxiety can be overwhelming and make it difficult to enjoy life or 
                achieve your goals. At Brightness of Hope Counseling, we offer 
                anxiety therapy counseling to help you find calm and confidence in 
                the face of anxiety. Our licensed therapist is experienced in evidence-based 
                approaches to help you move away from the limitations of anxiety 
                toward a value rich life.
              </p>
              
              <p>
                We understand that anxiety can impact every aspect of your life, from 
                your relationships to your work and personal goals. Our goal is to help you 
                develop effective coping strategies so you can move towards what matters 
                most. With our support, you can learn to engage and live a fulfilling life.
              </p>
            </div>

            <div className="mt-10">
              <button className="bg-white border border-gray-200 text-[#8fa189] px-10 py-3 rounded-full font-bold hover:bg-gray-50 transition-all shadow-lg">
                Let Us Help You
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discovering Healthy Ways to Cope Section */}
      <section className="w-full bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-normal font-amiri text-[#8fa189] leading-tight mb-2">
              Discovering Healthy Ways to Cope: <br />
              Stress Counseling & Therapy
            </h2>
            
            <div className="w-16 h-px bg-[#8fa189]/30 mb-8" />
            
            <div className="space-y-6 text-gray-700 leading-relaxed font-light text-lg">
              <h4 className="text-2xl font-normal text-gray-900 font-amiri">
                Positive Approaches to Family Caregiver Support and Other Life's Demands
              </h4>
              
              <p>
                Stress is a normal part of life, but when it becomes overwhelming, it can hurt your mental health and 
                well-being. At Brightness of Hope Counseling, we offer stress counseling to help you cope with life's 
                demands and build resilience. Our licensed therapist is trained in evidence-based therapies to help 
                you identify the sources of your stress and develop effective coping strategies.
              </p>
              
              <p>
                We work with you to create a personalized plan that fits your needs and lifestyle, so you can manage 
                your stress and gain more balance in your life. Our goal is to provide a safe and non-judgmental 
                environment where you can discuss your concerns and work towards your goals. With our support, 
                you can learn to manage your stress, build resilience, and find a sense of balance and calm in your 
                daily life.
              </p>
            </div>

            <div className="mt-10">
              <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-10 py-3 rounded-full font-medium transition-colors shadow-md">
                Reach Out
              </button>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] overflow-hidden"
          >
            <img 
              src="/blue buds.jpg" 
              alt="Small purple wildflowers in a sunlit green field" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing and Policy Section */}
      <section className="relative w-full py-24 overflow-hidden min-h-[600px] flex items-center" id="price-and-policy">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/thistles.jpg" 
            alt="Close up of purple thistles in a field" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 bg-black/40 backdrop-blur-sm p-8 md:p-16 text-white"
          >
            <h2 className="text-4xl md:text-5xl font-normal font-amiri mb-4">
              Pricing and Policy
            </h2>
            
            <div className="w-16 h-px bg-white/50 mb-10" />

            <div className="space-y-8 font-light">
              {/* Insurance */}
              <div>
                <h4 className="text-xl font-bold mb-2">Insurance</h4>
                <p className="leading-relaxed">
                  Provider for <span className="font-bold">most insurance companies</span> through our partnership with 
                  SonderMind and am happy to bill your insurance for you.
                </p>
                <p className="mt-4 italic">Approved <span className="font-bold">Kaiser</span> Provider.</p>
                <p className="mt-2 italic">Approved <span className="font-bold">Medicaid</span> Provider for certain plans. Call for more details.</p>
              </div>

              {/* Canceling Appointments */}
              <div>
                <h4 className="text-xl font-bold mb-2">Canceling appointments</h4>
                <p className="leading-relaxed">
                  The time scheduled for your appointment is <span className="font-bold">assigned to you and you 
                  alone.</span> If you have to cancel an appointment please give a <span className="font-bold">48-hour 
                  notice.</span>
                </p>
              </div>

              {/* Confidentiality */}
              <div>
                <h4 className="text-xl font-bold mb-2">Confidentiality</h4>
                <p className="leading-relaxed">
                  Confidentiality is an <span className="font-bold">absolute</span> on my part and is honored as such.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <button className="bg-white text-gray-800 hover:bg-gray-100 px-10 py-3 rounded-full font-bold transition-all shadow-lg">
                Let Us Help You
              </button>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Blogs Section */}
      <section className="w-full bg-white py-24 px-6" id="blogs">
        <div className="max-w-6xl mx-auto text-center">
          
          <h2 className="text-4xl font-normal font-amiri text-[#8fa189] mb-12">
            Blogs
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Blog Card 1: ACT */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/stump 1.jpg" 
                  alt="Small sprout growing in the center of a tree stump" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-gray-600 font-medium text-lg font-amiri">
                  What is Acceptance Commitment Therapy (ACT)?
                </h3>
              </div>
            </motion.div>

            {/* Blog Card 2: Stress Management */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100 flex flex-col"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="/seedling.jpg" 
                  alt="A seedling growing in a potting starter" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-gray-600 font-medium text-lg font-amiri">
                  Stress Management
                </h3>
              </div>
            </motion.div>

          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#8fa189] hover:bg-[#7d8f77] text-white px-12 py-3 rounded-full font-medium transition-colors shadow-md">
              View All Blogs
            </button>
          </motion.div>
        </div>
      </section>

      <FAQSection />

    </main>
    <SiteFooter />
    </div>
  );
}