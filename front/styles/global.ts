import {ColorSchemeName} from 'react-native';
import {getFormStyles} from './form';
import {compose, create, styleCompose, Styles} from './utils';

export const getGlobalStyle = (cs: ColorSchemeName): Styles => {
  console.log('getGlobalStyle');

  const isDark = cs === 'dark';

  const bs = {
    text: create({
      color: isDark ? 'white' : 'black',
      fontSize: 20,
    }),
  };

  const gs = {
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
  return styleCompose(gs, getFormStyles(cs, bs)) as Styles;
};
