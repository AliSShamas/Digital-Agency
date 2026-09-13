'use client';

import {useEffect, useRef, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {useTranslations} from 'next-intl';

import LanguageSwitcher from './LanguageSwitcher';
import NavigationLinks from './NavigationLinks';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const t = useTranslations('Navigation');

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocusedElement =
      document.activeElement as HTMLElement | null;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const drawer = drawerRef.current;

      if (!drawer) {
        return;
      }

      const focusableElements = drawer.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);

      previouslyFocusedElement?.focus();
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <button
        ref={menuButtonRef}
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={t('openMenu')}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
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

          <div
            ref={drawerRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="fixed inset-y-0 end-0 z-50 w-72 overflow-y-auto bg-background p-6 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span
                id="mobile-navigation-title"
                className="text-lg font-bold"
              >
                {t('brand')}
              </span>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeMenu}
                aria-label={t('closeMenu')}
                className="rounded-lg border p-2"
              >
                <X size={22} />
              </button>
            </div>

            <div className="mt-10">
              <NavigationLinks
                variant="mobile"
                onNavigate={closeMenu}
              />
            </div>

            <div className="mt-10 border-t pt-6">
              <LanguageSwitcher />
            </div>
          </div>
        </>
      )}
    </div>
  );
}