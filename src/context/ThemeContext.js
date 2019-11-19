import { createContext } from 'react';

const ThemeColorContext = createContext({
  theme: true,
  toggleTheme: () => {}
});

export default ThemeColorContext;
