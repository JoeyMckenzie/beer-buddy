import { FC, useEffect } from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

export const ThemeToggle: FC = () => {
  const { toggleColorMode } = useColorMode();

  useEffect(() => console.log('test'), []);

  return <Switch onChange={toggleColorMode} colorScheme="teal" />;
};
