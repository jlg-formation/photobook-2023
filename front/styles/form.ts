import {ColorSchemeName} from 'react-native';
import {create, compose, Styles} from './utils';

export const getFormStyles = (cs: ColorSchemeName, bs: Styles): Styles => {
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
    buttonContainer: create({
      marginTop: 30,
    }),
  };
  return s;
};
