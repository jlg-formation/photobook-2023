import React from 'react';
import {
  ColorSchemeName,
  Pressable,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {useAuthenticationStore} from '../../store/authentication';
import {gs} from '../../styles/global';
import {useComposedStyles} from '../../styles/hook';
import {androidRipple} from '../../styles/theme';

const locales = [
  {locale: 'fr', label: 'Français'},
  {locale: 'en', label: 'English'},
];

export const SettingScreen = () => {
  const {s} = useComposedStyles(gs, styles);
  const {disconnect} = useAuthenticationStore();
  const changeLocale = (locale: string) => () => {
    console.log('update language to', locale);
  };
  console.log('s.secondaryButton', s.secondaryButton);

  const onDisconnect = async () => {
    try {
      console.log('about to disconnect');
      await disconnect();
    } catch (err) {
      console.log('err: ', err);
    }
  };

  return (
    <View style={s.container}>
      <Text style={s.h1}>Paramètres</Text>
      <View>
        <Text style={s.h2}>Langues</Text>
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
        <Text style={s.h2}>Utilisateur</Text>

        <TouchableNativeFeedback
          onPress={onDisconnect}
          background={TouchableNativeFeedback.Ripple('#ccc', false)}>
          <View style={s.primaryButton}>
            <Text style={s.primaryButtonText}>Disconnect</Text>
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
