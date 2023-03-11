import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../utils/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.mainColor100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: RFValue(120),
    height: RFValue(120),
  },
});

export default styles;
