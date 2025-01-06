import { StatusBar, StyleSheet, } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigations/AuthNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Homenavigation from './navigations/Homenavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './store/mystore';
import { PersistGate } from 'redux-persist/integration/react';
import { Colors } from './constant/common/Colors';

export type RootStackParamsList = {
  authnavigator : undefined,
  homenavigator : undefined,
};

const Stack = createStackNavigator<RootStackParamsList>();


const App = () => {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <StatusBar backgroundColor={Colors.lightvblue} />
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="authnavigator" component={AuthNavigator} />
            <Stack.Screen name="homenavigator" component={Homenavigation} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
