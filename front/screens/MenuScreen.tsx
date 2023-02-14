import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HomeScreen} from './menu/HomeScreen';
import {LegalScreen} from './menu/LegalScreen';
import {RootStackParamList} from './menu/navigation';
import {SettingScreen} from './menu/SettingScreen';

const getTabBarIcon =
  (iconName: string) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) => {
    return (
      <Ionicons
        name={focused ? iconName : iconName + '-outline'}
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
        screenOptions={() => ({
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: getTabBarIcon('home'),
          }}
        />
        <Tab.Screen
          name="Legal"
          component={LegalScreen}
          options={{
            tabBarIcon: getTabBarIcon('information-circle'),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingScreen}
          options={{
            tabBarIcon: getTabBarIcon('settings'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
