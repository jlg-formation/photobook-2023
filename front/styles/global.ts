import {ColorSchemeName} from 'react-native';
import {compose, create, Styles} from './utils';

export const getGlobalStyle = (cs: ColorSchemeName): Styles => {
  const isDark = cs === 'dark';

  const bs = {
    text: create({
      color: isDark ? 'white' : 'black',
      fontSize: 16,
    }),
  };

  const gs = {
    text: bs.text,
    h1: compose(bs.text, {
      fontSize: 30,
      fontWeight: 'bold',
      width: '100%',
      textAlign: 'center',
    }),
    h2: compose(bs.text, {
      fontSize: 20,
      fontWeight: 'bold',
    }),
  };
  return gs as Styles;
};
