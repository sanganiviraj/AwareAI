import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler';
import { horizontalScale, screen } from '../constant/Metrics';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { fonts } from '../constant/common/Fonts';
import { Colors } from '../constant/common/Colors';
import LottieView from 'lottie-react-native';
import { lottyAnim } from '../constant/common/Lottyanimation';
import DropDownPicker from 'react-native-dropdown-picker';

interface inputItems {
    userquestion: string;
    setUserquestion: React.Dispatch<React.SetStateAction<string>>;
    items: Array<{ label: string; value: string }>;
    setItems: React.Dispatch<React.SetStateAction<Array<{ label: string; value: string }>>>;
    value: string | null;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    setAnalyze: React.Dispatch<React.SetStateAction<boolean>>;
    handleAnalyze: () => void;
}

const InputAnalyzer: React.FC<inputItems> = ({ userquestion, setUserquestion, items, setItems, value, setValue, setAnalyze, handleAnalyze }) => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>Category<Text style={[styles.title, { color: 'red' }]}>*</Text></Text>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.downpicker}
                    dropDownContainerStyle={{ borderColor: 'grey', borderWidth: 0.5 }}
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
                />
            </View>

            <TouchableOpacity style={styles.btnstyle} activeOpacity={0.7} onPress={() => { setAnalyze(true); handleAnalyze() }}>
                <Text style={styles.btntext}> Analze </Text>

                <LottieView
                    source={lottyAnim.rightarrow}
                    autoPlay loop
                    style={styles.btnimg}
                />
            </TouchableOpacity>
        </View>
    )
}

export default InputAnalyzer;

const styles = StyleSheet.create({
    inputbox: {
        width: 'auto',
        backgroundColor: 'white',
        borderRadius: moderateScale(10),
        paddingVertical: verticalScale(3),
        paddingHorizontal: horizontalScale(10),
        height: verticalScale(40),
        justifyContent: 'center',
    },
    downpicker: {
        borderColor: 'white',
        borderWidth: 0,
    },
    input: {
        width: '90%',
        color: 'black',
        fontFamily: fonts.medium,
        justifyContent: 'center',
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
        height: verticalScale(60),
    },
    btnstyle: {
        width: horizontalScale(150),
        height: verticalScale(40),
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
        marginVertical: verticalScale(15)
    }
});