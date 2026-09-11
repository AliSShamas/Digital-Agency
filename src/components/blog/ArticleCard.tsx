import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/navigation';

import type {BlogArticle} from '@/types/blog';

interface ArticleCardProps {
  article: BlogArticle;
}

export default function ArticleCard({article}: ArticleCardProps) {
  const t = useTranslations('BlogPage');

  return (
    <article className="flex h-full flex-col rounded-2xl border border-stone-200 bg-stone-50/70 p-8 text-stone-950 dark:border-stone-800 dark:bg-stone-900/50 dark:text-stone-50">
      <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-400">
        {t(`${article.translationKey}.category`)}
      </p>

      <h2 className="mt-5 text-balance text-2xl font-semibold tracking-tight">
        {t(`${article.translationKey}.title`)}
      </h2>

      <p className="mt-4 flex-1 text-pretty leading-7 text-stone-600 dark:text-stone-400">
        {t(`${article.translationKey}.excerpt`)}
      </p>

      <p className="mt-6 text-sm text-stone-500 dark:text-stone-400">
        {article.date}
      </p>

      <Link
        href={`/blog/${article.slug}`}
        className="mt-6 inline-flex min-h-11 items-center self-start rounded-full border border-indigo-200 bg-indigo-50 px-5 py-2.5 text-sm font-semibold text-indigo-700 transition-colors hover:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-500 dark:border-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 dark:hover:bg-indigo-900"
      >
        {t('readMore')}
      </Link>
    </article>
  );
}
