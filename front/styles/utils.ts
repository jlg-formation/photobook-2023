import {memoize} from 'lodash';
import {ColorSchemeName} from 'react-native/Libraries/Utilities/Appearance';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type CssSelector = StyleProp<ViewStyle> &
  StyleProp<ImageStyle> &
  StyleProp<TextStyle>;

export type Styles = {
  [key: string]: CssSelector;
};

export const create = (selector: CssSelector): CssSelector => {
  return selector as CssSelector;
};

export const compose = (...selectors: CssSelector[]): CssSelector => {
  const result: CssSelector = {};
  for (const selector of selectors) {
    Object.assign(result, selector);
  }
  return result;
};

export const styleCompose = <T extends Styles, U extends Styles>(
  s1: T,
  s2: U,
) => {
  const result = {...s1} as Record<keyof T | keyof U, CssSelector>;

  for (const [key, value] of Object.entries(s2) as [keyof U, CssSelector][]) {
    result[key] = {...(result[key] as object), ...(value as object)};
  }
  return result;
};

export const createStyle = <T extends Parameters<typeof StyleSheet.create>[0]>(
  fn: (cs: ColorSchemeName) => T,
) => {
  return memoize((cs: ColorSchemeName) => {
    return StyleSheet.create(fn(cs));
  });
};
