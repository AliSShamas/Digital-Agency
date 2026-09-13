import FeatureGrid from '@/components/home/FeatureGrid';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params
}: HomePageProps): Promise<Metadata> {
  const {locale} = await params;

  const t = await getTranslations({locale, namespace: 'Metadata.home'});

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        ar: '/ar'
      }
    }
  };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeatureGrid />
      <Stats />
    </main>
  );
}
