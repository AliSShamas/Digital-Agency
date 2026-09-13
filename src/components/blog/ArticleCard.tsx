import {useTranslations} from 'next-intl';

import {Link} from '@/i18n/navigation';
import ArticleDate from '@/components/blog/ArticleDate';

import type {BlogArticle} from '@/types/blog';

interface ArticleCardProps {
  article: BlogArticle;
}

export default function ArticleCard({
  article
}: ArticleCardProps) {
  const t = useTranslations('BlogPage');

  return (
    <article className="rounded-xl border p-6">
      <p className="text-sm opacity-60">
        {t(`${article.translationKey}.category`)}
      </p>

      <h2 className="mt-3 text-2xl font-semibold">
        {t(`${article.translationKey}.title`)}
      </h2>

      <p className="mt-3 leading-7 opacity-70">
        {t(`${article.translationKey}.excerpt`)}
      </p>

      <p className="mt-4 text-sm opacity-60">
        <ArticleDate date={article.date} />
      </p>

      <Link
        href={`/blog/${article.slug}`}
        className="mt-6 inline-block text-sm font-semibold hover:underline"
      >
        {t('readMore')}
      </Link>
    </article>
  );
}
