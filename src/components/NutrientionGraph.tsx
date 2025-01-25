import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constant/common/Colors';
import {horizontalScale, screen} from '../constant/Metrics';
import {moderateScale, verticalScale} from 'react-native-size-matters';
import {fonts} from '../constant/common/Fonts';

interface props {
  nutrient: any;
}
const NutrientionGraph: React.FC<props> = ({nutrient}) => {
  console.log('Nutrient -> ', typeof nutrient);

  return (
    <View>
      {nutrient && (
        <View style={styles.box}>
          <Text style={styles.title}>Nutrition Graph</Text>
          <FlatList
            data={nutrient?.slice(0, 7)}
            keyExtractor={(item, index) => `${item.name}-${index}`}
            renderItem={({item}) => {
              return (
                <View style={styles.littlebox}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={[styles.bigline, {width: '80%'}]}>
                    <View style={styles.bigbox}>
                      <View
                        style={[
                          styles.smallline,
                          {width: item.percentage ? item.percentage : '0%'},
                        ]}
                      />
                    </View>
                    <Text style={styles.percentages}>{item.percentage}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: screen.HEIGHT * 0.38,
    backgroundColor: Colors.blue325,
    borderRadius: 20,
    marginBottom: verticalScale(20),
  },
  title: {
    fontSize: moderateScale(20),
    fontFamily: fonts.medium,
    color: 'white',
    alignSelf: 'center',
    marginTop: verticalScale(10),
  },
  littlebox: {
    width: '90%',
    height: verticalScale(20),
    alignSelf: 'center',
    marginVertical: verticalScale(5),
    alignItems: 'center',
    flexDirection: 'row',
  },
  name: {
    fontSize: moderateScale(13),
    color: 'white',
    fontFamily: fonts.regular,
    width: '20%',
  },
  bigline: {
    backgroundColor: '#1D2E42',
    flexDirection: 'row',
    borderRadius: moderateScale(20),
    padding: moderateScale(2),
    justifyContent: 'space-between',
    paddingRight: horizontalScale(10),
  },
  smallline: {
    height: '90%',
    backgroundColor: '#8199B3',
    borderRadius: moderateScale(20),
  },
  percentages: {
    fontFamily: fonts.medium,
    fontSize: moderateScale(12),
    color: 'white',
  },
  bigbox: {
    width: '90%',
    justifyContent: 'center',
    marginRight: horizontalScale(5),
  },
});

export default NutrientionGraph;
