import { Box, ButtonGroup, IconButton, VStack, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { BsFileCode } from 'react-icons/bs';
import { FC } from 'react';
import { ThemeToggle } from './ThemeToggle';

export const Footer: FC = () => {
  const SocialMediaLinks = () => (
    <ButtonGroup variant="ghost" color="gray.600">
      <IconButton
        as="a"
        href="https://linkedin.com/in/JoeyMckenzie"
        aria-label="LinkedIn"
        rel="noreferrer"
        target="_blank"
        icon={<FaLinkedin fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="https://github.com/JoeyMckenzie"
        aria-label="GitHub"
        rel="noreferrer"
        target="_blank"
        icon={<FaGithub fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="https://twitter.com/the_beercoder"
        aria-label="Twitter"
        rel="noreferrer"
        target="_blank"
        icon={<FaTwitter fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="https://joeymckenzie.io"
        rel="noreferrer"
        target="_blank"
        aria-label="Twitter"
        icon={<BsFileCode fontSize="20px" />}
      />
    </ButtonGroup>
  );

  return (
    <Box
      as="footer"
      role="contentinfo"
      mx="auto"
      maxW="7xl"
      py="12"
      px={{ base: '4', md: '8' }}
    >
      <VStack spacing="1rem">
        <HStack spacing="2rem">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/beers">
            <a>Beers</a>
          </Link>
          <Link href="/breweries">
            <a>Breweries</a>
          </Link>
        </HStack>
        <SocialMediaLinks />
        <ThemeToggle />
      </VStack>
    </Box>
  );
};
