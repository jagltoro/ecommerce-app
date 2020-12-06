import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ProfileTabParamList} from '../types';

import Profile from '../../../Screens/Profile';

const ProfileTabStack = createStackNavigator<ProfileTabParamList>();

export function ProfileTabNavigator() {
  return (
    <ProfileTabStack.Navigator headerMode="none">
      <ProfileTabStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </ProfileTabStack.Navigator>
  );
}