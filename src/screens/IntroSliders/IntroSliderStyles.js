import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS, MARGINS, PADDINGS} from '../../utils/Constants';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    backgroundColor: '#F3F0FA',
    justifyContent: 'flex-end',
  },
  footerView: {
    height: '35%',
    backgroundColor: COLORS.white100,
    borderTopRightRadius: RFValue(50),
    borderTopLeftRadius: RFValue(50),
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: PADDINGS.P15,
    paddingVertical: PADDINGS.P15,
  },
  button: {
    width: RFValue(70),
    height: RFValue(70),
    borderRadius: RFValue(35),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.mainColor100,
  },
  icon: {
    fontSize: RFValue(30),
    color: COLORS.white100,
  },
  titleText: {
    fontSize: FONTS.F20,
    fontWeight: 'bold',
    color: COLORS.mainColor300,
  },
  contentText: {
    textAlign: 'center',
    fontSize: FONTS.F16,
    color: COLORS.gray100,
  },
});

export default styles;
