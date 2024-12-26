import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {
  horizontalScale,
  moderateScale,
  screen,
  verticalScale,
} from '../constant/Metrics';
import Icon, {Icons} from '../constant/Icons';

const IdentyForm = ({name, setName, email, setEmail}) => {
  return (
    <View style={styles.screen}>
      <View style={styles.box}>
        <Icon
          name="user"
          type={Icons.FontAwesome}
          color="black"
          style={styles.iconstyle}
        />
        <TextInput
          placeholder="Enter a Name"
          placeholderTextColor="grey"
          value={name}
          onChangeText={value => {
            setName(value);
          }}
          style={styles.inputstyle}
          cursorColor="black"
        />
      </View>

      <View style={styles.box}>
        <Icon
          name="email"
          type={Icons.MaterialCommunityIcons}
          color="black"
          style={styles.iconstyle}
        />
        <TextInput
          placeholder="Enter a Email"
          placeholderTextColor="grey"
          value={email}
          onChangeText={value => {
            setEmail(value);
          }}
          style={styles.inputstyle}
          cursorColor="black"
        />
      </View>
    </View>
  );
};

export default IdentyForm;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: (screen.WIDTH * 90) / 100,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  iconstyle: {
    marginRight: horizontalScale(5),
  },
  box: {
    paddingVertical: verticalScale(8),
    marginVertical: verticalScale(10),
    alignItems: 'center',
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(10),
    backgroundColor: '#ABCEC0',
  },
  inputstyle: {
    fontSize: moderateScale(15),
    color: 'black',
    width: (screen.WIDTH * 75) / 100,
  },
});
