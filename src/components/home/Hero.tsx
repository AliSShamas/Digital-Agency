import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

export default function Hero() {
  const t = useTranslations('HomePage');

  return (
    <section className="relative isolate overflow-hidden bg-stone-50 px-6 py-24 text-stone-950 before:pointer-events-none before:absolute before:-end-32 before:-top-24 before:-z-10 before:size-[32rem] before:rounded-full before:border-[5rem] before:border-indigo-100/70 after:pointer-events-none after:absolute after:-bottom-24 after:end-20 after:-z-10 after:size-72 after:rounded-full after:border after:border-indigo-200/70 md:py-36 dark:bg-stone-950 dark:text-stone-50 dark:before:border-indigo-950/50 dark:after:border-indigo-900/40">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-7 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 before:size-2 before:rounded-full before:bg-indigo-500 dark:text-indigo-400">
            {t('hero.eyebrow')}
          </p>

          <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl lg:text-7xl">
            {t('hero.title')}
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg leading-8 text-stone-600 dark:text-stone-400">
            {t('hero.description')}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-indigo-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/15 transition-colors hover:bg-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              {t('hero.primaryButton')}
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-stone-300 bg-white/60 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-stone-400 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:border-stone-700 dark:bg-stone-900/60 dark:hover:border-stone-500 dark:hover:bg-stone-900"
            >
              {t('hero.secondaryButton')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
