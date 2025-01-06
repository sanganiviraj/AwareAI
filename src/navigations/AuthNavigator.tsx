import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authlogin from '../loginflow/Authlogin';

export type AuthParamsList = {
  authlogin : undefined
}

const Stack = createStackNavigator<AuthParamsList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="authlogin" component={Authlogin} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
