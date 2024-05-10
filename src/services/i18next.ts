import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from '../../locales/en.json';
import tr from '../../locales/tr.json';
import fr from '../../locales/fr.json';

import { NativeModules, Platform } from 'react-native';

export const languageResources = {
  en: {translation: en},
  tr: {translation: tr},
  fr: {translation: fr},
};



function getLocale() {
    if (Platform.OS === 'android') {
      return i18next.language;
    } else {
      return NativeModules.SettingsManager.settings.AppleLocale.replace(/_/, '-').split('-')[0];
    }
  }
  const locale = getLocale();



i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: locale ? locale : 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;
