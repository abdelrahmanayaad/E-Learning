import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  COLORS,
  defaultFontFamily,
  boldFontFamily,
  FONTS,
  MARGINS,
  PADDINGS,
} from '../../utils/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white100,
    paddingTop: PADDINGS.P10,
    paddingLeft: PADDINGS.P10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: PADDINGS.P10,
    paddingBottom: PADDINGS.P10,
  },
  titleView: {
    marginTop: MARGINS.M10,
    paddingRight: PADDINGS.P10,
  },
  headerSection1: {
    flexDirection: 'row',
  },
  imageProfileView: {
    backgroundColor: COLORS.gray200,
    borderRadius: RFValue(10),
    marginRight: MARGINS.M10,
  },
  imageProfile: {
    width: RFValue(45),
    height: RFValue(45),
    borderRadius: RFValue(10),
  },
  nameView: {
    justifyContent: 'space-between',
  },
  letsLearn: {
    fontSize: FONTS.F12,
    color: COLORS.gray100,
    fontFamily: defaultFontFamily,
  },
  textInputView: {
    paddingRight: PADDINGS.P10,
  },
  textInputStyle: {
    backgroundColor: COLORS.white100,
    marginBottom: MARGINS.M22,
  },
  fieldView: {
    borderRadius: RFValue(10),
    marginRight: MARGINS.M5,
    backgroundColor: COLORS.gray200,
  },
  fieldText: {
    padding: PADDINGS.P10,
    fontSize: FONTS.F12,
    fontFamily: defaultFontFamily,
  },
  flatListView: {
    marginBottom: MARGINS.M10,
  },
  coursePoster: {
    marginRight: MARGINS.M10,
  },
  coursesView: {
    marginBottom: MARGINS.M15,
  },
  recommendedView: {
    paddingRight: PADDINGS.P10,
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
