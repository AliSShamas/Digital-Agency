import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';
import MobileMenu from './MobileMenu';
import NavigationLinks from './NavigationLinks';

export default function Header() {
  const t = useTranslations('Navigation');

  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          {t('brand')}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavigationLinks />

          <LanguageSwitcher />
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}