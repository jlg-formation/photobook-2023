import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gs, h1} from '../styles';

export const SplashScreen = ({
  name,
  version,
}: {
  name: string;
  version: string;
}) => {
  return (
    <View style={styles.container}>
      <Text style={h1}>{name}</Text>
      <Text style={gs.text}>{version}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
