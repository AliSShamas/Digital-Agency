import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

interface AboutPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params
}: AboutPageProps): Promise<Metadata> {
  const {locale} = await params;

  const t = await getTranslations('Metadata.about');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: '/en/about',
        ar: '/ar/about'
      }
    }
  };
}

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-stone-50 px-6 py-24 text-stone-950 before:pointer-events-none before:absolute before:-end-32 before:-top-24 before:-z-10 before:size-[32rem] before:rounded-full before:border-[5rem] before:border-indigo-100/70 md:py-32 dark:bg-stone-950 dark:text-stone-50 dark:before:border-indigo-950/50">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-60">
            {t('eyebrow')}
          </p>

          <h1 className="mt-4 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            {t('title')}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 opacity-70">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold">
            {t('missionTitle')}
          </h2>

          <p className="mt-6 max-w-3xl leading-8 opacity-70">
            {t('mission')}
          </p>
        </div>
      </section>
    </main>
  );
}