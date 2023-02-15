import {create} from 'zustand';
import {Platform, NativeModules} from 'react-native';
import enJson from '../i18n/en.json';
import frJson from '../i18n/fr.json';
import {merge} from 'lodash';

export type Locale = 'en' | 'fr';

const getDefaultLocale = () => {
  const defaultLocale: string =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  console.log('deviceLanguage: ', defaultLocale);

  return defaultLocale.substring(0, 2) === 'fr' ? 'fr' : 'en';
};

export interface I18nStore {
  locale: Locale;
  setLocale: (newLocale: Locale) => void;
}

export const useI18nStore = create<I18nStore>(set => ({
  locale: getDefaultLocale(),
  setLocale: newLocale => {
    console.log('update locale to ' + newLocale);
    set({locale: newLocale});
  },
}));

export const useTranslation = () =>
  useI18nStore((state): {t: typeof enJson} => {
    console.log('useTranslation with state', state);
    if (state.locale === 'fr') {
      const json = merge({}, enJson, frJson);
      return {t: json};
    }
    return {t: enJson};
  });
