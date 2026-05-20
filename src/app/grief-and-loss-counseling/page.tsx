import Navbar from '../../components/Navbar';
import GriefAndLossCounselingContent from './../../components/GriefAndLossCounselingContent';

export const metadata = {
  title: 'Anxiety Counseling in Northern Colorado | ACT Therapy',
  description: 'Specialized anxiety counseling and ACT therapy for clients across Northern Colorado.',
};

export default function AnxietyDefaultPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <GriefAndLossCounselingContent citySlug="northern-colorado" />
    </main>
  );
}