import React from 'react';
import {Text, View} from 'react-native';

export const SplashScreen = ({
  name,
  version,
}: {
  name: string;
  version: string;
}) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{version}</Text>
    </View>
  );
};
