import React from 'react';
import {StyleSheet, View} from 'react-native';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';
import {PostItem} from './PostItem';

export const PostList = () => {
  const {s} = useComposedStyles(gs, styles);
  return (
    <View style={s.container}>
      {[0, 0, 0, 0].map((n, i) => (
        <PostItem key={i} />
      ))}
    </View>
  );
};

const styles = () =>
  StyleSheet.create({
    container: {
      gap: 10,
    },
  });
