import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, MARGINS, PADDINGS} from '../utils/Constants';

function SocialMediaComponent(props) {
  const {source} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.iconImage} source={source} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: RFValue(45),
    height: RFValue(45),
    borderRadius: RFValue(10),
    marginBottom: RFValue(5),
    borderWidth: 1,
    borderColor: COLORS.mainColor100,
    backgroundColor: COLORS.gray500,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: MARGINS.M15,
  },
  iconImage: {
    width: RFValue(30),
    height: RFValue(30),
  },
});

export default SocialMediaComponent;
