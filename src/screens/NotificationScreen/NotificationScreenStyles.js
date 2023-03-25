import {StyleSheet} from 'react-native';
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
    paddingBottom: PADDINGS.P10,
  },
  todayTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGINS.M10,
    marginTop: MARGINS.M5,
  },
  day: {
    fontFamily: boldFontFamily,
    fontSize: FONTS.F14,
    color: COLORS.mainColor300,
  },
  markAllText: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F12,
    color: COLORS.blue100,
  },
  lastDays: {
    marginTop: MARGINS.M10,
  },
});

export default styles;
