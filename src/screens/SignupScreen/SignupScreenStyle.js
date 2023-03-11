import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  boldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGINS,
} from '../../utils/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white100,
  },
  marginBottom: {
    marginBottom: MARGINS.M15,
  },
  contentStyle: {
    padding: MARGINS.M10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  signupImageStyle: {
    width: '70%',
    height: RFValue(200),
  },
  socialMediaViewStyle: {
    flexDirection: 'row',
  },
  haveAccountTextStyle: {
    fontSize: FONTS.F14,
    color: COLORS.black200,
    fontFamily: defaultFontFamily,
  },
  signInText: {
    fontSize: FONTS.F14,
    color: COLORS.mainColor100,
    fontFamily: boldFontFamily,
    textDecorationLine: 'underline',
  },
});

export default styles;
