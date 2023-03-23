import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import ReusableStyles from '../styles/ReusableStyles';
import {boldFontFamily, COLORS, FONTS, PADDINGS} from '../utils/Constants';
import IconView from './IconView';

function Header(props) {
  const {title, left, right, iconStyle, iconViewColor, leftOnPress} = props;
  return (
    <View style={styles.container}>
      {left && (
        <TouchableOpacity onPress={leftOnPress}>
          <IconView
            name="arrow-back"
            iconStyle={[styles.icon, iconStyle]}
            iconViewStyle={iconViewColor}
          />
        </TouchableOpacity>
      )}
      <Text
        style={[styles.headerTitle, {marginRight: right ? null : RFValue(30)}]}>
        {title}
      </Text>
      {right && (
        <IconView
          name={right}
          iconStyle={[styles.icon, iconStyle]}
          iconViewStyle={iconViewColor}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontFamily: boldFontFamily,
    fontSize: FONTS.F20,
    color: COLORS.mainColor300,
  },
  icon: {
    color: COLORS.mainColor300,
  },
});

export default Header;
