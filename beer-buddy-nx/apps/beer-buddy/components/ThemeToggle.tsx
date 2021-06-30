import { FC, useState } from 'react';
import { Switch } from '@headlessui/react';
import { classNames, isNullOrUndefined } from '@beer-buddy-nx/shared';

export const ThemeToggle: FC = () => {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  /**
   * Updates the body tag class list so we can dynamically apply Tailwind dark mode
   */
  const toggleDarkMode = () => {
    const bodyTag: HTMLCollection = document.getElementsByTagName('body');

    if (isNullOrUndefined(bodyTag) || bodyTag.length !== 1) {
      return;
    }

    const classList = bodyTag[0].classList;

    if (darkModeEnabled) {
      classList.remove('dark');
      setDarkModeEnabled(false);
    } else {
      classList.add('dark');
      setDarkModeEnabled(true);
    }
  };

  return (
    <Switch
      checked={darkModeEnabled}
      onChange={toggleDarkMode}
      className={classNames(
        darkModeEnabled ? 'bg-indigo-500' : 'bg-gray-200',
        'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          darkModeEnabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
        )}
      >
        <span
          className={classNames(
            darkModeEnabled
              ? 'opacity-0 ease-out duration-100'
              : 'opacity-100 ease-in duration-200',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-indigo-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </span>
        <span
          className={classNames(
            darkModeEnabled
              ? 'opacity-100 ease-in duration-200'
              : 'opacity-0 ease-out duration-100',
            'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
          <svg
            className="h-3 w-3 text-indigo-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </span>
      </span>
    </Switch>
  );
};
