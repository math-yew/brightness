// src/app/anxiety-counseling/page.tsx
import Navbar from '../../components/Navbar';
import CityContent from './CityContent';

export const metadata = {
  title: 'Anxiety Counseling in Northern Colorado | ACT Therapy',
  description: 'Specialized anxiety counseling and ACT therapy for clients across Northern Colorado.',
};

export default function AnxietyDefaultPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      {/* We pass a specific string or null to indicate it's the general page */}
      <CityContent citySlug="northern-colorado" />
    </main>
  );
}