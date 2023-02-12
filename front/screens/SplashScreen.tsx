import React from 'react';
import {Text, View} from 'react-native';

export const SplashScreen = ({name}: {name: string}) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
