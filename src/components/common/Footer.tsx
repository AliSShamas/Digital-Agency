import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="border-t border-stone-200/70 bg-stone-50 text-stone-950 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-indigo-600 dark:text-indigo-400"
          >
            {t('brand')}
          </Link>

          <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-400">
            {t('description')}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <Link
            href="/"
            className="rounded-md transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:hover:text-indigo-400"
          >
            {t('home')}
          </Link>

          <Link
            href="/about"
            className="rounded-md transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:hover:text-indigo-400"
          >
            {t('about')}
          </Link>

          <Link
            href="/services"
            className="rounded-md transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:hover:text-indigo-400"
          >
            {t('services')}
          </Link>

          <Link
            href="/blog"
            className="rounded-md transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:hover:text-indigo-400"
          >
            {t('blog')}
          </Link>

          <Link
            href="/contact"
            className="rounded-md transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:hover:text-indigo-400"
          >
            {t('contact')}
          </Link>
        </nav>

        <p className="text-sm text-stone-500 dark:text-stone-400">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}