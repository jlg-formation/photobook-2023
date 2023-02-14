import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';

export const PostItem = () => {
  const {s} = useComposedStyles(gs, styles);
  return (
    <View style={s.container}>
      <Text>je suis un post</Text>
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {},
  });
