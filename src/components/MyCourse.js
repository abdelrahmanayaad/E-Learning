import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  boldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGINS,
  PADDINGS,
} from '../utils/Constants';

function MyCourse(props) {
  const {image, courseName, hours, mins, lessons, rate} = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.section2}>
        <Text numberOfLines={1} style={styles.courseNameTitle}>
          {courseName}
        </Text>
        <View style={styles.timeView}>
          <AntDesign name="clockcircleo" style={styles.clockIcon} />
          <Text style={styles.contentText}>
            {' ' + hours}h {mins}mins
          </Text>
        </View>
        <View style={styles.lessonView}>
          <Text style={styles.contentText}>{lessons} Lessons</Text>
          <View style={styles.rateView}>
            <FontAwesome name="star" style={styles.starIconStyle} />
            <Text style={styles.contentText}> {rate}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: PADDINGS.P15,
    backgroundColor: COLORS.white100,
    elevation: 2,
    alignItems: 'center',
    borderRadius: RFValue(10),
    marginBottom: MARGINS.M10,
  },
  image: {
    width: RFValue(80),
    height: RFValue(70),
    borderRadius: RFValue(10),
    marginRight: MARGINS.M10,
  },
  courseNameTitle: {
    fontFamily: boldFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.mainColor300,
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  section2: {
    flex: 1,
    justifyContent: 'space-between',
  },
  lessonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  clockIcon: {
    color: COLORS.gray100,
    fontSize: FONTS.F14,
    marginRight: RFValue(2),
  },
  contentText: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.gray100,
  },
  starIconStyle: {
    fontSize: FONTS.F16,
    color: COLORS.yellow100,
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default MyCourse;
