import {ColorSchemeName} from 'react-native';
import {getFormStyles} from './form';
import {compose, create, styleCompose} from './utils';

export const gs = (cs: ColorSchemeName) => {
  console.log('getGlobalStyle');

  const isDark = cs === 'dark';

  const bs = {
    text: create({
      color: isDark ? 'white' : 'black',
      fontSize: 20,
    }),
  };

  const globalStyles = {
    text: bs.text,
    h1: compose(bs.text, {
      fontSize: 30,
      fontWeight: 'bold',
      width: '100%',
      textAlign: 'center',
      marginVertical: 20,
    }),
    h2: compose(bs.text, {
      fontSize: 20,
      fontWeight: 'bold',
    }),
  };
  return styleCompose(globalStyles, getFormStyles(cs, bs));
};
