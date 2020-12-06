import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { FavoriteTabParamList} from '../types';

import Favorite from '../../../Screens/Favorite';

const FavoriteTabStack = createStackNavigator<FavoriteTabParamList>();

export function FavoriteTabNavigator() {
  return (
    <FavoriteTabStack.Navigator headerMode="none">
      <FavoriteTabStack.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </FavoriteTabStack.Navigator>
  );
}