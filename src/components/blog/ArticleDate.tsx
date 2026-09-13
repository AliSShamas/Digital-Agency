import {useFormatter} from 'next-intl';

interface ArticleDateProps {
  date: string;
}

export default function ArticleDate({
  date
}: ArticleDateProps) {
  const format = useFormatter();

  const parsedDate = new Date(`${date}T00:00:00Z`);

  return (
    <time dateTime={date}>
      {format.dateTime(parsedDate, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
      })}
    </time>
  );
}