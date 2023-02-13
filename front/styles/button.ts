import {ColorSchemeName} from 'react-native';
import {borderRadius, primaryColor} from './theme';
import {compose, create, styleCompose, Styles} from './utils';

export const getButtonStyles = (cs: ColorSchemeName, bs: Styles) => {
  const isDark = cs === 'dark';
  console.log('isDark: ', isDark);
  const primaryButtonStyles = {
    primaryButton: create({
      padding: 10,
      width: '100%',
      backgroundColor: primaryColor,
      color: 'white',
      alignItems: 'center',
      marginVertical: 5,
      borderRadius: borderRadius,
    }),
    primaryButtonText: compose(bs.text, {
      color: 'white',
    }),
  };

  const secondaryButtonStyles = {
    secondaryButton: compose(primaryButtonStyles.primaryButton, {
      backgroundColor: isDark ? 'black' : 'white',
      borderColor: primaryColor,
      borderWidth: 1,
    }),
    secondaryButtonText: compose(primaryButtonStyles.primaryButtonText, {
      color: primaryColor,
    }),
  };

  const buttonStyles = styleCompose(primaryButtonStyles, secondaryButtonStyles);
  return buttonStyles;
};
