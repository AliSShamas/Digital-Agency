import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('HomePage');

  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-60">
            {t('hero.eyebrow')}
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            {t('hero.title')}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 opacity-70">
            {t('hero.description')}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white hover:opacity-80"
            >
              {t('hero.primaryButton')}
            </Link>

            <Link
              href="/services"
              className="rounded-lg border px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white"
            >
              {t('hero.secondaryButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}