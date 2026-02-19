// src/app/anxiety-counseling/[city]/page.tsx
import Navbar from '../../../components/Navbar';
import CityContent from './CityContent';

export async function generateStaticParams() {
  return [
    { city: 'windsor' },
    { city: 'greeley' },
    { city: 'fort-collins' },
    { city: 'loveland' },
  ];
}

export async function generateMetadata({ params }) {
  // Await params here too!
  const { city } = await params; 
  const displayCity = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return {
    title: `Anxiety Counseling in ${displayCity}, CO | ACT Therapy`,
    description: `Specialized anxiety counseling for residents of ${displayCity}, Colorado.`,
  };
}

export default async function Page({ params }) {
  // 1. Await the params
  const { city } = await params;

  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      {/* 2. Pass the awaited city string */}
      <CityContent citySlug={city} />
    </main>
  );
}