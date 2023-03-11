import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, defaultFontFamily, FONTS, MARGINS} from '../utils/Constants';

function OrSeperateLine(props) {
  const {style} = props;
  return (
    <View style={[styles.container, style]}>
      <View style={styles.line} />
      <Text style={styles.or}>or</Text>
      <View style={styles.line} />
    </View>
  );
}

export default OrSeperateLine;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.gray100,
    marginTop: 10,
  },
  or: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.F16,
    marginHorizontal: MARGINS.M5,
  },
});
