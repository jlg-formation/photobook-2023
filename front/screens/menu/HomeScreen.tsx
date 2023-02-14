import React from 'react';
import {
  ColorSchemeName,
  Image,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {PostAdd} from '../../posts/PostAdd';
import {PostList} from '../../posts/PostList';
import {gs} from '../../styles/global';
import {useComposedStyles} from '../../styles/hook';

export const HomeScreen = () => {
  const {s} = useComposedStyles(gs, styles);
  return (
    <View style={s.container}>
      <ScrollView style={s.scrollview}>
        <View style={s.container}>
          <Image
            style={s.userBackground}
            source={require('../../assets/user-background.webp')}
          />
          <View style={s.postContainer}>
            <PostAdd />
            <PostList />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = (cs: ColorSchemeName) => {
  const isDark = cs === 'dark';
  return StyleSheet.create({
    scrollview: {
      height: '100%',
    },
    container: {
      height: '100%',
      justifyContent: 'space-between',
      backgroundColor: isDark ? '#333' : '#ccc',
    },
    postContainer: {
      padding: 10,
      gap: 10,
    },
    userBackground: {
      height: 200,
      width: '100%',
    },
  });
};
