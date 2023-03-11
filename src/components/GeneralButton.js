import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {boldFontFamily, COLORS, FONTS, MARGINS} from '../utils/Constants';
import Icon from 'react-native-vector-icons/AntDesign';

function GeneralButton(props) {
  const {style, title} = props;
  return (
    <TouchableOpacity style={[styles.button, style]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: RFValue(10),
    height: RFValue(45),
    backgroundColor: COLORS.black200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: FONTS.F16,
    color: COLORS.white100,
    fontFamily: boldFontFamily,
  },
});

export default GeneralButton;
