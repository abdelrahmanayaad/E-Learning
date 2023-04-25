import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  PADDINGS,
  MARGINS,
  COLORS,
  FONTS,
  defaultFontFamily,
  boldFontFamily,
} from '../../utils/Constants';

const styles = StyleSheet.create({
  container: {
    padding: PADDINGS.P10,
  },
  headerView: {
    marginBottom: MARGINS.M10,
  },
  profileImageViewStyle: {
    width: RFValue(120),
    height: RFValue(120),
    borderRadius: RFValue(60),
    backgroundColor: COLORS.gray200,
    alignSelf: 'center',
    marginTop: MARGINS.M20,
  },
  profileImageStyle: {
    width: RFValue(120),
    height: RFValue(120),
    borderRadius: RFValue(60),
    alignSelf: 'center',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  penView: {
    width: RFValue(26),
    height: RFValue(26),
    borderRadius: RFValue(13),
    backgroundColor: COLORS.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: RFValue(10),
  },
  penIcon: {
    color: COLORS.mainColor300,
    fontSize: FONTS.F14,
  },
  nameView: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: MARGINS.M5,
    marginBottom: MARGINS.M30,
  },
  name: {
    marginBottom: 0,
  },
  email: {
    fontFamily: defaultFontFamily,
    color: COLORS.gray100,
    fontSize: FONTS.F14,
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGINS.M25,
  },
  iconList: {
    color: COLORS.mainColor300,
    fontSize: FONTS.F14,
  },
  nameIconView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconViewStyle: {
    backgroundColor: COLORS.gray200,
    width: RFValue(30),
    height: RFValue(30),
    marginRight: MARGINS.M10,
  },
  rightIconViewStyle: {
    backgroundColor: COLORS.gray200,
  },
  listName: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F15,
    color: COLORS.mainColor300,
  },
});

export default styles;
