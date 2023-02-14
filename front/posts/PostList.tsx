import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';

export const PostList = () => {
  const {s} = useComposedStyles(gs, styles);
  return (
    <View style={s.container}>
      <Text>post list</Text>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {},
  });
