/* This example requires Tailwind CSS v2.0+ */
import { FC } from 'react';
import { ThemeToggle } from './ThemeToggle';
import Link from 'next/link';

interface NavLink {
  name: string;
  href: string;
}

interface SocialHeroiconLink extends NavLink {
  icon: (additionalProps: any) => JSX.Element;
}

const navLinks: NavLink[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Beers',
    href: '/beers',
  },
  {
    name: 'Breweries',
    href: '/breweries',
  },
];

const socialLinks: SocialHeroiconLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/JoeyMckenzie/beer-buddy',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/in/JoeyMckenzie',
    icon: (props) => (
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Resume',
    href: 'https://joeymckenzie.io/assets/JoeyMcKenzieResume.pdf',
    icon: (props) => (
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
        />
      </svg>
    ),
  },
];

export const Footer: FC = () => (
  <footer>
    <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden flex flex-col items-center sm:px-6 lg:px-8">
      <nav
        className="-mx-5 -my-2 flex flex-wrap justify-center"
        aria-label="Footer"
      >
        {navLinks.map((item) => (
          <div key={item.name} className="px-5 py-2">
            <Link href={item.href}>
              <a
                href={item.href}
                className="text-base text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-4`00"
              >
                {item.name}
              </a>
            </Link>
          </div>
        ))}
      </nav>
      <div className="mt-8 flex justify-center space-x-6">
        {socialLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            <a
              key={item.name}
              className="text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          </Link>
        ))}
        <ThemeToggle />
      </div>
      <p className="mt-8 text-center text-base text-gray-400">
        &copy; 2021 Beer Buddy, Inc. All rights reserved.
      </p>
    </div>
  </footer>
);
