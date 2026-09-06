import {useTranslations} from 'next-intl';

import {blogArticles} from '@/data/blog';
import BlogListing from '@/components/blog/BlogListing';

export default function BlogPage() {
  const t = useTranslations('BlogPage');

  return (
    <main>
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider opacity-60">
              {t('eyebrow')}
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-6xl">
              {t('title')}
            </h1>

            <p className="mt-6 text-lg leading-8 opacity-70">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <section className="border-t px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <BlogListing articles={blogArticles} />
        </div>
      </section>
    </main>
  );
}