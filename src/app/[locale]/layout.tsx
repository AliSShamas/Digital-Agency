import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';

import {routing} from '../../i18n/routing';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

import '@/app/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'
  )
};

type Props = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}