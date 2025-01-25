import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {horizontalScale, screen} from '../constant/Metrics';
import {moderateScale, verticalScale, vs} from 'react-native-size-matters';
import {images} from '../constant/common/Images';
import {fonts} from '../constant/common/Fonts';
import {Colors} from '../constant/common/Colors';

interface props {
  ingredients: any;
}

const Ingredient: React.FC<props> = ({ingredients}) => {
  const [open, setOpen] = useState<boolean>(false);

  const colors = [
    '#C3E8C1',
    '#C7F5FE',
    '#F0E0F8',
    '#E9FCD2',
    '#FFD5DD',
    '#FFF2B2',
    '#F5C9A6',
  ];

  return (
    <View>
      {ingredients && (
        <View style={styles.box}>
          <View style={styles.titlebox}>
            <Text style={styles.title}>Ingredients</Text>

            <TouchableOpacity
              onPress={() => {
                setOpen(!open);
              }}>
              <Image
                style={styles.upAndDown}
                source={open ? images.uparrow : images.downarrow}
              />
            </TouchableOpacity>
          </View>

          {open && (
            <View style={styles.details}>
              <ScrollView
                contentContainerStyle={styles.wrapper}
                horizontal={false} // Allows vertical scrolling
              >
                {ingredients
                  ?.slice(0, 10)
                  .map((item: string, index: number) => {
                    const randomColor =
                      colors[Math.floor(Math.random() * colors.length)];

                    return (
                      <View
                        key={`${item}-${index}`}
                        style={[
                          styles.ingredientbox,
                          {backgroundColor: randomColor},
                        ]}>
                        <Text style={styles.ingtext}>{item}</Text>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default Ingredient;

const styles = StyleSheet.create({
  box: {
    width: screen.WIDTH * 0.9,
    paddingVertical: vs(10),
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 10,
  },
  titlebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
  },
  wrapper: {
    flexDirection: 'row', // Lay items out in rows
    flexWrap: 'wrap', // Enable wrapping to next row
    justifyContent: 'flex-start', // Align items to the left
    gap: 10, // Add space between items (React Native >= 0.71)
  },
  upAndDown: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: moderateScale(18),
    fontFamily: fonts.regular,
    color: Colors.blue325,
  },
  details: {
    width: '90%',
    paddingHorizontal: horizontalScale(10),
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: verticalScale(10),
  },
  ingredientbox: {
    alignSelf: 'flex-start', // Shrink to content width
    backgroundColor: '#f0f0f0', // Light background for visibility
    paddingHorizontal: horizontalScale(10), // Horizontal padding inside the box
    paddingVertical: 5, // Vertical padding inside the box
    borderRadius: 8, // Rounded corners
    marginVertical: 2, // Space between boxes
  },
  ingtext: {
    fontSize: moderateScale(15),
    fontFamily: fonts.regular,
    color: 'black',
  },
});
