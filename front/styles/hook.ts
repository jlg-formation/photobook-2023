import {ColorSchemeName, useColorScheme} from 'react-native';
import {CssSelector, styleCompose, Styles} from './utils';

export const useStyles = <T extends Styles>(
  getGlobalStyles: (cs: ColorSchemeName) => T,
): {s: T; cs: ColorSchemeName} => {
  const cs = useColorScheme();
  const gs = getGlobalStyles(cs);
  return {s: gs, cs};
};

export const useComposedStyles = <T extends Styles, U extends Styles>(
  getGlobalStyles: (cs: ColorSchemeName) => T,
  getLocalStyles: (cs: ColorSchemeName) => U,
): {s: Record<keyof T | keyof U, CssSelector>; cs: ColorSchemeName} => {
  const cs = useColorScheme();
  const gs = getGlobalStyles(cs);
  const s = getLocalStyles(cs);
  return {s: styleCompose(gs, s), cs};
};
