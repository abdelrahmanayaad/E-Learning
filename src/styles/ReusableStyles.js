import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {boldFontFamily, COLORS} from '../utils/Constants';

const ReusableStyles = StyleSheet.create({
  AuthTitles: {
    fontFamily: boldFontFamily,
    fontSize: RFValue(18),
    color: COLORS.black200,
  },
});

export default ReusableStyles;
