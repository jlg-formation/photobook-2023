import React from 'react';
import {ColorSchemeName, StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';

export const MenuScreen = () => {
  const {s} = useComposedStyles(gs, styles);

  return (
    <View style={s.container}>
      <Text style={s.h1}>Menu Screen 🙂</Text>
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
  });
};
