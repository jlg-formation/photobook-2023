import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {gs} from '../../styles/global';
import {useComposedStyles} from '../../styles/hook';

export const HomeScreen = ({navigation}: {navigation: any}) => {
  const {s} = useComposedStyles(gs, styles);
  return (
    <View style={s.container}>
      <Text>home</Text>
      <Button
        title="goto legal"
        onPress={() => {
          navigation.navigate('Legal');
        }}
      />
      <Button
        title="goto settings"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'space-between',
    },
  });
