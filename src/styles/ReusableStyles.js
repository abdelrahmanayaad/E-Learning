import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  boldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
} from '../utils/Constants';

const ReusableStyles = StyleSheet.create({
  AuthTitles: {
    fontFamily: boldFontFamily,
    fontSize: RFValue(18),
    color: COLORS.black200,
  },
  contentTextBold: {
    fontFamily: boldFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.mainColor400,
  },
  contentText: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.mainColor400,
  },
  textTitle: {
    fontFamily: boldFontFamily,
    fontSize: FONTS.F18,
    color: COLORS.mainColor400,
  },
});

export default ReusableStyles;
