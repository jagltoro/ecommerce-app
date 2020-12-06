import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { HomeTabParamList} from '../types';

import Home from '../../../Screens/Home';

const HomeTabStack = createStackNavigator<HomeTabParamList>();

export function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator headerMode="none">
      <HomeTabStack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </HomeTabStack.Navigator>
  );
}