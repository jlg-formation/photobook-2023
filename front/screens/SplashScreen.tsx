import React from 'react';
import {ColorSchemeName, Image, StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';

export const SplashScreen = ({
  name,
  version,
}: {
  name: string;
  version: string;
}) => {
  const {s, cs} = useComposedStyles(gs, styles);
  const isDark = cs === 'dark';

  return (
    <View style={s.container}>
      {isDark ? (
        <Image style={s.image} source={require('../assets/logo-white.png')} />
      ) : (
        <Image style={s.image} source={require('../assets/logo.png')} />
      )}
      <Text style={s.h1}>{name}</Text>
      <Text style={s.text}>{version}</Text>
    </View>
  );
};

const styles = (cs: ColorSchemeName) => {
  const isDark = cs === 'dark';
  return StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: isDark ? 'black' : 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      height: 200,
      width: 200,
    },
  });
};
