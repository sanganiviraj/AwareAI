import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Authlogin from '../loginflow/Authlogin';
import {VerificationSc} from '../constant/Constants';
import VerificationScreen from '../loginflow/VerificationScreen';

export type AuthParamsList = {
  authlogin: undefined;
  VerificationScreen : {
    number : string,
  }
};

const Stack = createStackNavigator<AuthParamsList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="authlogin" component={Authlogin} />
      <Stack.Screen name={VerificationSc} component={VerificationScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
