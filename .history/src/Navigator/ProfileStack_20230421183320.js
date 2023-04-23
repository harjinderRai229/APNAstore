import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      {/* <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: 'Edit Profile' }}
      /> */}
    </Stack.Navigator>
  );
};

ProfileStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default ProfileStack;
