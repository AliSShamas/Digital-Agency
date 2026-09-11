import {useTranslations} from 'next-intl';

const features = [
  {
    key: 'strategy',
  },
  {
    key: 'design',
  },
  {
    key: 'development',
  },
];

export default function FeatureGrid() {
  const t = useTranslations('HomePage');

  return (
    <section className="border-t border-stone-200/70 bg-white px-6 py-20 text-stone-950 md:py-28 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-50">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">
            {t('features.eyebrow')}
          </p>

          <h2 className="mt-4 text-balance text-3xl font-bold leading-tight tracking-tight md:text-5xl">
            {t('features.title')}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.key}
              className="rounded-2xl border border-stone-200 bg-stone-50/70 p-8 before:mb-8 before:block before:h-1 before:w-10 before:rounded-full before:bg-indigo-500 md:p-9 dark:border-stone-800 dark:bg-stone-900/50"
            >
              <h3 className="text-2xl font-semibold tracking-tight">
                {t(`features.${feature.key}.title`)}
              </h3>

              <p className="mt-4 text-pretty leading-7 text-stone-600 dark:text-stone-400">
                {t(`features.${feature.key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
