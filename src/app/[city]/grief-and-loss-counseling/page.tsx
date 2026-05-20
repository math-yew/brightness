import { CITIES, formatCityName } from '../../../lib/cities';
import GriefAndLossCounselingContent from '../../../components/GriefAndLossCounselingContent';

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

export default async function GriefAndLossCounselingCityPage({ params }: any) {
  const { city } = await params;
  return <GriefAndLossCounselingContent citySlug={city} />;
}