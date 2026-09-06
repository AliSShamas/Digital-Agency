import {useTranslations} from 'next-intl';

const stats = [
  {
    value: '50+',
    key: 'projects',
  },
  {
    value: '20+',
    key: 'clients',
  },
  {
    value: '5+',
    key: 'experience',
  },
  {
    value: '10+',
    key: 'countries',
  },
];

export default function Stats() {
  const t = useTranslations('HomePage');

  return (
    <section className="border-t px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.key}>
              <p className="text-3xl font-bold md:text-4xl">
                {stat.value}
              </p>

              <p className="mt-2 text-sm opacity-60">
                {t(`stats.${stat.key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}