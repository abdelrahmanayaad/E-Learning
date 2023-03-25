import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  boldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGINS,
  PADDINGS,
} from '../utils/Constants';

function Notification(props) {
  const {image, iconName, instructor, course, time} = props;
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}>
        <View style={styles.iconView}>
          <Ionicons name={iconName} style={styles.seenIcon} />
        </View>
      </ImageBackground>
      <View style={styles.section2}>
        <Text numberOfLines={2}>
          <Text style={styles.names}>{instructor} </Text>
          updated information
          <Text style={styles.names}> {course}</Text>
        </Text>
        <Text style={styles.date}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    paddingVertical: PADDINGS.P10,
    borderBottomColor: COLORS.gray100,
  },
  image: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(10),
    backgroundColor: COLORS.gray200,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: MARGINS.M10,
  },
  iconView: {
    width: RFValue(14),
    height: RFValue(14),
    borderRadius: RFValue(7),
    backgroundColor: COLORS.mainColor300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seenIcon: {
    color: COLORS.white100,
    fontSize: FONTS.F10,
  },
  section2: {
    flex: 1,
    justifyContent: 'space-between',
  },
  names: {
    fontFamily: boldFontFamily,
    color: COLORS.mainColor300,
  },
  date: {
    fontFamily: defaultFontFamily,
    color: COLORS.gray100,
  },
});

export default Notification;
