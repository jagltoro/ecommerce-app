import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { CatalogueTabParamList} from '../types';

import Catalogue from '../../../Screens/Catalogue';
import Items from '../../../Screens/Items';

const CatalogueTabStack = createStackNavigator<CatalogueTabParamList>();

export function CatalogueTabNavigator() {
  return (
    <CatalogueTabStack.Navigator headerMode="none">
      <CatalogueTabStack.Screen
        name="Catalogue"
        component={Catalogue}
      />
      <CatalogueTabStack.Screen
        name="Items"
        component={Items}
      />
    </CatalogueTabStack.Navigator>
  );
}