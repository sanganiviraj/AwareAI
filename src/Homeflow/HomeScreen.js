import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import {
  horizontalScale,
  moderateScale,
  screen,
  verticalScale,
} from '../constant/Metrics';
import {adduser, deleteuser} from '../slice/Userslice';

const HomeScreen = () => {
  const [name, setname] = useState('');
  const [imageUri, setImageUri] = useState(null);
  const [userQuestion, setUserQuestion] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const users = useSelector(state => state.users.user);
  const dispatch = useDispatch();

  const pickImage = async () => {
    launchCamera(
      {
        mediaType: 'photo',
        includeBase64: true, // Ensure the image is base64 encoded for API
        maxWidth: 600, // Optional, resize image to reduce size
        maxHeight: 600, // Optional, resize image to reduce size
      },
      response => {
        if (response.didCancel) {
          console.log('User canceled image picker');
        } else if (response.errorCode) {
          console.error('ImagePicker Error:', response.errorMessage);
        } else {
          setImageUri(response.assets[0].uri);
        }
      },
    );
  };

  // Function to handle the API request
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
      });
      formData.append('userQuestion', userQuestion);
      formData.append('category', productCategory);

      const response = await axios.post(
        'https://nodewithcrud.onrender.com/analyze',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      );

      setResponse(response.data.analysis);
      console.log('Response -> ', response.data.analysis);
    } catch (error) {
      console.error('Error analyzing product:', error);
      alert('An error occurred while analyzing the product.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.screen}>
      <Button title="Pick an image" onPress={pickImage} />
      {imageUri && (
        <Image
          source={{uri: imageUri}}
          style={{width: 200, height: 200, marginVertical: 10}}
        />
      )}
      <TextInput
        placeholder="Enter your question"
        placeholderTextColor="black"
        value={userQuestion}
        onChangeText={setUserQuestion}
        style={{
          width: '80%',
          padding: 10,

          borderWidth: 1,
          borderRadius: 5,
          marginVertical: 10,
          alignSelf: 'center',
        }}
      />
      <TextInput
        placeholder="Enter product category (grocery, skincare, etc.)"
        placeholderTextColor="black"
        value={productCategory}
        onChangeText={setProductCategory}
        style={{
          width: '80%',
          padding: 10,
          borderWidth: 1,
          borderRadius: 5,
          marginVertical: 10,
          alignSelf: 'center',
        }}
      />
      <Button
        title="Analyze Product"
        onPress={handleAnalyze}
        disabled={loading}
      />

      {loading && <Text>Loading...</Text>}

      {response && (
        <View style={{marginTop: 20}}>
          <Text>Analysis Result:</Text>
          <Text>{JSON.stringify(response, null, 2)}</Text>
        </View>
      )}

      <View style={{height: 70}} />
      <TextInput
        style={styles.inputstyle}
        value={name}
        onChangeText={val => {
          setname(val);
        }}
        placeholder="Enter a name"
        placeholderTextColor="grey"
      />

      <TouchableOpacity
        style={styles.btnstyle}
        onPress={() => dispatch(adduser({name}))}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>

      {users.length > 0 ? (
        <FlatList
          data={users}
          renderItem={({item, index}) => {
            return (
              <View style={styles.usrlist}>
                <Text style={{color: 'black'}}>{item.name} </Text>
                <Text
                  style={{color: 'black'}}
                  onPress={() => {
                    dispatch(deleteuser(index));
                  }}>
                  Delete{' '}
                </Text>
                <Text style={{color: 'black'}}>Update</Text>
              </View>
            );
          }}
        />
      ) : (
        <Text style={styles.notavailablestyle}>Not available</Text>
      )}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  usrlist: {
    width: (screen.WIDTH * 80) / 100,
    paddingVertical: verticalScale(2),
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: verticalScale(10),
  },
  notavailablestyle: {
    fontSize: moderateScale(18),
    color: 'black  ',
    marginLeft: horizontalScale(15),
    marginTop: verticalScale(20),
  },
  inputstyle: {
    borderColor: 'grey',
    borderWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    width: (screen.WIDTH * 90) / 100,
  },
  btnstyle: {
    width: (screen.WIDTH * 35) / 100,
    height: (screen.HEIGHT * 5) / 100,
    backgroundColor: 'green',
    borderRadius: 10,
    marginVertical: verticalScale(10),
    marginLeft: verticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
