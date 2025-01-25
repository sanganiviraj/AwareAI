import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { horizontalScale, screen } from '../constant/Metrics';
import {
  moderateScale,
  ms,
  s,
  verticalScale,
  vs,
} from 'react-native-size-matters';
import { fonts } from '../constant/common/Fonts';
import { Colors } from '../constant/common/Colors';
import LottieView from 'lottie-react-native';
import { lottyAnim } from '../constant/common/Lottyanimation';
import DropDownPicker from 'react-native-dropdown-picker';

interface inputItems {
  userquestion: string;
  setUserquestion: React.Dispatch<React.SetStateAction<string>>;
  items: Array<{ label: string; value: string }>;
  setItems: React.Dispatch<
    React.SetStateAction<Array<{ label: string; value: string }>>
  >;
  value: string | null;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setAnalyze: React.Dispatch<React.SetStateAction<boolean>>;
  handleAnalyze: () => void;
}

const InputAnalyzer: React.FC<inputItems> = ({
  userquestion,
  setUserquestion,
  items,
  setItems,
  value,
  setValue,
  setAnalyze,
  handleAnalyze,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Category<Text style={[styles.title, { color: 'red' }]}>*</Text>
        </Text>
        <DropDownPicker
          autoScroll={false}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          style={styles.downpicker}
          dropDownContainerStyle={{ borderColor: 'grey', borderWidth: 0.5 }}
          scrollViewProps={{ keyboardShouldPersistTaps: 'handled' }}
        />
      </View>

      <Text style={styles.title}>User Question</Text>
      <View style={styles.inputbox}>
        <TextInput
          placeholder="Enter your Question"
          placeholderTextColor="grey"
          value={userquestion}
          onChangeText={setUserquestion}
          style={styles.input}
          cursorColor={Colors.lightgreen}
          scrollEnabled={false}
          multiline={false}
        />
      </View>

      <TouchableOpacity
        style={styles.btnstyle}
        activeOpacity={0.7}
        onPress={() => {
          setAnalyze(true);
          handleAnalyze();
        }}>
        <Text style={styles.btntext}> Analze </Text>

        <LottieView
          source={lottyAnim.rightarrow}
          autoPlay
          loop
          style={styles.btnimg}
        />
      </TouchableOpacity>
    </View>
  );
};

export default InputAnalyzer;

const styles = StyleSheet.create({
  inputbox: {
    marginHorizontal: 0,
    paddingVertical: vs(3),
    backgroundColor: 'white',
    borderRadius: ms(7),
    overflow: 'hidden',
  },
  downpicker: {
    borderColor: 'white',
    borderWidth: 0,
  },
  input: {
    paddingHorizontal: s(15),
    fontFamily: fonts.medium,
    paddingVertical: vs(5),
    textAlignVertical: 'center',
  },
  title: {
    fontSize: moderateScale(12),
    color: 'grey',
    fontFamily: fonts.regular,
  },
  btntext: {
    fontSize: moderateScale(18),
    fontFamily: fonts.medium,
    color: 'white',
  },
  btnimg: {
    width: horizontalScale(60),
    height: verticalScale(50),
  },
  btnstyle: {
    width: horizontalScale(150),
    backgroundColor: Colors.blue325,
    borderRadius: moderateScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(10),
    marginTop: verticalScale(20),
    alignSelf: 'flex-end',
  },
  container: {
    marginVertical: verticalScale(15),
  },
});
