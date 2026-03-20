"use client";
import { motion } from 'framer-motion';
import ServiceFooter from "../../components/ServiceFooter";

export default function CityContent({ citySlug }) {
  if (!citySlug) return null;

  // Formatting "fort-collins" -> "Fort Collins"
  const cityName = citySlug
    .split('-')
    .map((word:string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return (
    
    <div className="font-montserrat">
      <div className="top-0 left-0 w-full h-24"></div>
      <section
        className="bg-cover bg-center bg-no-repeat px-6 relative flex items-center justify-center h-[60vh]"
        style={{
          backgroundImage: `url('flower field.jpg')`
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-4xl w-full text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl md:text-2xl text-gray-100 leading-relaxed drop-shadow-md"
          >
            Anxiety Counseling and Therapy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg"
          >
            Embracing Calm & Peace
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            What type of therapy works best for anxiety?
          </h2>
          <div className="flex flex-col md:flex-row">
            <p className="text-gray-700 text-lg leading-relaxed m-10">
              It's important to note that the most effective therapy for anxiety often varies depending on the individual's specific circumstances and needs. However, Cognitive Behavioral Therapy (CBT) is widely recognized as one of the most effective treatments for anxiety disorders. CBT works by helping individuals identify and challenge negative thought patterns and behaviors that contribute to their anxiety. It equips them with practical skills to alter these thoughts and behaviors, thereby reducing anxiety symptoms.</p>
              <br/>
            <p className="text-gray-700 text-lg leading-relaxed m-10">
              Additionally, some individuals may also benefit from other therapeutic approaches such as mindfulness-based therapies, which focus on cultivating an awareness of the present moment, and Acceptance and Commitment Therapy (ACT), which combines mindfulness strategies with practices of acceptance. It's also worth noting that in some cases, a combination of therapy and medication can be particularly effective. Ultimately, the best approach is often a personalized one, developed in collaboration with a mental health professional based on an individual's unique situation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-350 shadow-xl">
        {/* <div className="max-w-5xl mx-auto shadow-xl rounded-xl overflow-hidden bg-white"> */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* Left: Image – now with aspect-ratio so it never collapses */}
            <div 
              className="
                w-full 
                md:w-1/2 
                bg-cover bg-center bg-no-repeat
                aspect-[4/3]          /* ← mobile fallback shape – change to taste: 4/3, 3/2, 1/1, 5/4, etc */
                md:aspect-auto        /* desktop: stretch full height of row */
                min-h-[280px]         /* minimum mobile height as safety net */
              "
              style={{ backgroundImage: `url('tulips.jpg')` }}
            />

            {/* Right: Text side */}
            <div className="w-full md:w-1/2 bg-gray-200 px-20 py-20 md:py-16 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">Managing Emotions and Finding Peace</h2>
              <p className="text-gray-700 text-lg mb-8">
                Anxiety can be overwhelming and make it difficult to enjoy life or achieve your goals. At Brightness of Hope Counseling, we offer anxiety counseling to help you find calm and confidence in the face of anxiety. Our licensed therapist is trained in evidence-based therapies to address the unique needs of each client. 
              </p>
              <p className="text-gray-700 text-lg">
                We know that anxiety is frustrating and it can cause more anxiety just by worrying about the anxiety. Let us help you learn skills that will enable mindful, value-based living in a calm and relaxed setting. With our support, you can learn to overcome your anxiety and live a fulfilling life.
              </p>
            </div>
          </div>
      </section>
      <ServiceFooter />
    </div>
  );
}