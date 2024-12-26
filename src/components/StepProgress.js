import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import IdentyForm from '../loginflow/IdentyForm';
import Profilesetup from '../loginflow/ProfileSetup';
import AppGuide from '../loginflow/AppGuide';
import {useNavigation} from '@react-navigation/native';

const StepProgress = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [age, setAge] = useState('');

  return (
    <View style={styles.screen}>
      <ProgressSteps
        style={styles.prgstepstyle}
        marginBottom={30}
        topOffset={20}>
        <ProgressStep
          label="First Step"
          nextBtnTextStyle={styles.nxtbtnstyle}
          nextBtnStyle={styles.nxtstyle}>
          <IdentyForm
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
          />
        </ProgressStep>
        <ProgressStep
          label="Second Step"
          nextBtnTextStyle={styles.nxtbtnstyle}
          previousBtnTextStyle={styles.prvbtnstyle}>
          <Profilesetup
            phonenumber={phonenumber}
            setPhonenumber={setPhonenumber}
            age={age}
            setAge={setAge}
          />
        </ProgressStep>
        <ProgressStep
          label="Third Step"
          nextBtnTextStyle={styles.nxtbtnstyle}
          previousBtnTextStyle={styles.prvbtnstyle}
          onSubmit={() => navigation.navigate('homenavigator')} // Use the correct route name here
        >
          <AppGuide />
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default StepProgress;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  nxtbtnstyle: {
    color: '#389F62',
  },
  prvbtnstyle: {
    color: '#ABCEC0',
  },
});
