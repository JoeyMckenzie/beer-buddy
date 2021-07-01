import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  HStack,
} from '@chakra-ui/react';
import { FC, useEffect } from 'react';
import { IoBeer } from 'react-icons/io5';
import Link from 'next/link';

const Index: FC = () => {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={12}
      >
        <Heading fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}>
          <HStack>
            <Text as={'span'}>Beer</Text>
            <IoBeer />
            <Text as={'span'} color={'orange.400'}>
              Buddy
            </Text>
          </HStack>
        </Heading>
        <Text maxW={'3xl'}>
          The internet's most useless beer-based web application.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Link href={'/beers'}>
            <Button
              as={'a'}
              cursor={'pointer'}
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}
            >
              Beers
            </Button>
          </Link>
          <Link href={'/breweries'}>
            <Button cursor={'pointer'} as={'a'} rounded={'full'} px={6}>
              Breweries
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
