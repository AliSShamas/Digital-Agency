import {useTranslations} from 'next-intl';
import type {Metadata} from 'next';
import {getTranslations} from 'next-intl/server';
import ContactForm from '@/components/common/ContactForm';

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export async function generateMetadata({
  params
}: ContactPageProps): Promise<Metadata> {
  const {locale} = await params;

  const t = await getTranslations({locale, namespace: 'Metadata.contact'});

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        en: '/en/contact',
        ar: '/ar/contact'
      }
    }
  };
}

export default function ContactPage() {
  const t = useTranslations('ContactPage');

  return (
    <main>
      <section className="relative isolate overflow-hidden bg-stone-50 px-6 py-12 text-stone-950 before:pointer-events-none before:absolute before:-end-32 before:-top-24 before:-z-10 before:size-[32rem] before:rounded-full before:border-[5rem] before:border-indigo-100/70 md:py-16 dark:bg-stone-950 dark:text-stone-50 dark:before:border-indigo-950/50">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">
              {t('eyebrow')}
            </p>

            <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
              {t('title')}
            </h1>

            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-stone-600 dark:text-stone-400">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-stone-200/70 bg-white px-6 py-16 md:py-24 dark:border-stone-800 dark:bg-stone-950">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
