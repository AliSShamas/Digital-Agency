'use client';

import {useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex shrink-0 items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm dark:border-stone-700 dark:bg-stone-900">
      <Link
        href={pathname}
        locale="en"
        className={locale === 'en' ? 'rounded-sm font-semibold text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-indigo-400' : 'rounded-sm text-stone-500 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-stone-400 dark:hover:text-indigo-300'}
      >
        English
      </Link>

      <span>/</span>

      <Link
        href={pathname}
        locale="ar"
        className={locale === 'ar' ? 'rounded-sm font-semibold text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-indigo-400' : 'rounded-sm text-stone-500 transition-colors hover:text-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:text-stone-400 dark:hover:text-indigo-300'}
      >
        العربية
      </Link>
    </div>
  );
}