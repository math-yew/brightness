import Navbar from '../../components/Navbar';
import StressCounseling from './../../components/StressCounseling';

export const metadata = {
  title: 'Anxiety Counseling in Northern Colorado | ACT Therapy',
  description: 'Specialized anxiety counseling and ACT therapy for clients across Northern Colorado.',
};

export default function AnxietyDefaultPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />
      <StressCounseling citySlug="northern-colorado" />
    </main>
  );
}