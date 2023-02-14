import React, {useState} from 'react';
import {
  ColorSchemeName,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useArticleStore} from '../store/article.store';
import {gs} from '../styles/global';
import {useComposedStyles} from '../styles/hook';
import {androidRipple, borderRadius} from '../styles/theme';

export const PostAdd = () => {
  const {s} = useComposedStyles(gs, styles);
  const {add, retrieveAll} = useArticleStore();
  const [content, setContent] = useState('');

  const addPhotos = () => {
    console.log('add photos');
  };

  const createPost = async () => {
    console.log('create post');
    await add({
      content: content,
      images: [],
    });
    setContent('');
    await retrieveAll();
  };
  return (
    <View style={s.container}>
      <TextInput
        style={s.textarea}
        placeholder="What is in your mind?"
        multiline={true}
        onChangeText={setContent}
        value={content}
      />
      <View style={s.buttons}>
        <Pressable onPress={addPhotos} android_ripple={androidRipple}>
          <View style={s.secondaryButton}>
            <Ionicons style={s.buttonIcon} name="camera-outline" />
          </View>
        </Pressable>
        <Pressable onPress={createPost} android_ripple={androidRipple}>
          <View style={s.primaryButton}>
            <Text style={s.primaryButtonText}>Envoyer</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = (cs: ColorSchemeName) => {
  const isDark = cs === 'dark';
  return StyleSheet.create({
    container: {
      backgroundColor: isDark ? 'black' : 'white',
      borderWidth: 1,
      borderRadius: borderRadius,
      borderColor: 'gray',
      padding: 10,
      justifyContent: 'space-between',
      gap: 10,
    },
    textarea: {
      minHeight: 100,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
