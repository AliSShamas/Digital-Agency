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
    <section className="border-t border-stone-200/70 bg-stone-100/70 px-6 py-16 text-stone-950 md:py-20 dark:border-stone-800 dark:bg-stone-900/60 dark:text-stone-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-10">
          {stats.map((stat) => (
            <div key={stat.key} className="border-s-2 border-indigo-500/30 ps-5 md:ps-7">
              <p className="text-4xl font-bold tracking-tight tabular-nums md:text-5xl">
                {stat.value}
              </p>

              <p className="mt-3 text-sm font-medium leading-6 text-stone-600 dark:text-stone-400">
                {t(`stats.${stat.key}`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
