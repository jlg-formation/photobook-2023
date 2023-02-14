import React from 'react';
import {ColorSchemeName, Image, StyleSheet, Text, View} from 'react-native';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';
import {borderRadius} from '../styles/theme';

export const PostItem = () => {
  const {s} = useComposedStyles(gs, styles);
  return (
    <View style={s.container}>
      <Text style={s.text}>je suis un post</Text>
      {[0, 0].map((n, i) => (
        <View style={s.imageContainer} key={i}>
          <Image
            style={s.image}
            source={require('../assets/user-background.webp')}
          />
        </View>
      ))}
    </View>
  );
};

const styles = (cs: ColorSchemeName) => {
  const isDark = cs === 'dark';
  return StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: borderRadius,
      padding: 10,
      gap: 10,
      backgroundColor: isDark ? 'black' : 'white',
    },
    imageContainer: {},
    image: {
      height: 150,
      width: '100%',
    },
  });
};
