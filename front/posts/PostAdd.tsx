import React, {useState} from 'react';
import {
  Alert,
  ColorSchemeName,
  Image,
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
import {launchImageLibrary} from 'react-native-image-picker';
import {generateId, getExtension} from '../misc';
import {api} from '../api';
import {domainUrl} from '../app.json';

export const PostAdd = () => {
  const {s} = useComposedStyles(gs, styles);
  const {add, retrieveAll} = useArticleStore();
  const [content, setContent] = useState('');
  const [images, setImages] = useState([] as string[]);

  const addPhotos = async () => {
    try {
      console.log('add photos');
      const response = await launchImageLibrary({
        mediaType: 'photo',
      });
      console.log('result: ', response);
      if (response.assets === undefined) {
        return;
      }
      for (const asset of response.assets) {
        // for the time being support only jpg
        if (asset.fileName === undefined) {
          return;
        }
        const extension = getExtension(asset.fileName);
        console.log('extension: ', extension);
        const imageName = generateId() + '.' + extension;
        console.log('imageName: ', imageName);
        const formData = new FormData();
        formData.append('file', {
          uri: asset.uri,
          name: imageName,
          type: asset.type,
        });
        await api.upload(formData);
        console.log('response: ', response);
        const imageUri = domainUrl + '/api/upload/' + imageName;
        console.log('imageUri: ', imageUri);
        setImages([...images, imageUri]);
      }
    } catch (err) {
      console.log('err: ', err);
    }
  };

  const createPost = async () => {
    try {
      console.log('create post');
      await add({
        content: content,
        images: images,
      });
      setContent('');
      setImages([]);
      await retrieveAll();
    } catch (err) {
      console.log('err: ', err);
      Alert.alert('Technical Error');
    }
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
      <View style={s.imageContainer}>
        {images.map(imageUri => (
          <Image style={s.image} source={{uri: imageUri}} key={imageUri} />
        ))}
      </View>
      <View style={s.buttons}>
        <Pressable onPress={addPhotos} android_ripple={androidRipple}>
          <View style={s.secondaryButton}>
            <Ionicons style={s.buttonIcon} name="camera-outline" />
          </View>
        </Pressable>
        {content.length > 0 && (
          <Pressable onPress={createPost} android_ripple={androidRipple}>
            <View style={s.primaryButton}>
              <Text style={s.primaryButtonText}>Envoyer</Text>
            </View>
          </Pressable>
        )}
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
    imageContainer: {
      gap: 10,
    },
    image: {
      height: 100,
      width: '100%',
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
};
