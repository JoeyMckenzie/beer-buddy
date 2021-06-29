import { createContext, Dispatch, FC, useState } from 'react';

type ThemeStateContext = [ThemeState, Dispatch<ThemeState>];

interface ThemeState {
  darkModeEnabled: boolean;
}

const initialState: ThemeState = {
  darkModeEnabled: false,
};

const ThemeContext = createContext<ThemeStateContext>([initialState, () => {}]);

export const ThemeProvider: FC = ({ children }) => {
  const [themeState, setThemeState] = useState<ThemeState>(initialState);

  return (
    <ThemeContext.Provider value={[themeState, setThemeState]}>
      {children}
    </ThemeContext.Provider>
  );
};
