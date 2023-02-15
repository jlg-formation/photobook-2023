import {ColorSchemeName} from 'react-native';
import {getButtonStyles} from './button';
import {getFormStyles} from './form';
import {compose, create, styleCompose} from './utils';
import {memoize} from 'lodash';

export const gs = memoize((cs: ColorSchemeName) => {
  console.log('getGlobalStyle with cs =', cs);
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
      marginVertical: 10,
    }),
    p: compose(bs.text, {
      paddingBottom: 10,
    }),
    b: create({
      fontWeight: 'bold',
    }),
    footer: create({
      backgroundColor: isDark ? '#333' : '#aaa',
      padding: 10,
    }),
    footerText: compose(bs.text, {
      fontSize: 16,
      color: isDark ? 'white' : 'white',
    }),
  };

  const result = styleCompose(
    styleCompose(globalStyles, getButtonStyles(cs, bs)),
    getFormStyles(cs, bs),
  );

  return result;
});
