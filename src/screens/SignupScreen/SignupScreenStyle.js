import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  boldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGINS,
  PADDINGS,
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
    padding: PADDINGS.P10,
    justifyContent: 'space-between',
  },
  signupImageStyle: {
    width: '70%',
    height: RFValue(175),
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
  },
  socialMediaViewStyle: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  haveAccountTextStyle: {
    alignSelf: 'center',
    fontSize: FONTS.F12,
    color: COLORS.black200,
    fontFamily: defaultFontFamily,
  },
  signInText: {
    fontSize: FONTS.F12,
    color: COLORS.mainColor100,
    fontFamily: boldFontFamily,
    textDecorationLine: 'underline',
  },
  errorTextStyle: {
    fontSize: FONTS.F12,
    color: COLORS.red100,
    fontFamily: defaultFontFamily,
    marginBottom: MARGINS.M5,
  },
  inputErrorView: {
    flex: 1,
    // backgroundColor: 'red',
  },
});

export default styles;
