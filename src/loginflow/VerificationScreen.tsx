import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '../constant/common/Header';
import ButtonWithText from '../constant/common/ButtonWithText';
import { ms, s, vs } from 'react-native-size-matters';
import { useRoute } from '@react-navigation/native';
import { Colors } from '../constant/common/Colors';
import { fonts } from '../constant/common/Fonts';
import { OtpInput } from 'react-native-otp-entry';
import auth from '@react-native-firebase/auth';

const VerificationScreen = () => {
  const route = useRoute();
  const { number } = route.params;
  const [confirm, setConfirm] = useState<object>({});
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    if (number) {
      signInWithPhoneNumber(`+91 ${number}`);

      const timerId = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 1) {
            clearInterval(timerId);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [number]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''
      }${seconds}`;
  };

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation); // Set the confirmation object in state
    } catch (error) {
      console.error('Error during phone number sign-in: ', error); // Log any error
    }
  };

  const confirmCode = async (text: string) => {
    try {
      await confirm.confirm(text);
      console.log('confim');
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  return (
    <View style={styles.main}>
      <Header title={'SignUp'} />
      <View style={styles.conatiner}>
        <Text style={styles.title}>OTP Verification</Text>
        <View style={styles.noticeconatiner}>
          <Text style={styles.txtnotice}>
            Enter the code from sms we sent to
            <Text style={styles.txtnumber}>+91 {number}</Text>
          </Text>
        </View>
        <Text style={styles.txttime}>{formatTime(timeLeft)}</Text>
      </View>
      <ButtonWithText
        title={'Submit'}
        onPress={() => {
          console.log(':LL');
        }}
      />
      <OtpInput
        numberOfDigits={6}
        autoFocus={true}
        blurOnFilled={true}
        disabled={false}
        type="numeric"
        secureTextEntry={false}
        focusStickBlinkingDuration={500}
        onFilled={(text) => confirmCode(text)}
        textInputProps={{
          accessibilityLabel: 'One-Time Password',
        }}
        theme={{
          containerStyle: styles.otpcontainer,
          pinCodeContainerStyle: styles.pinCodeContainer,
          pinCodeTextStyle: styles.pinCodeText,
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.activePinCodeContainer,
          placeholderTextStyle: styles.placeholderText,
          filledPinCodeContainerStyle: styles.filledPinCodeContainer,
        }}
      />
      <TouchableOpacity>
        <Text style={styles.txtresendotp}>
          Don’t Receive The OTP ?{' '}
          <Text style={styles.txtresendotp2}>Resend</Text>{' '}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.lightvblue,
  },
  conatiner: {
    paddingHorizontal: s(15),
  },
  title: {
    color: Colors.darkblue,
    fontSize: s(36),
    fontFamily: fonts.semibold,
    textAlign: 'center',
    marginTop: vs(60),
  },
  noticeconatiner: {
    paddingHorizontal: s(50),
  },
  txtnotice: {
    fontFamily: fonts.semibold,
    color: Colors.darkgrey,
    fontSize: s(13),
    textAlign: 'center',
  },
  txtnumber: {
    color: Colors.darkblue,
    fontFamily: fonts.semibold,
    fontSize: s(13),
  },
  txttime: {
    fontFamily: fonts.medium,
    color: Colors.darkblue,
    textAlign: 'center',
    marginTop: vs(40),
  },
  otpcontainer: {
    marginTop: vs(10),
    paddingHorizontal: s(30),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    borderColor: 'black',
    // borderWidth: ms(2),
  },
  pinCodeContainer: {
    height: vs(34), // Increase height for better visibility
    width: s(38), // Ensure equal width and height for all OTP boxes
    borderColor: Colors.blue325,
    borderWidth: ms(1),
    marginHorizontal: ms(-15), // Space between OTP input boxes
    borderRadius: ms(5), // Rounded corners for the boxes
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 4 }, // Position of the shadow
    shadowOpacity: 0.1, // Transparency of the shadow
    shadowRadius: ms(6), // Blur radius of the shadow
    elevation: 5,
    backgroundColor: Colors.lightvblue,
  },

  pinCodeText: {
    color: Colors.blue325,
    fontSize: s(20), // Bigger font size for better readability
    textAlign: 'center',
    fontFamily: fonts.semibold, // Use semibold font for better visibility
  },
  focusStick: {
    height: vs(15),
    backgroundColor: Colors.grey587, // Focus color
  },

  activePinCodeContainer: {
    borderColor: Colors.darkblue,
  },
  placeholderText: {
    color: Colors.darkgrey,
    fontSize: s(15),
    fontFamily: fonts.regular,
  },
  filledPinCodeContainer: {
    backgroundColor: Colors.greyBEC,
  },
  txtresendotp: {
    color: Colors.darkblue,
    fontFamily: fonts.regular,
    fontSize: s(12),
    textAlign: 'center',
    marginTop: vs(45),
  },
  txtresendotp2: {
    color: Colors.darkblue,
    fontFamily: fonts.bold,
    fontSize: s(12),
    textAlign: 'center',
    marginTop: vs(45),
  },
});
