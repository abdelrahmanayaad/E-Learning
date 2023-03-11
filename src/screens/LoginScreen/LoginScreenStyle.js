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
    // alignItems: 'center',
  },
  loginImageStyle: {
    width: '70%',
    height: RFValue(200),
    alignSelf: 'center',
  },
  welcomeText: {
    alignSelf: 'center',
  },
  socialMediaViewStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  haveAccountTextStyle: {
    fontSize: FONTS.F14,
    color: COLORS.black200,
    fontFamily: defaultFontFamily,
    alignSelf: 'center',
  },
  signUpText: {
    fontSize: FONTS.F14,
    color: COLORS.mainColor100,
    fontFamily: boldFontFamily,
    textDecorationLine: 'underline',
  },
  rememberMeView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: MARGINS.M5,
  },
  rememberMe: {
    fontSize: FONTS.F14,
    color: COLORS.black200,
    fontFamily: defaultFontFamily,
  },
  forgetPassword: {
    fontSize: FONTS.F14,
    color: COLORS.gray100,
    fontFamily: defaultFontFamily,
    textDecorationLine: 'underline',
  },
  checkBoxViewStyle: {
    marginLeft: RFValue(-5),
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default styles;
