import { CITIES, formatCityName } from '../../../lib/cities';
import AnxietyCounselingContent from '../../../components/AnxietyCounselingContent';
import Navbar from '../../../components/Navbar'; 

export async function generateStaticParams() {
  return CITIES;
}

export async function generateMetadata({ params }: any) {
  const { city } = await params;
  const displayCity = formatCityName(city);
  
  return {
    title: `Anxiety Counseling in ${displayCity}, CO | ACT Therapy`,
    description: `Specialized anxiety counseling for residents of ${displayCity}, Colorado.`,
  };
}

export default async function AnxietyCounselingCityPage({ params }: any) {
  const { city } = await params;
  return <AnxietyCounselingContent citySlug={city} />;
}