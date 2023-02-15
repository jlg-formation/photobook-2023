import {memoize} from 'lodash';
import React, {useState} from 'react';
import {
  ColorSchemeName,
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {PostAdd} from '../../posts/PostAdd';
import {PostList} from '../../posts/PostList';
import {useArticleStore} from '../../store/article.store';
import {gs} from '../../styles/global';
import {useComposedStyles} from '../../styles/hook';
import {createStyle} from '../../styles/utils';

export const HomeScreen = () => {
  const {s} = useComposedStyles(gs, styles);

  const {retrieveAll} = useArticleStore();

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    try {
      console.log('refresh');
      setRefreshing(true);
      await retrieveAll();
    } catch (err) {
      console.log('err: ', err);
    } finally {
      setRefreshing(false);
    }
  };
  return (
    <View style={s.container}>
      <ScrollView
        style={s.scrollview}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
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

const styles = createStyle((cs: ColorSchemeName) => {
  const isDark = cs === 'dark';
  return {
    scrollview: {
      height: '100%',
    },
    container: {
      height: '100%',
      justifyContent: 'space-between',
      backgroundColor: isDark ? '#333' : '#eee',
    },
    postContainer: {
      padding: 10,
      gap: 10,
    },
    userBackground: {
      height: 200,
      width: '100%',
    },
  };
});
