import {createContext} from 'react';

export const themeSwitcher = createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
