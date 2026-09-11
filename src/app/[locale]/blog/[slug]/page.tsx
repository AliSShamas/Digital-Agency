import {hasLocale, useTranslations} from 'next-intl';
import {notFound} from 'next/navigation';

import {blogArticles} from '@/data/blog';
import {routing} from '@/i18n/routing';

interface BlogArticlePageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
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

  return <ArticleContent translationKey={article.translationKey} />;
}

interface ArticleContentProps {
  translationKey: string;
}

function ArticleContent({
  translationKey
}: ArticleContentProps) {
  const t = useTranslations('BlogPage');

  return (
    <main>
      <article className="relative isolate overflow-hidden bg-stone-50 px-6 py-24 text-stone-950 before:pointer-events-none before:absolute before:-end-32 before:-top-24 before:-z-10 before:size-[32rem] before:rounded-full before:border-[5rem] before:border-indigo-100/70 md:py-32 dark:bg-stone-950 dark:text-stone-50 dark:before:border-indigo-950/50">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">
            {t(`${translationKey}.category`)}
          </p>

          <h1 className="mt-4 text-balance text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-5xl md:text-6xl">
            {t(`${translationKey}.title`)}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-stone-600 dark:text-stone-400">
            {t(`${translationKey}.excerpt`)}
          </p>

          <div className="mt-12 space-y-6 border-t border-stone-200 pt-10 text-base leading-8 text-stone-700 md:text-lg dark:border-stone-800 dark:text-stone-300">
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