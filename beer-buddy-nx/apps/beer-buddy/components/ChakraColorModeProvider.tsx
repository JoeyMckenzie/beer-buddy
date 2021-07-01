// e.g. src/Chakra.js
// a) import `ChakraProvider` component as well as the storageManagers
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react';
import { FC } from 'react';

export const ChakraColorModeProvider: FC<{ cookies: string }> = ({
  cookies,
  children,
}) => {
  // b) Pass `colorModeManager` prop
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager;

  console.log(colorModeManager);

  return (
    <ChakraProvider colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

// also export a reusable function getServerSideProps
export async function getServerSideProps({ req }) {
  console.log(req);
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? 'chakra-ui-color-mode=light',
    },
  };
}
