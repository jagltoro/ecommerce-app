import * as React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {HomeTabNavigator} from './Tabs/HomeTab';
import {CatalogueTabNavigator} from './Tabs/CatalogueTab';
import {FavoriteTabNavigator} from './Tabs/FavoriteTab';
import {ProfileTabNavigator} from './Tabs/ProfileTab';
import { BottomTabParamList } from './types';
import { useTheme } from '../Theme';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const theme = useTheme();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: theme.colors['text'] }}>
      <BottomTab.Screen
        name="Home"
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Catalogue"
        component={CatalogueTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="th-large" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Favorites"
        component={FavoriteTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileTabNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <FontAwesome5 size={20} style={{ marginBottom: -3 }} {...props} />;
}
