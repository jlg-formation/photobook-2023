import {ColorSchemeName, useColorScheme} from 'react-native';
import {getGlobalStyle} from './global';
import {styleCompose, Styles} from './utils';

export const useStyle = (
  styles?: (cs: ColorSchemeName) => Styles,
): {s: Styles; cs: ColorSchemeName} => {
  const cs = useColorScheme();
  const gs = getGlobalStyle(cs);
  if (styles === undefined) {
    return {s: gs, cs};
  }
  const s = styles(cs);
  return {s: styleCompose(gs, s), cs};
};
