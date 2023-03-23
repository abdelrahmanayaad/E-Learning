import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, FONTS} from '../utils/Constants';

function IconView(props) {
  const {name, iconViewStyle, iconStyle} = props;
  return (
    <View style={[styles.iconView, iconViewStyle]}>
      <Icon name={name} style={[styles.icon, iconStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(10),
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: FONTS.F20,
    color: COLORS.mainColor300,
  },
});

export default IconView;
