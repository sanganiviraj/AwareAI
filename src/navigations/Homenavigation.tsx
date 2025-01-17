import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Homeflow/HomeScreen';
import { CaptureSc, HomeSc, ProductsSc } from '../constant/Constants';
import ProductsScreen from '../Homeflow/ProductsScreen';
import CaptureImage from '../Homeflow/CaptureImage';

export type HomeStackParamslist = {
  ProducstsScreen: undefined,
  HomeScreen: { imageUri: string | undefined };
  CaptureImage: undefined,
}

const Stack = createStackNavigator<HomeStackParamslist>();

const Homenavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ProductsSc} component={ProductsScreen} />
      <Stack.Screen name={HomeSc} component={HomeScreen} />
      <Stack.Screen name={CaptureSc} component={CaptureImage} />
    </Stack.Navigator>
  );
};

export default Homenavigation;

