import { FC } from 'react';

const Beer: FC = () => (
  <div className="bg-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
          Beers
        </h2>
        <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:tracking-tight">
          All the beers, all the hops.
        </p>
        <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">
          Search our extensive database for any beer imaginable... yes, we even
          have Coors Light.
        </p>
      </div>
    </div>
  </div>
);

export default Beer;
