import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Homeflow/HomeScreen';
import {HomeSc, ProductsSc} from '../constant/Constants';
import ProductsScreen from '../Homeflow/ProductsScreen';

export type HomeStackParamslist = {
  ProducstsScreen : undefined,
  HomeScreen : undefined
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
    </Stack.Navigator>
  );
};

export default Homenavigation;

