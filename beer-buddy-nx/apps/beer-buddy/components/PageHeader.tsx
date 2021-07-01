import { Box, Heading, Container, Text, Stack } from '@chakra-ui/react';
import { FC } from 'react';

interface PageHeaderProps {
  title: string;
  tagLine: string;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, tagLine }) => {
  return (
    <Container maxW={'3xl'}>
      <Stack as={Box} textAlign={'center'} spacing={4} py={20}>
        <Heading fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}>
          {title}
        </Heading>
        <Text>{tagLine}</Text>
      </Stack>
    </Container>
  );
};
