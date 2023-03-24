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
    padding: PADDINGS.P10,
  },
  header: {
    marginBottom: MARGINS.M10,
  },
  scrollViewStyle: {
    paddingBottom: RFValue(35),
  },
  totalHoursView: {
    marginTop: MARGINS.M5,
  },
  totalTitle: {
    marginBottom: 0,
  },
  totalHours: {
    color: COLORS.mainColor300,
    fontFamily: boldFontFamily,
    fontSize: FONTS.F16,
  },
  week: {
    fontSize: FONTS.F16,
    color: COLORS.gray100,
  },
  chartView: {
    marginTop: RFValue(-20),
  },
  button: {
    height: RFValue(45),
    backgroundColor: COLORS.mainColor400,
    marginBottom: MARGINS.M15,
  },
  ongoingCourseView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGINS.M10,
  },
  seeAll: {
    fontSize: FONTS.F12,
    fontFamily: defaultFontFamily,
    color: COLORS.gray100,
  },
});
export default styles;
