import { CITIES, formatCityName } from '../../../lib/cities';
import CareGiversContent from '../../../components/CareGiversContent';


export async function generateStaticParams() {
  return CITIES;
}

export async function generateMetadata({ params }) {
  const { city } = await params;
  const displayCity = formatCityName(city);
  
  return {
    title: `Care Givers Support in ${displayCity}, CO | ACT Therapy`,
    description: `Specialized support for care givers in ${displayCity}. Find balance and resilience through ACT therapy.`,
  };
}

export default async function CareGiversCityPage({ params }) {
  const { city } = await params;
  return <CareGiversContent citySlug={city} />;
}