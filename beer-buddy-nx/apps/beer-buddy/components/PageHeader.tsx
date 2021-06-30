import { FC } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  tagLine: string;
}

export const PageHeader: FC<PageHeaderProps> = ({
  title,
  subtitle,
  tagLine,
}) => (
  <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base font-semibold text-indigo-600 dark:text-indigo-400 tracking-wide uppercase">
        {title}
      </h2>
      <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:tracking-tight">
        {subtitle}
      </p>
      <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500 dark:text-gray-300">
        {tagLine}
      </p>
    </div>
  </div>
);
