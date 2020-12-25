import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { HomeTabParamList} from '../types';

import Home from '../../../Screens/Home';
import Product from '../../../Screens/Product';

const HomeTabStack = createStackNavigator<HomeTabParamList>();

export function HomeTabNavigator() {
  return (
    <HomeTabStack.Navigator headerMode="none">
      <HomeTabStack.Screen
        name="Home"
        component={Home}
      />
      <HomeTabStack.Screen
        name="Product"
        component={Product}
      />
    </HomeTabStack.Navigator>
  );
}