import { FC, useEffect } from 'react';
import { PageHeader } from '@components';
import { Box, Center, Flex, Spinner } from '@chakra-ui/react';
import { useGetBreweriesQuery } from '@beer-buddy-nx/features/breweries';

const Breweries: FC = () => {
  // TODO: This is causing Next to warn about running layout effects while in SSG mode
  // This needs to be updated for `useEffect()`: https://github.com/reduxjs/redux-toolkit/blob/8565fc25803beedc1032d67473c6b448da588405/packages/toolkit/src/query/react/buildHooks.ts#L660
  // Issue: https://github.com/reduxjs/redux-toolkit/issues/1173
  const { isLoading, data } = useGetBreweriesQuery();

  return (
    <Box>
      <PageHeader
        title="Breweries"
        tagLine="Interested in visiting a brewery near you? Let's see if we can find the
        one!"
      />
      <Flex direction={'column'} gridGap={16} justifyContent={'center'}>
        {isLoading && (
          <Center>
            <Spinner />
          </Center>
        )}
      </Flex>
    </Box>
  );
};

export default Breweries;
