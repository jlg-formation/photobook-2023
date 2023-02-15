import React, {useState} from 'react';
import {
  ActivityIndicator,
  ColorSchemeName,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {useAuthenticationStore} from '../../store/authentication.store';
import {Locale, useI18nStore, useTranslation} from '../../store/i18n.store';
import {gs} from '../../styles/global';
import {useComposedStyles} from '../../styles/hook';
import {androidRipple} from '../../styles/theme';

const locales: {locale: Locale; label: string}[] = [
  {locale: 'fr', label: 'Français'},
  {locale: 'en', label: 'English'},
];

export const SettingScreen = () => {
  const {s} = useComposedStyles(gs, styles);
  const {t} = useTranslation();
  const {setLocale} = useI18nStore();
  const {disconnect} = useAuthenticationStore();
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  const changeLocale = (locale: Locale) => () => {
    console.log('update language to', locale);
    setLocale(locale);
  };
  console.log('s.secondaryButton', s.secondaryButton);

  const onDisconnect = async () => {
    try {
      console.log('about to disconnect');
      setIsDisconnecting(true);
      await disconnect();
    } catch (err) {
      console.log('err: ', err);
    } finally {
      setIsDisconnecting(false);
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.h1}>{t.settings}</Text>
      <View>
        <Text style={s.h2}>{t.language}</Text>
        {locales.map(o => (
          <Pressable
            key={o.locale}
            onPress={changeLocale(o.locale)}
            android_ripple={androidRipple}
            style={s.buttonPressable}>
            <View style={s.secondaryButton}>
              <Text style={s.secondaryButtonText}>{o.label}</Text>
            </View>
          </Pressable>
        ))}
      </View>
      <View>
        <Text style={s.h2}>{t.user}</Text>

        <TouchableNativeFeedback
          onPress={onDisconnect}
          background={TouchableNativeFeedback.Ripple('#ccc', false)}>
          <View style={s.primaryButton}>
            {isDisconnecting ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={s.primaryButtonText}>{t.disconnect}</Text>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    </View>
  );
};

const styles = (cs: ColorSchemeName) => {
  const isDark = cs === 'dark';
  return StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: isDark ? 'black' : 'white',
      padding: 10,
    },
  });
};
