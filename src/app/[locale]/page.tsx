import FeatureGrid from '@/components/home/FeatureGrid';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <Stats />
    </main>
  );
}