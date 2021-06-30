import { FC } from 'react';
import Link from 'next/link';
import { Footer } from '@components';

const Index: FC = () => (
  <div className="relative overflow-hidden">
    <div className="relative pt-6 pb-16 sm:pb-24">
      <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">
              Beer <span className="text-indigo-600">Buddy</span>
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            The internet's most useless beer-based web application!
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link href="/beers">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 md:py-4 md:text-lg md:px-10">
                  To the beers
                </a>
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link href="/breweries">
                <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-gray-50 hover:bg-gray-100 md:py-4 md:text-lg md:px-10">
                  Find a brewery
                </a>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  </div>
);

export default Index;
