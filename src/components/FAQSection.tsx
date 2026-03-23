import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react'; // Assumes lucide-react is installed

const FAQSection = () => {
  const [activeId, setActiveId] = useState(null);

  const faqs = [
    { id: 1, q: "What Communities Does Brightness of Hope Serve?", a: "We are conveniently located in Windsor, CO and serve all of Northern Colorado including Fort Collins, Loveland, Greeley, Johnstown, Firestone, Longmont and surrounding towns." },
    { id: 2, q: "Why Choose Brightness of Hope Counseling?", a: (
      <>
        Brightness of Hope Counseling is a professional Grief and Loss counseling service dedicated to helping individuals overcome various mental health challenges. Our experienced therapist provides a safe and supportive environment where clients can share their thoughts and feelings without judgment.
        <br /><br />
        
        We offer a range of therapeutic services under the umbrella of Grief and Loss. Anxiety, Depression, Death, Divorce, Family Caregiver Support, Illness, Stress Management and Trauma therapy. Our therapist works closely with clients to identify their strengths and resources, then creates a personalized plan for their unique needs.
        <br /><br />
        
        At Brightness of Hope Counseling, we are committed to companioning with our clients as they work through their individual grief process. Contact us today to schedule an appointment with our qualified and skilled grief therapist.
      </>
    ) },
    { id: 3, q: "How can I schedule an appointment with Brightness of Hope Counseling?", a: "Scheduling an appointment with Brightness of Hope Counseling is easy. You can either call us directly at 970-232-1999 or fill out the contact form on our website to request an appointment. Our team will work with you to find a time that works best." },
    { id: 4, q: "What types of therapy does Brightness of Hope Counseling offer?", a: "Brightness of Hope Counseling offers a range of evidence based therapeutic services to address a variety of mental health concerns. They include Acceptance Commitment Therapy, Cognitive Behavior Therapy, Strengths-Based and Solution Focused Therapy. We tailor our approach to each individual's unique needs and work collaboratively with our clients to help them achieve their goals." },
    { id: 5, q: "Do you offer online treatment?", a: "At Brightness of Hope Counseling our philosophy is that in-person sessions are the most effective. We are located in Windsor and convenient to many surrounding towns in Northern CO. However, we are able to offer online sessions as needed. Call today to book your next appointment." },
    { id: 6, q: "How can I contact you?", a: "I understand the need for accessibility when dealing with grief and loss. You can email me at susan@brightnessofhopecounseling.com or call me at 970-232-1999. You can also simply contact me through my website's contact form. I look forward to speaking with you soon!" }
  ];

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section className="relative w-full min-h-screen py-24 flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-0">
        <div 
            className="w-full h-full bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('/green mountains.png')" }}
        />
        <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle overall darkening */}
      </div>

      <motion.div 
      layout
      className="relative z-10 max-w-4xl w-full px-6 text-center text-white">
        {/* <div className="relative z-10 max-w-4xl w-full px-6 text-center text-white"> */}
            <h2 className="text-4xl md:text-5xl font-normal font-amiri mb-4">
            Frequently Asked Questions
            </h2>
            <p className="mb-12 font-light text-lg">
            Have questions? We've answered some of our most common inquiries below.
            </p>

            <div className="space-y-3">
            {faqs.map((faq) => (
                <div key={faq.id} className="text-left">
                {/* Question Box */}
                <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center bg-[#8fa189]/90 hover:bg-[#8fa189] transition-colors p-5 rounded-sm group"
                >
                    <span className="text-lg md:text-xl font-light">{faq.q}</span>
                    <ChevronDown 
                    className={`transition-transform duration-300 ${activeId === faq.id ? 'rotate-180' : ''}`} 
                    />
                </button>

                {/* Answer Box (Accordion Content) */}
                <AnimatePresence>
                    {activeId === faq.id && (
                    <motion.div
                        layout
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="bg-black/60 backdrop-blur-sm p-6 text-white text-lg font-light leading-relaxed border-t border-white/10">
                        {faq.a}
                        </div>
                    </motion.div>
                    )}
                </AnimatePresence>
                </div>
            ))}
            </div>
        {/* </div> */}
      </motion.div>
    </section>
  );
};

export default FAQSection;