import AppHeader from '@/components/dreu/header';
import ImageCarousel from '@/components/dreu/image-carousel';
import InfoCards from '@/components/dreu/info-cards';
import AppFooter from '@/components/dreu/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-transparent">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ImageCarousel />
        <InfoCards />
      </main>
      <AppFooter />
    </div>
  );
}
