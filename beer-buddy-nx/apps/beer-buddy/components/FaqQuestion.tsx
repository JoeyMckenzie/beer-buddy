import { Box, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react';
import * as React from 'react';

interface FaqQuestionProps {
  title: string;
  children: React.ReactNode;
  icon: React.ReactElement;
}

const FaqQuestion = (props: FaqQuestionProps) => {
  const { title, children, icon } = props;
  return (
    <Stack
      spacing={{ base: '3', md: '6' }}
      direction={{ base: 'column', md: 'row' }}
    >
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="1">
        <Text fontWeight="extrabold" fontSize="lg">
          {title}
        </Text>
        <Box color={mode('gray.600', 'gray.400')}>{children}</Box>
      </Stack>
    </Stack>
  );
};

export default FaqQuestion;
