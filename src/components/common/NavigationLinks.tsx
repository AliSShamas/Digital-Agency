'use client';

import {useTranslations} from 'next-intl';

import {
  Link,
  usePathname
} from '@/i18n/navigation';

interface NavigationLinksProps {
  variant?: 'desktop' | 'mobile';
  onNavigate?: () => void;
}

const links = [
  {
    href: '/',
    translationKey: 'home'
  },
  {
    href: '/about',
    translationKey: 'about'
  },
  {
    href: '/services',
    translationKey: 'services'
  },
  {
    href: '/blog',
    translationKey: 'blog'
  },
  {
    href: '/contact',
    translationKey: 'contact'
  }
] as const;

export default function NavigationLinks({
  variant = 'desktop',
  onNavigate
}: NavigationLinksProps) {
  const pathname = usePathname();
  const t = useTranslations('Navigation');

  function isActive(href: string) {
    if (href === '/') {
      return pathname === '/';
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  }

  return (
    <nav
      className={
        variant === 'mobile'
          ? 'flex flex-col gap-6 text-start'
          : 'flex items-center gap-6'
      }
    >
      {links.map((link) => {
        const active = isActive(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={active ? 'page' : undefined}
            className={
              active
                ? 'font-bold underline underline-offset-4'
                : variant === 'mobile'
                  ? 'text-base font-medium'
                  : 'text-sm hover:underline'
            }
          >
            {t(link.translationKey)}
          </Link>
        );
      })}
    </nav>
  );
}