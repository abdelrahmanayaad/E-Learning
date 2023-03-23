import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/AntDesign';
import {
  boldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGINS,
} from '../utils/Constants';

function LessonList(props) {
  const renderListHandler = ({item, index}) => {
    return (
      <View style={styles.container}>
        <View style={styles.section1}>
          <View style={styles.circle}>
            <Icon name="caretright" style={styles.rightIcon} />
          </View>
          <View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.videos}>{item.videos} Videos</Text>
          </View>
        </View>
        <View>
          <Icon name="right" style={styles.right} />
        </View>
      </View>
    );
  };
  const {data} = props;
  return <FlatList data={data} renderItem={renderListHandler} />;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGINS.M10,
  },
  section1: {
    flexDirection: 'row',
  },
  circle: {
    width: RFValue(44),
    height: RFValue(44),
    borderRadius: RFValue(22),
    backgroundColor: COLORS.gray200,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MARGINS.M5,
  },
  rightIcon: {
    fontSize: FONTS.F20,
    color: COLORS.mainColor300,
  },
  name: {
    fontFamily: boldFontFamily,
    fontSize: FONTS.F15,
    color: COLORS.mainColor300,
  },
  videos: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.gray100,
  },
  right: {
    fontSize: FONTS.F16,
    color: COLORS.mainColor300,
  },
});

export default LessonList;
