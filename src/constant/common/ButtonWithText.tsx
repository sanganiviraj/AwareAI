import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from './Colors';
import {s, vs} from 'react-native-size-matters';
import {fonts} from './Fonts';

const ButtonWithText = ({title, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        onPress();
      }}>
      <Text style={styles.txtbtn}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithText;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: vs(5),
    backgroundColor: Colors.darkblue,
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  txtbtn: {
    color: Colors.white,
    fontFamily: fonts.semibold,
    fontSize: s(18),
  },
});
