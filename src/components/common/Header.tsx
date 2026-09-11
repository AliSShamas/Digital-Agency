import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Our Agency
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm hover:underline">
              {t('home')}
            </Link>

            <Link href="/about" className="text-sm hover:underline">
              {t('about')}
            </Link>

            <Link href="/services" className="text-sm hover:underline">
              {t('services')}
            </Link>

            <Link href="/blog" className="text-sm hover:underline">
              {t('blog')}
            </Link>

            <Link href="/contact" className="text-sm hover:underline">
              {t('contact')}
            </Link>
          </nav>

          <LanguageSwitcher />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}