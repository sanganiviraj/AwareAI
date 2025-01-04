import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { horizontalScale, moderateScale } from '../constant/Metrics'

const Authlogin = ({ navigation }) => {

    return (
        <View style={styles.screen} >

        </View>
    )
}

export default Authlogin;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: horizontalScale(20)
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