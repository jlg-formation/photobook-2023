import React from 'react';
import {
  ColorSchemeName,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import {gs} from '../../styles/global';
import {useComposedStyles} from '../../styles/hook';

export const SettingScreen = () => {
  const {s} = useComposedStyles(gs, styles);
  const changeLocale = (locale: string) => () => {
    console.log('update language to', locale);
  };
  console.log('s.secondaryButton', s.secondaryButton);

  const onDisconnect = () => {
    console.log('about to disconnect');
  };

  return (
    <View style={s.container}>
      <Text style={s.h1}>Paramètres</Text>
      <View>
        <Text style={s.h2}>Langues</Text>
        {[
          {
            locale: 'fr',
            label: 'Français',
          },
          {
            locale: 'en',
            label: 'English',
          },
        ].map(o => (
          <TouchableNativeFeedback
            onPress={changeLocale(o.locale)}
            background={TouchableNativeFeedback.Ripple('#ccc', false)}>
            <View style={s.secondaryButton}>
              <Text style={s.secondaryButtonText}>{o.label}</Text>
            </View>
          </TouchableNativeFeedback>
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
