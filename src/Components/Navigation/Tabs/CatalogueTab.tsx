import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { CatalogueTabParamList} from '../types';

import Catalogue from '../../../Screens/Catalogue';

const CatalogueTabStack = createStackNavigator<CatalogueTabParamList>();

export function CatalogueTabNavigator() {
  return (
    <CatalogueTabStack.Navigator headerMode="none">
      <CatalogueTabStack.Screen
        name="Catalogue"
        component={Catalogue}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </CatalogueTabStack.Navigator>
  );
}