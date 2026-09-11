'use client';

import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';
import LanguageSwitcher from './LanguageSwitcher';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations('Navigation');

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t('openMenu')}
        aria-expanded={isOpen}
        className="flex items-center justify-center rounded-lg border p-2"
      >
        <Menu size={22} />
      </button>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label={t('closeMenu')}
            onClick={closeMenu}
            className="fixed inset-0 z-40 bg-black/40"
          />

          <div className="fixed inset-y-0 end-0 z-50 w-72 bg-background p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold">
                Our Agency
              </span>

              <button
                type="button"
                onClick={closeMenu}
                aria-label={t('closeMenu')}
                className="rounded-lg border p-2"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mt-10 flex flex-col gap-6 text-start">
              <Link
                href="/"
                onClick={closeMenu}
                className="text-base font-medium"
              >
                {t('home')}
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="text-base font-medium"
              >
                {t('about')}
              </Link>

              <Link
                href="/services"
                onClick={closeMenu}
                className="text-base font-medium"
              >
                {t('services')}
              </Link>

              <Link
                href="/blog"
                onClick={closeMenu}
                className="text-base font-medium"
              >
                {t('blog')}
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="text-base font-medium"
              >
                {t('contact')}
              </Link>
            </nav>

            <div className="mt-10 border-t pt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </>
      )}
    </div>
  );
}