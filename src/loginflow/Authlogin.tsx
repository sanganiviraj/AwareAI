import {StyleSheet, View} from 'react-native';
import React from 'react';
import {horizontalScale, moderateScale} from '../constant/Metrics';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthParamsList} from '../navigations/AuthNavigator';
import SignUpScreen from './SignUpScreen';
import {Colors} from '../constant/common/Colors';

interface Authlogin {
  navigation: StackNavigationProp<AuthParamsList, 'authlogin'>;
}

const Authlogin = ({navigation}) => {
  return (
    <View style={styles.screen}>
      <SignUpScreen />
    </View>
  );
};

export default Authlogin;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.lightvblue,
  },
});
