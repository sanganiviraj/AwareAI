import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';
import { Colors } from '../constant/common/Colors';
import { verticalScale, moderateScale, horizontalScale } from '../constant/Metrics';
import { fonts } from '../constant/common/Fonts';

type NutriItem = {
    name: string,
    percentage: string,
}

interface props {
    nutrient: NutriItem[],
}

const Nutriention: React.FC<props> = ({ nutrient }) => {
    return (
        <View style={styles.container}>
            {nutrient &&
                <FlatList
                    data={nutrient}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => `${item.name}-${index}`}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.box}>
                                <Text style={styles.name} >{item.name}</Text>
                                <Text style={styles.percentages}>{item.percentage}</Text>
                            </View>
                        );
                    }}
                />}
        </View>
    )
}

export default Nutriention;

const styles = StyleSheet.create({
    container: {
        marginVertical: verticalScale(15),
        paddingVertical: verticalScale(10),
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: Colors.blue325,
        width: horizontalScale(100),
        height: verticalScale(100),
        marginHorizontal: moderateScale(5),
        paddingVertical: verticalScale(10),
        alignItems: 'center',
        borderRadius: moderateScale(10),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    name: {
        fontSize: moderateScale(14),
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontFamily: fonts.medium
    },
    percentages: {
        fontSize: moderateScale(25),
        color: 'white',
        marginTop: verticalScale(10),
        fontFamily: fonts.bold
    },
});