import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import axios from 'axios';
import { launchCamera, ImagePickerResponse } from 'react-native-image-picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { HomeStackParamslist } from '../navigations/Homenavigation';
import {
  horizontalScale,
  moderateScale,
  screen,
  verticalScale,
} from '../constant/Metrics';

interface HomeScreenProps {
  navigation: StackNavigationProp<HomeStackParamslist, 'HomeScreen'>;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [userQuestion, setUserQuestion] = useState<string>('');
  const [productCategory, setProductCategory] = useState<string>('');
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  console.log("navigation  -> " ,navigation);
  
  const pickImage = async () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true,
        maxWidth: 600,
        maxHeight: 600,
      },
      (response: ImagePickerResponse) => {
        if (response.didCancel) {
          console.log('User canceled image picker');
        } else if (response.errorCode) {
          console.error('ImagePicker Error:', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImageUri(response.assets[0].uri || null);
        }
      }
    );
  };

  const handleAnalyze = async () => {
    if (!imageUri || !productCategory) {
      alert('Please upload an image and select a category');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        name: 'product-image.jpg',
        type: 'image/jpeg',
      } as any);
      formData.append('userQuestion', userQuestion);
      formData.append('category', productCategory);

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
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Pick an image" onPress={pickImage} />

      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          style={styles.imagePreview}
        />
      )}

      <TextInput
        placeholder="Enter your question"
        placeholderTextColor="black"
        value={userQuestion}
        onChangeText={setUserQuestion}
        style={styles.input}
      />

      <TextInput
        placeholder="Enter product category (grocery, skincare, etc.)"
        placeholderTextColor="black"
        value={productCategory}
        onChangeText={setProductCategory}
        style={styles.input}
      />

      <Button
        title="Analyze Product"
        onPress={handleAnalyze}
        disabled={loading}
      />

      {loading && <Text style={styles.loadingText}>Loading...</Text>}

      {response && (
        <View style={styles.responseContainer}>
          <Text>Analysis Result:</Text>
          <Text>{JSON.stringify(response, null, 2)}</Text>
        </View>
      )}

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 10,
    alignSelf: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: 'center',
  },
  nameInput: {
    borderColor: 'grey',
    borderWidth: 1,
    alignSelf: 'center',
    width: (screen.WIDTH * 90) / 100,
    padding: 10,
    marginVertical: verticalScale(10),
  },
  submitButton: {
    width: (screen.WIDTH * 35) / 100,
    height: (screen.HEIGHT * 5) / 100,
    backgroundColor: 'green',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  submitButtonText: {
    color: 'white',
  },
  userListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(15),
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: verticalScale(5),
    alignSelf: 'center',
    width: '90%',
  },
  userName: {
    fontSize: moderateScale(14),
    color: 'black',
  },
  deleteText: {
    fontSize: moderateScale(14),
    color: 'red',
  },
  noUsersText: {
    fontSize: moderateScale(18),
    color: 'black',
    textAlign: 'center',
    marginTop: verticalScale(20),
  },
  responseContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  loadingText: {
    textAlign: 'center',
    marginVertical: 10,
  },
});
