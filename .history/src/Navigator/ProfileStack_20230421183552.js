// import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Profile from '../Screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyAddress from '../Screens/MyAddress';
// import Profile from '';
// import EditProfile from '../screens/EditProfile';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen
        name="MyAddress"
        component={MyAddress}
        options={{ title: 'Edit Profile' }}
      />
      <Stack.Screen
        name="MyAddress"
        component={MyAddress}
        options={{ title: 'Edit Profile' }}
      />
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
