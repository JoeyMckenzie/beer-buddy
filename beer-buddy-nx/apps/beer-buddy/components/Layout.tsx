import { FC } from 'react';
import { Footer } from './Footer';
import { Box, Container } from '@chakra-ui/react';

export const Layout: FC = ({ children }) => (
  <Container maxW="container.lg">
    <Box>{children}</Box>
    <Footer />
  </Container>
);
