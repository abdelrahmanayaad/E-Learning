import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {MARGINS, PADDINGS} from '../../utils/Constants';

const styles = StyleSheet.create({
  container: {
    padding: PADDINGS.P10,
    marginBottom: RFValue(45),
  },
  headerView: {
    marginBottom: MARGINS.M15,
  },
});

export default styles;
