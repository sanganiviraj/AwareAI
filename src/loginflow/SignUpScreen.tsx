import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import {fonts} from '../constant/common/Fonts';
import {Colors} from '../constant/common/Colors';
import Header from '../constant/common/Header';
import ButtonWithText from '../constant/common/ButtonWithText';
import {useNavigation} from '@react-navigation/native';
import {VerificationSc} from '../constant/Constants';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [phno, setPhno] = useState('');

  const cheackData = () => {
    if (phno.length == 0) {
      console.log(' please enter phone number');
    } else if (phno.length < 10) {
      console.log('enter valid phone no');
    } else {
      navigation.navigate(VerificationSc, {number: phno});
    }
  };

  return (
    <View style={styles.main}>
      <Header title={'SignUp'} />
      <View style={styles.maincontainer}>
        <View style={styles.txtconatainer}>
          <Text style={styles.txttitle}>Verify Your Phone Number </Text>
        </View>
        <View>
          <Text style={styles.noticetxt}>
            We have send you an
            <Text style={styles.subnoticetxt}> One Time Password(OTP)</Text> on
            this mobile number.
          </Text>
        </View>
        <View style={styles.inputconatiner}>
          <Text style={styles.txttile}>Enter Mobile No.</Text>
          <View style={styles.boxconatiner}>
            <TouchableOpacity style={styles.dropdownbtn}>
              <Text>+ 91</Text>
            </TouchableOpacity>
            <View style={styles.inputbox}>
              <TextInput
                inputMode="numeric"
                maxLength={10}
                style={styles.txtinput}
                onChangeText={e => {
                  setPhno(e);
                }}
                cursorColor={Colors.darkblue}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.loginbox}>
            <Text style={styles.logintxt}>
              Already Have An Account ?{' '}
              <Text style={styles.logintxt2}>Log IN</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <ButtonWithText title={'Get OTP'} onPress={() => cheackData()} />
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  maincontainer: {
    paddingHorizontal: s(15),
  },
  txtconatainer: {
    marginTop: vs(30),
  },
  txttitle: {
    fontFamily: fonts.semibold,
    fontSize: s(36),
    color: Colors.darkblue,
  },
  noticetxt: {
    fontFamily: fonts.semibold,
    color: Colors.darkgrey,
    fontSize: s(12.5),
  },
  subnoticetxt: {
    color: Colors.darkblue,
    fontFamily: fonts.semibold,
    fontSize: s(12.5),
  },
  inputconatiner: {
    marginHorizontal: 'auto',
    marginTop: vs(48),
  },
  boxconatiner: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: vs(5),
  },
  txttile: {
    color: Colors.darkgrey,
    fontFamily: fonts.regular,
    fontSize: s(12.5),
  },
  dropdownbtn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: vs(35),
    paddingHorizontal: s(10),
    borderColor: Colors.darkgrey,
    borderWidth: ms(1),
    borderRadius: ms(10),
  },
  inputbox: {
    flex: 1,
    height: vs(35),
    borderColor: Colors.darkgrey,
    borderWidth: ms(1),
    marginLeft: s(5),
    borderRadius: ms(10),
    paddingLeft: s(5),
  },
  txtinput: {
    color: Colors.darkgrey,
  },
  loginbox: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: vs(30),
  },
  logintxt2: {
    color: Colors.darkblue,
    fontFamily: fonts.bold,
    fontSize: s(13),
  },
  logintxt: {
    color: Colors.darkblue,
    fontFamily: fonts.regular,
    fontSize: s(13),
  },
});
