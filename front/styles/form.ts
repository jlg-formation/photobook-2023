import {ColorSchemeName} from 'react-native';
import {create, compose, Styles} from './utils';

export const getFormStyles = (cs: ColorSchemeName, bs: Styles) => {
  const isDark = cs === 'dark';
  console.log('isDark: ', isDark);

  const s = {
    form: create({
      width: '100%',
      gap: 20,
    }),
    label: {},
    labelText: compose(bs.text),
    textInput: create({
      borderWidth: 1,
      borderRadius: 5,
      borderColor: isDark ? 'white' : 'black',
    }),
    textarea: compose(bs.text, {
      textAlignVertical: 'top',
    }),
    errorContainer: create({
      height: 100,
      justifyContent: 'center',
    }),
    error: compose(bs.text, {
      fontWeight: 'bold',
      textAlign: 'center',
    }),
    buttonContainer: create({
      marginTop: 0,
    }),
  };
  return s;
};
