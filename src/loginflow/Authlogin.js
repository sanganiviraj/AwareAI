import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import StepProgress from '../components/StepProgress'
import { horizontalScale, moderateScale } from '../constant/Metrics'

const Authlogin = ({ navigation }) => {
    
    return (
        <View style={styles.screen} >
            <StepProgress navigation={navigation} />
        </View>
    )
}

export default Authlogin

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white"
    },
    buttonview: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(10),
    },
    buttonstyle: {
        width: 50,
        height: 50,
        borderRadius: 10,
        backgroundColor: "pink",
        justifyContent: 'center',
        alignitems: 'center'
    },
    btnstyle: {
        fontSize: moderateScale(12)
    }
})