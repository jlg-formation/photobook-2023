import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useArticleStore} from '../store/article.store';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';
import {PostItem} from './PostItem';

export const PostList = () => {
  const {s} = useComposedStyles(gs, styles);
  const {articles} = useArticleStore();
  return (
    <View style={s.container}>
      {articles.map((article, i) => (
        <PostItem key={i} article={article} />
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
