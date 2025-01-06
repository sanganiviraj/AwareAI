import { StyleSheet,View } from 'react-native'
import React from 'react'
import { horizontalScale, moderateScale } from '../constant/Metrics'
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamsList } from '../navigations/AuthNavigator';

interface Authlogin{
    navigation : StackNavigationProp<AuthParamsList,"authlogin">;
}

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
        paddingHorizontal: horizontalScale(20),
    },
})