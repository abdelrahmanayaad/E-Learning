import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ReusableStyles from '../styles/ReusableStyles';
import {
  boldFontFamily,
  defaultFontFamily,
  COLORS,
  FONTS,
  MARGINS,
} from '../utils/Constants';

function CoursePoster(props) {
  const {
    style,
    backgroundImage,
    profileImage,
    name,
    courseName,
    hours,
    mins,
    lectures,
    rate,
    ...rest
  } = props;
  return (
    <TouchableOpacity {...rest} style={[styles.container, style]}>
      <ImageBackground
        borderTopLeftRadius={RFValue(10)}
        borderTopRightRadius={RFValue(10)}
        resizeMode="cover"
        resizeMethod="scale"
        style={styles.image}
        source={backgroundImage}>
        <TouchableOpacity style={styles.heartView}>
          <Icon name="heart-o" style={styles.icon} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.footer}>
        <View style={styles.personDetailsView}>
          <Image style={styles.profileImage} source={profileImage} />
          <Text style={styles.instructorName}>
            {name ? name : 'Abdelrahman Ayad'}
          </Text>
        </View>
        <Text style={styles.courseName}>{courseName}</Text>
        <View style={styles.courseDetailsView}>
          <View style={styles.timeView}>
            <AntDesign name="clockcircleo" style={styles.clockIcon} />
            <Text style={styles.timeText}>
              {' '}
              {hours}h {mins}min . {lectures} Lecture
            </Text>
          </View>
          <View style={styles.rateView}>
            <Icon name="star" style={styles.starIconStyle} />
            <Text> {rate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: RFValue(190),
    height: RFValue(280),
    marginBottom: RFValue(2),
    elevation: 1,
    backgroundColor: COLORS.white100,
    borderRadius: RFValue(10),
  },
  image: {
    width: '100%',
    height: RFValue(160),
    borderTopRightRadius: RFValue(10),
    borderTopLeftRadius: RFValue(10),
  },
  heartView: {
    width: RFValue(30),
    height: RFValue(30),
    borderRadius: RFValue(15),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white100,
    alignSelf: 'flex-end',
    margin: RFValue(5),
  },
  icon: {
    fontSize: FONTS.F20,
    color: COLORS.gray100,
  },
  footer: {
    flex: 1,
    margin: MARGINS.M5,
    justifyContent: 'space-between',
  },
  profileImage: {
    width: RFValue(40),
    height: RFValue(40),
    borderRadius: RFValue(20),
    backgroundColor: COLORS.gray200,
    marginRight: MARGINS.M5,
  },
  personDetailsView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseName: {
    fontFamily: boldFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.mainColor400,
  },
  instructorName: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F12,
    color: COLORS.mainColor400,
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    color: COLORS.gray100,
    fontSize: FONTS.F12,
  },
  timeText: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F12,
    color: COLORS.gray100,
  },
  courseDetailsView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  starIconStyle: {
    fontSize: FONTS.F14,
    color: COLORS.yellow100,
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CoursePoster;
