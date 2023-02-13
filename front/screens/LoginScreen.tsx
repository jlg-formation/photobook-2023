import React from 'react';
import {
  Button,
  ColorSchemeName,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';

export const LoginScreen = () => {
  const {s} = useComposedStyles(gs, styles);

  return (
    <View style={s.container}>
      <Text style={s.h1}>Se connecter</Text>
      <View style={s.form}>
        <View style={s.label}>
          <Text style={s.labelText}>Login</Text>
          <TextInput style={s.textInput} />
        </View>
        <View style={s.label}>
          <Text style={s.labelText}>Mot de passe</Text>
          <TextInput style={s.textInput} />
        </View>
        <View style={s.buttonContainer}>
          <Button title="Se connecter" />
        </View>
      </View>
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
      padding: 10,
    },
  });
};
