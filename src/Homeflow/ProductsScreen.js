import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../common/Colors';
import {ms, s, vs} from 'react-native-size-matters';
import {fonts} from '../common/Fonts';
import {images} from '../common/Images';
import Icon, {Icons} from '../constant/Icons';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const ProductsScreen = () => {
  const [visible, setVisible] = useState(true);
  const array = [
    'Himalaya Gentle Daily Care Protein Shampoo',
    'Scalpe Anti Hairfall Shampoo',
    'Himalaya Gentle Daily Care Protein Shampoo',
    'Scalpe Anti Hairfall Shampoo',
  ];

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.headerbox}>
          <View>
            <Text style={styles.username}>Hi, Jayesh</Text>
            <Text style={styles.greeting}>
              Good Morning , How can I help you ?
            </Text>
          </View>
          <Image source={images.man} />
        </View>
        <View style={styles.productsconatiner}>
          <View style={styles.sliderbox}>
            <Image source={images.sliderimg} style={styles.sliderimg} />
          </View>
          <View style={styles.scanningbox}>
            <TouchableOpacity style={styles.scanbtn}>
              <Icon
                type={Icons.MaterialCommunityIcons}
                name="line-scan"
                color={'#1A324D'}
                size={25}
              />
            </TouchableOpacity>
            <View style={{alignSelf: 'center', marginHorizontal: 'auto'}}>
              <Text style={styles.txtscan}>Use AI to Scan your Product</Text>
            </View>
            <TouchableOpacity style={styles.frwdbtn}>
              <Image source={images.forward} style={styles.forwardbtnimg} />
            </TouchableOpacity>
          </View>

          <Modal visible={visible} transparent={true} animationType="slide">
            <TouchableWithoutFeedback
              onPress={() => {
                console.log('Tapped outside, closing modal');
                handleCloseModal();
              }}></TouchableWithoutFeedback>

            <View style={styles.overlay}>
              <View style={styles.modalview}>
                <View style={styles.modalbox}>
                  <TouchableOpacity
                    style={[styles.btncamera, {marginBottom: vs(15)}]}>
                    <Text style={styles.txtmodal}>Use Camera</Text>
                    <Image source={images.camera} style={styles.imgcamera} />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btncamera}>
                    <Text style={styles.txtmodal}>Pick From Gallery</Text>
                    <Image source={images.gallery} style={styles.imgcamera} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>

          <View style={styles.prodcutlistview}>
            <View style={styles.titlebox}>
              <Text style={styles.producttitle}>Recent Products</Text>
              <TouchableOpacity style={{flexDirection: 'row'}}>
                <Text style={styles.txtviewmore}>View more</Text>
                <Image source={images.rightarrow} style={styles.rightarrow} />
              </TouchableOpacity>
            </View>
            <View style={styles.prdctconatainer}>
              {array.map((value, index) => {
                return (
                  <View key={index} style={styles.productbox}>
                    <Image
                      source={images.tshirt}
                      style={[
                        styles.productimg,
                        {height: index % 2 !== 0 ? vs(160) : vs(95)},
                      ]}
                    />
                    <View style={styles.productnamebox}>
                      <Text numberOfLines={3} style={styles.productxt}>
                        {value}
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingVertical: vs(10),
    backgroundColor: Colors.lightvblue,
  },
  headerbox: {
    paddingHorizontal: s(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  username: {
    color: 'black',
    fontSize: s(18),
    fontFamily: fonts.semibold,
  },
  greeting: {
    color: 'black',
    fontSize: s(13),
    fontFamily: fonts.regular,
  },
  productsconatiner: {
    flex: 1,
    paddingHorizontal: s(15),
    paddingVertical: vs(15),
    backgroundColor: Colors.white,
    borderRadius: ms(25),
    marginTop: vs(10),
  },
  sliderbox: {
    marginHorizontal: s(15),
    alignSelf: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalview: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: ms(25),
    borderTopRightRadius: ms(25),
    paddingVertical: s(20),
    paddingHorizontal: s(20),
    elevation: 10,
  },
  modalbox: {
    // alignItems: 'center',
    justifyContent: 'center',
  },
  btncamera: {
    flexDirection: 'row',
    paddingVertical: s(10),
    borderColor: Colors.greyBEC,
    borderRadius: ms(15),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: ms(1),
  },
  txtmodal: {
    fontFamily: fonts.medium,
    color: Colors.darkblue,
    fontSize: s(14.5),
  },
  imgcamera: {
    // backgroundColor: 'red',
    marginLeft: s(8),
    height: vs(16),
    width: s(20),
    resizeMode: 'cover',
  },
  sliderimg: {
    width: s(320),
    borderRadius: ms(20),
    resizeMode: 'cover',
  },
  scanningbox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vs(5),
    backgroundColor: Colors.darkblue,
    marginVertical: vs(18),
    borderRadius: ms(14),
    paddingHorizontal: s(8),
  },
  scanbtn: {
    paddingVertical: vs(3),
    paddingHorizontal: s(5),
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: ms(12),
    justifyContent: 'center',
    backgroundColor: Colors.darkgrey,
  },
  txtscan: {
    color: Colors.white,
  },
  frwdbtn: {
    paddingHorizontal: s(10),
    paddingVertical: vs(5),
  },
  forwardbtnimg: {
    height: vs(11),
    width: s(15),
    resizeMode: 'contain',
  },

  prodcutlistview: {
    flex: 1,
  },
  producttitle: {
    fontSize: s(15),
    color: 'black',
    fontFamily: fonts.medium,
  },
  txtviewmore: {
    color: Colors.grey587,
    fontFamily: fonts.medium,
    fontSize: s(12),
  },
  rightarrow: {
    height: vs(20),
    width: s(25),
    resizeMode: 'cover',
  },
  prdctconatainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  productbox: {
    paddingVertical: vs(5),
    paddingHorizontal: s(5),
    alignSelf: 'flex-start',
  },
  titlebox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vs(8),
  },
  productnamebox: {
    width: s(130),
    marginVertical: vs(5),
  },
  productxt: {
    color: 'black',
    fontFamily: fonts.regular,
    fontSize: s(12),
  },
  productimg: {
    width: s(149),
    borderRadius: s(18),
    height: vs(95),
    resizeMode: 'stretch',
  },
});
