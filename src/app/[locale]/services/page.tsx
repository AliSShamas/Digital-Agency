import type {Metadata} from 'next';
import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';

interface ServicesPageProps {
  params: Promise<{
    locale: string;
  }>;
}

const services = [
  {key: 'strategy'},
  {key: 'design'},
  {key: 'development'}
];

export async function generateMetadata({
  params
}: ServicesPageProps): Promise<Metadata> {
  const {locale} = await params;

  const t = await getTranslations('Metadata.services');

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        en: '/en/services',
        ar: '/ar/services'
      }
    }
  };
}

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');

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
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.key}
              className="rounded-xl border p-6"
            >
              <h2 className="text-xl font-semibold">
                {t(`${service.key}.title`)}
              </h2>

              <p className="mt-3 leading-7 opacity-70">
                {t(`${service.key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}