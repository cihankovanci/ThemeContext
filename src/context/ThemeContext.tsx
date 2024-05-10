import React, {createContext, useContext, useEffect, useState} from 'react';
import {darkTheme, lightTheme} from '../theme/theme';
import {ThemeType} from '../types/theme.types';
import Storage from '../utils/Storage';

const ThemeContext = createContext<{theme: ThemeType; toggleTheme: () => void}>(
  {
    theme: lightTheme,
    toggleTheme: () => {},
  },
);

export const ThemeProvider = ({children}: any) => {
  const [theme, setTheme] = useState<ThemeType>(lightTheme);

  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme = await Storage.getItem('theme');

        if (savedTheme) {
          setTheme(savedTheme);
        } else {
          setTheme(lightTheme);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, []);

  const toggleTheme = async () => {
    const newTheme = theme.isDark ? lightTheme : darkTheme;
    await Storage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

// Usage Example
/*
import { useTheme } from './path/to/themeProvider';

const MyComponent: React.FC = () => {
    const { theme } = useTheme();

    return (
        <View style={{ backgroundColor: theme.primary }}>
            <Text>Themed Component</Text>
        </View>
    );
};
*/

export default lightTheme;
