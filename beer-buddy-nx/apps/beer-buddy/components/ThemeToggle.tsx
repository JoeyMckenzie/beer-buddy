import { FC } from 'react';
import { useColorMode, Switch } from '@chakra-ui/react';

export const ThemeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Switch
      isChecked={colorMode === 'dark'}
      onChange={toggleColorMode}
      colorScheme="teal"
    />
  );
};
