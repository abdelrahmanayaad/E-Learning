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
    paddingTop: PADDINGS.P10,
    paddingHorizontal: PADDINGS.P10,
    backgroundColor: COLORS.white100,
  },
  header: {
    marginBottom: MARGINS.M10,
  },
  image: {
    width: '100%',
    height: RFValue(200),
    borderRadius: RFValue(10),
    marginBottom: MARGINS.M15,
    marginTop: MARGINS.M5,
  },
  instractorName: {
    fontFamily: boldFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.mainColor400,
    marginVertical: MARGINS.M10,
  },
  name: {
    color: COLORS.mainColor200,
  },
  courseInformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGINS.M15,
  },
  courseInformationSection1: {
    flexDirection: 'row',
  },
  starIconStyle: {
    fontSize: FONTS.F16,
    color: '#F7E532',
  },
  rateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clockIcon: {
    color: COLORS.mainColor200,
    fontSize: FONTS.F14,
    marginLeft: MARGINS.M10,
    marginRight: RFValue(2),
  },
  timeText: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F16,
    color: COLORS.gray100,
  },
  rate: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F16,
    color: COLORS.gray100,
  },
  priceView: {
    width: RFValue(55),
    height: RFValue(30),
    borderRadius: RFValue(5),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.lightBlue,
  },
  price: {
    fontFamily: boldFontFamily,
    fontSize: FONTS.F16,
    color: COLORS.mainColor300,
  },
  descriptionView: {
    marginBottom: MARGINS.M15,
    // backgroundColor: 'red',
  },
  descriptionTitle: {
    marginBottom: MARGINS.M5,
  },
  description: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F14,
    textAlign: 'justify',
  },
  button: {
    height: RFValue(45),
    marginVertical: RFValue(5),
    backgroundColor: COLORS.mainColor400,
  },
  lessons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: MARGINS.M5,
  },
});

export default styles;
