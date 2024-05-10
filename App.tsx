import {
  NativeModules,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Home from './src/screens/Home';
import {ThemeProvider, useTheme} from './src/context/ThemeContext';
import Language from './src/screens/Language';
import Storage from './src/utils/Storage';
import i18next from 'i18next';

const App = () => {
  const {theme, toggleTheme} = useTheme();

  // const deviceLanguage =
  //     Platform.OS === 'ios'
  //       ? NativeModules.SettingsManager.settings.AppleLocale ||
  //         NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
  //       : NativeModules.I18nManager.localeIdentifier;

  // console.log('???',locale, getLocale()); //en_US

  useEffect(() => {
    const loadLanguage = async () => {
      try {
        const storedLanguage = await Storage.getItem('language');
        if (storedLanguage) {
          i18next.changeLanguage(storedLanguage);
        }
      } catch (e) {
        console.log(e);
      }
    };
    loadLanguage();
  }, []);
  return (
    <ThemeProvider>
      <View style={{backgroundColor: theme.primary}}>
        <Home />
        <Language />
      </View>
    </ThemeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
