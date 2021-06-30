import { FC, useEffect } from 'react';
import { PageHeader } from '@components';
import { useGetBeerQuery, useGetBeersQuery } from '@beer-buddy-nx/shared';

const Beers: FC = () => {
  const { data, error, isError, isFetching, isLoading, isSuccess } =
    useGetBeersQuery();

  useEffect(() => {}, []);

  return (
    <PageHeader
      title="Beers"
      subtitle="All the beers, all the hops."
      tagLine="Search our extensive database for any beer imaginable... yes, we even
        have Coors Light."
    />
  );
};

export default Beers;
