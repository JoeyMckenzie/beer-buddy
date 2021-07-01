import { FC, useEffect, useState } from 'react';
import { PageHeader } from '@components';
import { Box, Center, Flex, Spinner } from '@chakra-ui/react';
import { BeerSearch, useGetBeersQuery } from '@beer-buddy-nx/features/beers';
import { BeerSearchResults } from '@beer-buddy-nx/features/beers';

const Beers: FC = () => {
  // TODO: This is causing Next to warn about running layout effects while in SSG mode
  // This needs to be updated for `useEffect()`: https://github.com/reduxjs/redux-toolkit/blob/8565fc25803beedc1032d67473c6b448da588405/packages/toolkit/src/query/react/buildHooks.ts#L660
  // Issue: https://github.com/reduxjs/redux-toolkit/issues/1173
  const { isLoading } = useGetBeersQuery();

  return (
    <Box>
      <PageHeader
        title="Beers"
        tagLine="Search our extensive database for any beer imaginable... yes, we even
          have Coors Light."
      />
      <Flex direction={'column'} gridGap={16} justifyContent={'center'}>
        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}

        {!isLoading && (
          <>
            <BeerSearch />
            <BeerSearchResults />
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Beers;
