import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './navigations/AuthNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import Homenavigation from './navigations/Homenavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './store/mystore';
import { PersistGate } from 'redux-persist/integration/react';
import { Colors } from './constant/common/Colors';
import { StripeProvider } from '@stripe/stripe-react-native';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <StripeProvider publishableKey="pk_test_51Qcfr2LtY98Hku9KLiRDWDnSZhGPRwtL3qjNlMK5fC2yIXJadyxgFUUoeXr6I1tPaccZVvcn9xaW8zQ0X92R6HEo00QAQ3Dzye">
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
    </StripeProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
