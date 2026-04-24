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
  const { city } = await params;
  const displayCity = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  
  return {
    title: `Anxiety Counseling in ${displayCity}, CO | ACT Therapy`,
    description: `Specialized anxiety counseling for residents of ${displayCity}, Colorado.`,
  };
}

export default async function Page({ params }) {
  const { city } = await params;

  return (
    <main className="bg-white min-h-screen">
      {/* Navbar is already in layout.tsx, but if you have it here, keep the import correct */}
      <CityContent citySlug={city} />
    </main>
  );
}