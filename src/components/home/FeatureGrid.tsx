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
    <section className="border-t px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-60">
            {t('features.eyebrow')}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {t('features.title')}
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.key}
              className="rounded-xl border p-6"
            >
              <h3 className="text-xl font-semibold">
                {t(`features.${feature.key}.title`)}
              </h3>

              <p className="mt-3 leading-7 opacity-70">
                {t(`features.${feature.key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}