import {ThemeType} from '../types/theme.types';

export const darkTheme: ThemeType = {
  isDark: true,
  theme: 'dark',
  primary: '#000000',
  secondary: 'yellow',
  textPrimary: 'white',
};

export const lightTheme: ThemeType = {
  isDark: false,
  theme: 'light',
  primary: '#ffffff',
  secondary: 'green',
  textPrimary: 'black',
};
