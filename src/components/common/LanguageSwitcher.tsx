'use client';

import {useLocale} from 'next-intl';
import {Link, usePathname} from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 text-sm">
      <Link
        href={pathname}
        locale="en"
        className={locale === 'en' ? 'font-bold' : 'opacity-60'}
      >
        English
      </Link>

      <span>/</span>

      <Link
        href={pathname}
        locale="ar"
        className={locale === 'ar' ? 'font-bold' : 'opacity-60'}
      >
        العربية
      </Link>
    </div>
  );
}