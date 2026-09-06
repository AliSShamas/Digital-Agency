import ArticleCard from './ArticleCard';

import type {BlogArticle} from '@/types/blog';

interface BlogListingProps {
  articles: BlogArticle[];
}

export default function BlogListing({articles}: BlogListingProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {articles.map((article) => (
        <ArticleCard
          key={article.slug}
          article={article}
        />
      ))}
    </div>
  );
}