import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constant/common/Colors';
import {ms, s, vs} from 'react-native-size-matters';
import {fonts} from '../constant/common/Fonts';
import Icon from '../constant/Icons';

interface Props {
  sideEffects: any;
  StorageInstructions: any;
  UsageInstructions: any;
  UserQuestion: any;
  expiryDate: any;
  productBenefits: any;
  warnings: any;
}

const ProductInfo: React.FC<Props> = ({
  sideEffects,
  StorageInstructions,
  UsageInstructions,
  UserQuestion,
  expiryDate,
  productBenefits,
  warnings,
}) => {
  console.log('sideeffect ->', sideEffects);
  console.log('StorageInstructions ->', StorageInstructions);
  console.log('UsageInstructions ->', UsageInstructions);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0'); // Ensure day has two digits
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure month has two digits
    const year = date.getFullYear(); // Get the full year

    return `${day}-${month}-${year}`; // Format as "dd-mm-yyyy"
  };
  return (
    <View style={styles.main}>
      {sideEffects && (
        <View>
          <Text style={styles.title}>Side Effects :</Text>
          {sideEffects.map(
            (value: any, index: React.Key | null | undefined) => {
              return (
                <View key={index} style={styles.infoconatiner}>
                  <View style={{top: vs(2)}}>
                    <Icon
                      type={'Entypo'}
                      name="dot-single"
                      color="black"
                      size={14}
                    />
                  </View>
                  <Text style={styles.txtinfo}>{value}</Text>
                </View>
              );
            },
          )}
        </View>
      )}
      {StorageInstructions && (
        <View style={styles.box}>
          <Text style={styles.title}>Storage Instructions : </Text>
          {StorageInstructions.map(
            (value: any, index: React.Key | null | undefined) => {
              return (
                <View key={index} style={styles.infoconatiner}>
                  <View style={{top: vs(2)}}>
                    <Icon
                      type={'Entypo'}
                      name="dot-single"
                      color="black"
                      size={14}
                    />
                  </View>
                  <Text style={styles.txtinfo}>{value}</Text>
                </View>
              );
            },
          )}
        </View>
      )}

      {UsageInstructions && (
        <View style={styles.box}>
          <Text style={styles.title}>Storage Instructions : </Text>
          {UsageInstructions.map(
            (value: any, index: React.Key | null | undefined) => {
              return (
                <View key={index} style={styles.infoconatiner}>
                  <View style={{top: vs(2)}}>
                    <Icon
                      type={'Entypo'}
                      name="dot-single"
                      color="black"
                      size={14}
                    />
                  </View>
                  <Text style={styles.txtinfo}>{value}</Text>
                </View>
              );
            },
          )}
        </View>
      )}

      {expiryDate && (
        <View style={styles.box}>
          <Text style={styles.title}>Expiry-Date : </Text>

          <View style={styles.infoconatiner}>
            <View style={{top: vs(2)}}>
              <Icon type={'Entypo'} name="dot-single" color="black" size={14} />
            </View>
            <Text style={styles.txtinfo}>{formatDate(expiryDate)}</Text>
          </View>
        </View>
      )}

      {UserQuestion && (
        <View style={styles.questionbox}>
          <View style={styles.questonconatiner}>
            <Icon
              name="questioncircleo"
              type="AntDesign"
              color="white"
              size={19}
            />
            <View style={styles.questiondetail}>
              <Text style={styles.qtitle}>User Question : </Text>
              <Text style={styles.txtanswer}>{UserQuestion}</Text>
            </View>
          </View>
        </View>
      )}
      {warnings && productBenefits && (
        <View style={styles.mainbox}>
          <View style={{flexDirection: 'row'}}>
            {/* Warning Section */}
            <View style={[styles.box1, {borderRightColor: 'transparent'}]}>
              <Text style={styles.sectionTitle}>Warning</Text>
              {warnings.map(
                (
                  value:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined,
                  index: React.Key | null | undefined,
                ) => (
                  <View
                    key={index}
                    style={[
                      styles.innerline,
                      {borderLeftColor: 'transparent'},
                    ]}>
                    <Icon
                      type="Entypo"
                      name="dot-single"
                      color="white"
                      size={12}
                    />
                    <Text style={styles.txttopic}>{value}</Text>
                  </View>
                ),
              )}
            </View>

            {/* Benefits Section */}
            <View style={[styles.box1, {borderLeftColor: 'white'}]}>
              <Text style={styles.sectionTitle}>Benefits</Text>
              {productBenefits.map(
                (
                  value:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined,
                  index: React.Key | null | undefined,
                ) => (
                  <View
                    key={index}
                    style={[
                      styles.innerline,
                      {
                        borderRightColor: 'transparent',
                        borderLeftColor: 'transparent',
                      },
                    ]}>
                    <Icon
                      type="Entypo"
                      name="dot-single"
                      color="white"
                      size={12}
                    />
                    <Text style={styles.txttopic}>{value}</Text>
                  </View>
                ),
              )}
            </View>
          </View>
        </View>
      )}
      {warnings && (
        <View style={styles.warningbox}>
          <View style={styles.innerbox}>
            <Text style={styles.txtwarning}>Warning</Text>
          </View>
          <View style={styles.details}>
            {warnings.map(
              (
                value:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined,
                index: React.Key | null | undefined,
              ) => {
                return (
                  <Text key={index} style={styles.txtwarninginfo}>
                    {value}
                  </Text>
                );
              },
            )}
          </View>
        </View>
      )}

      {productBenefits && (
        <View style={[styles.warningbox, {marginTop: vs(14)}]}>
          <View style={[styles.innerbox, {backgroundColor: Colors.green}]}>
            <Text style={styles.txtwarning}>Product Benefits</Text>
          </View>
          <View style={[styles.details, {backgroundColor: Colors.lightgreen}]}>
            {productBenefits.map(
              (
                value:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | null
                  | undefined,
                index: React.Key | null | undefined,
              ) => {
                return (
                  <Text key={index} style={styles.txtwarninginfo}>
                    {value}
                  </Text>
                );
              },
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default ProductInfo;

const styles = StyleSheet.create({
  main: {
    marginBottom: vs(14),
    paddingLeft: s(5),
  },
  box: {
    marginTop: vs(14),
    // backgroundColor: 'red',
  },
  title: {
    color: Colors.darkblue,
    fontSize: s(15),
    lineHeight: s(22),
    fontFamily: fonts.medium,
  },
  infoconatiner: {
    flexDirection: 'row',
  },
  txtinfo: {
    fontFamily: fonts.regular,
    color: '#000000',
    fontSize: s(11.5),
  },
  questionbox: {
    marginTop: vs(14),
    paddingLeft: s(15),
    paddingRight: s(10),
    paddingVertical: vs(6),
    backgroundColor: Colors.darkgrey,
    borderRadius: ms(18),
    flexWrap: 'wrap',
  },
  questonconatiner: {
    flexDirection: 'row',
  },
  questiondetail: {
    flex: 1,
    paddingLeft: s(7),
    paddingRight: s(18),
  },
  qtitle: {
    fontFamily: fonts.semibold,
    color: Colors.white,
    fontSize: s(13),
    lineHeight: vs(18),
  },
  txtanswer: {
    fontFamily: fonts.regular,
    marginRight: s(15),
    color: Colors.white,
    fontSize: s(10),
    textAlign: 'justify',
    lineHeight: s(15),
  },
  mainbox: {
    backgroundColor: Colors.blue325,
    marginVertical: vs(14),
    borderRadius: ms(15),
    overflow: 'hidden',
  },
  box1: {
    flex: 1,
    borderTopColor: 'transparent',
    borderWidth: ms(1.2),
    paddingHorizontal: s(10),
    borderBottomColor: 'transparent',
  },
  sectionTitle: {
    color: Colors.white,
    fontFamily: fonts.bold,
    fontSize: s(16),
    textAlign: 'center',
  },
  topicconatiner: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  innerline: {
    flex: 1,
    paddingHorizontal: s(2),
    flexDirection: 'row',
    paddingVertical: vs(4),
    borderRightColor: 'transparent',
    borderWidth: ms(1),
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  txttopic: {
    color: Colors.white,
    fontFamily: fonts.medium,
    fontSize: s(10),
    lineHeight: s(15),
  },
  warningbox: {
    borderRadius: ms(15),
  },
  innerbox: {
    borderTopLeftRadius: ms(14),
    borderTopRightRadius: ms(14),
    paddingVertical: vs(2),
    backgroundColor: 'red',
  },
  txtwarning: {
    textAlign: 'center',
    color: Colors.white,
    fontFamily: fonts.bold,
    fontSize: s(13),
  },
  details: {
    paddingHorizontal: s(15),
    backgroundColor: Colors.pitch,
    paddingVertical: vs(8),
    borderBottomLeftRadius: ms(14),
    borderBottomRightRadius: ms(14),
  },
  txtwarninginfo: {
    color: 'black',
    fontSize: s(12),
    fontFamily: fonts.medium,
    textAlign: 'center',
  },
});
