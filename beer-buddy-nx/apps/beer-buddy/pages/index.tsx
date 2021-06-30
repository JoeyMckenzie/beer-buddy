import { Box, Button, Flex, Heading, Spacer, Text } from '@chakra-ui/react';
import * as React from 'react';

const Index = () => (
  <Box as="section">
    <Box
      maxW="2xl"
      mx="auto"
      px={{ base: '6', lg: '8' }}
      py={{ base: '16', sm: '20' }}
      textAlign="center"
    >
      <Heading as="h2" size="3xl" fontWeight="extrabold" letterSpacing="tight">
        Beer Buddy
      </Heading>
      <Text mt="4" fontSize="lg">
        The internet's most useless beer-based web application!
      </Text>
      <Flex direction="row" justifyContent="center" gridGap="2rem">
        <Button
          mt="8"
          as="a"
          href="#"
          size="lg"
          colorScheme="blue"
          fontWeight="bold"
        >
          To the beers!
        </Button>
        <Button
          mt="8"
          as="a"
          href="#"
          size="lg"
          colorScheme="green"
          fontWeight="bold"
        >
          To the breweries!
        </Button>
      </Flex>
    </Box>
  </Box>
);

export default Index;
