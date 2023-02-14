import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from './menu/HomeScreen';
import {LegalScreen} from './menu/LegalScreen';
import {RootStackParamList} from './menu/navigation';
import {SettingScreen} from './menu/SettingScreen';

const getIconName = (routeName: keyof RootStackParamList, focused: boolean) => {
  if (routeName === 'Home') {
    return focused ? 'home' : 'home-outline';
  }
  if (routeName === 'Legal') {
    return focused ? 'information-circle' : 'information-circle-outline';
  }
  return focused ? 'settings' : 'settings-outline';
};

const getTabBarIcon =
  (routeName: keyof RootStackParamList) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
    return (
      <Ionicons
        name={getIconName(routeName, focused)}
        size={size}
        color={color}
      />
    );
  };

const Tab = createBottomTabNavigator<RootStackParamList>();

export const MenuScreen = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: getTabBarIcon(route.name),
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Legal" component={LegalScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
