import type {Metadata} from 'next';
import {hasLocale, useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';

import {blogArticles} from '@/data/blog';
import {routing} from '@/i18n/routing';
import ArticleDate from '@/components/blog/ArticleDate';

interface BlogArticlePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogArticles.map((article) => ({
      locale,
      slug: article.slug
    }))
  );
}

export async function generateMetadata({
  params
}: BlogArticlePageProps): Promise<Metadata> {
  const {locale, slug} = await params;

  const article = blogArticles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: 'BlogPage'
  });

  return {
    title: t(`${article.translationKey}.title`),
    description: t(`${article.translationKey}.excerpt`),

    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        ar: `/ar/blog/${slug}`
      }
    }
  };
}

export default async function BlogArticlePage({
  params
}: BlogArticlePageProps) {
  const {locale, slug} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const article = blogArticles.find(
    (article) => article.slug === slug
  );

  if (!article) {
    notFound();
  }

  return (
    <ArticleContent
      translationKey={article.translationKey}
      date={article.date}
    />
  );
}

interface ArticleContentProps {
  translationKey: string;
  date: string;
}

function ArticleContent({
  translationKey,
  date
}: ArticleContentProps) {
  const t = useTranslations('BlogPage');

  return (
    <main>
      <article className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider opacity-60">
            {t(`${translationKey}.category`)}
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            {t(`${translationKey}.title`)}
          </h1>

          <p className="mt-4 text-sm opacity-60">
            <ArticleDate date={date} />
          </p>

          <p className="mt-6 text-lg leading-8 opacity-70">
            {t(`${translationKey}.excerpt`)}
          </p>

          <div className="mt-12 space-y-6 leading-8">
            <p>
              {t(`${translationKey}.content.paragraph1`)}
            </p>

            <p>
              {t(`${translationKey}.content.paragraph2`)}
            </p>

            <p>
              {t(`${translationKey}.content.paragraph3`)}
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}