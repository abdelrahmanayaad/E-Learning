import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGINS,
  PADDINGS,
} from '../utils/Constants';

function ActivityCourse(props) {
  const {image, courseName, ratio} = props;
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View style={styles.sectionTwoWrapper}>
        <View style={styles.courseNameView}>
          <Text style={styles.courseName}>{courseName}</Text>
          <Text style={styles.courseName}>{ratio}%</Text>
        </View>
        <View style={styles.activityWrapper}>
          <View style={[styles.activity, {width: `${ratio}%`}]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white100,
    elevation: 2,
    padding: PADDINGS.P10,
    borderRadius: RFValue(10),
    marginBottom: MARGINS.M10,
  },
  sectionTwoWrapper: {
    flex: 1,
    justifyContent: 'space-around',
  },
  courseNameView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  courseName: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.mainColor300,
  },
  activityWrapper: {
    height: RFValue(8),
    width: '100%',
    backgroundColor: COLORS.gray200,
    borderRadius: RFValue(5),
  },
  activity: {
    height: RFValue(8),
    width: '80%',
    backgroundColor: COLORS.mainColor300,
    borderRadius: RFValue(5),
  },
  image: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: RFValue(5),
    marginRight: MARGINS.M5,
  },
});

export default ActivityCourse;
