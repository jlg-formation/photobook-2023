import {StyleSheet} from 'react-native';

export const gs = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export const h1 = StyleSheet.compose(gs.text, {
  fontSize: 24,
  fontWeight: 'bold',
  width: '100%',
  textAlign: 'center',
});

export const h2 = StyleSheet.compose(gs.text, {
  fontSize: 20,
  fontWeight: 'bold',
});
