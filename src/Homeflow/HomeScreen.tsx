import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamslist } from '../navigations/Homenavigation';
import {
  horizontalScale,
  moderateScale,
  screen,
  verticalScale,
} from '../constant/Metrics';
import { images } from '../constant/common/Images';
import { fonts } from '../constant/common/Fonts';
import { Colors } from '../constant/common/Colors';
import { RouteProp } from '@react-navigation/native';
import Ingredient from '../components/Ingredient';
import Nutriention from '../components/Nutriention';
import NutrientionGraph from '../components/NutrientionGraph';
import LottieView from 'lottie-react-native';
import { lottyAnim } from '../constant/common/Lottyanimation';
import InputAnalyzer from '../components/InputAnalyzer';

interface HomeScreenProps {
  navigation: StackNavigationProp<HomeStackParamslist, 'HomeScreen'>,
  route: RouteProp<HomeStackParamslist, 'HomeScreen'>; // Add the route type
}

type Item = {
  label: string;
  value: string;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ route }) => {
  let { imageUri } = route.params;
  const [userquestion, setUserquestion] = useState<string>('');
  const [items, setItems] = useState<Item[]>([
    { label: 'Food', value: 'food' },
    { label: 'Grocery', value: 'grocery' },
  ]);
  const [value, setValue] = useState<string>('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [showAnimation, setShowAnimation] = useState<boolean>(false);
  const [analyze, setAnalyze] = useState<boolean>(false);

  const handleAnalyze = async () => {
    if (!imageUri || !value) {
      alert('Please upload an image and select a category');
      return;
    }

    setLoading(true);
    setShowAnimation(true);
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        name: 'product-image.jpg',
        type: 'image/jpeg',
      } as any);
      formData.append('userQuestion', userquestion);
      formData.append('category', value);

      const { data } = await axios.post(
        'https://nodewithcrud.onrender.com/analyze',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      setResponse(data.analysis);
      console.log('Response -> ', data.analysis);
    } catch (error) {
      console.error('Error analyzing product:', error);
      alert('An error occurred while analyzing the product.');
    } finally {
      setLoading(false);
      setShowAnimation(false);
    }
  };

  return (
    <View style={styles.container}>

      <View style={styles.headerContent}>
        <Image
          style={styles.backbutton}
          source={images.backarrow}
        />
        <Text style={styles.screenTitle}>
          Product Review
        </Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >

        {imageUri &&
          (
            <Image
              source={{ uri: imageUri }}
              style={styles.imagePreview}
            />
          )}

        {showAnimation &&
          (
            <LottieView
              source={lottyAnim.scan}
              style={styles.scananimation}
              autoPlay loop />
          )
        }

        {analyze ?
          <View>

            {
              response && <View style={styles.titlebox}>
                <Text style={styles.productName}>
                  {response.productName}
                </Text>

                <Image
                  source={require('../assets/img/favorite.png')}
                  style={styles.favorite}
                />
              </View>
            }

            <Ingredient ingredients={response && response.ingredients} />

            <Nutriention nutrient={response && response.nutrientComposition} />

            <NutrientionGraph nutrient={response && response.nutrientComposition} />

          </View>
          :
          <View>

            <InputAnalyzer
              userquestion={userquestion}
              setUserquestion={setUserquestion}
              value={value}
              setValue={setValue}
              items={items}
              setItems={setItems}
              setAnalyze={setAnalyze}
              handleAnalyze={handleAnalyze}
            />

          </View>
        }

        {loading && <Text style={styles.loadingText}>Loading...</Text>}

      </ScrollView>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: screen.WIDTH,
    height: screen.HEIGHT,
    backgroundColor: Colors.lightvblue,
    paddingHorizontal: horizontalScale(15),
  },
  scroll: {
    width: '100%',
    height: '100%',
  },
  imagePreview: {
    width: '100%',
    aspectRatio: 1.2, // Aspect ratio to maintain the proportionality
    marginVertical: verticalScale(10),
    borderRadius: 10,
    alignSelf: 'center',
  },
  scananimation: {
    width: '100%',
    aspectRatio: 1, // Aspect ratio to maintain the proportionality
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  headerContent: {
    width: "100%",
    paddingVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  backbutton: {
    width: 40,
    height: 40,
  },
  screenTitle: {
    fontSize: moderateScale(20),
    fontFamily: fonts.medium,
    color: Colors.darkblue,
  },
  productName: {
    fontSize: moderateScale(20),
    fontFamily: fonts.medium,
    width: '80%',
  },
  titlebox: {
    alignItems: 'center',
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(5),
    paddingVertical: verticalScale(10),
  },
  favorite: {
    width: 40,
    height: 40,
  }
});
