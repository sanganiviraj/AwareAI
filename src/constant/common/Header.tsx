import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';
import {Colors} from './Colors';
import {fonts} from './Fonts';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headertitle}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingVertical: vs(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkblue,
  },
  headertitle: {
    fontFamily: fonts.semibold,
    fontSize: s(18),
    color: Colors.white,
  },
});
