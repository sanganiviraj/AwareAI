import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Homeflow/HomeScreen';
import {HomeSc, ProductsSc} from '../constant/Constants';
import ProductsScreen from '../Homeflow/ProductsScreen';

const Homenavigation = () => {
  const Stack = createStackNavigator();
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

const styles = StyleSheet.create({});
