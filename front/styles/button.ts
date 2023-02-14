import {ColorSchemeName} from 'react-native';
import {borderRadius, primaryColor} from './theme';
import {compose, create, styleCompose, Styles} from './utils';

export const getButtonStyles = (cs: ColorSchemeName, bs: Styles) => {
  const isDark = cs === 'dark';
  console.log('isDark: ', isDark);
  const primaryButtonStyles = {
    buttonIcon: compose(bs.text, {
      transform: [{scale: 1.8}],
      color: primaryColor,
    }),
    buttonPressable: create({
      marginVertical: 5,
    }),
    primaryButton: create({
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: '100%',
      backgroundColor: primaryColor,
      color: 'white',
      alignItems: 'center',
      marginVertical: 0,
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
