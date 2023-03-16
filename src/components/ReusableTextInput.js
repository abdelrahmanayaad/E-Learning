import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';
import {
  boldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGINS,
  PADDINGS,
} from '../utils/Constants';

function ReusableTextInput(props) {
  const {
    label,
    style,
    textInputStyle,
    iconName,
    iconStyle,
    forgetPassword,
    borderColor,
    onFocus,
    password,
    secure,
    onPress,
    ...rest
  } = props;
  return (
    <View style={style}>
      <Text style={styles.labelText}>{label}</Text>
      <View style={[styles.textInputWrapper, textInputStyle, {borderColor}]}>
        <TextInput
          {...rest}
          selectionColor={COLORS.mainColor200}
          onFocus={onFocus}
          style={styles.textInput}
        />
        {password ? (
          <TouchableOpacity onPress={onPress}>
            <Feather
              name={secure ? 'eye' : 'eye-off'}
              style={[styles.iconStyle, iconStyle]}
            />
          </TouchableOpacity>
        ) : (
          <Feather name={iconName} style={[styles.iconStyle, iconStyle]} />
        )}
      </View>
    </View>
  );
}

export default ReusableTextInput;

const styles = StyleSheet.create({
  textInputWrapper: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    height: RFValue(40),
    backgroundColor: COLORS.bgInput,
    borderWidth: RFValue(1),
    borderColor: COLORS.mainColor100,
    borderRadius: PADDINGS.P10,
    paddingHorizontal: PADDINGS.P5,
  },
  textInput: {
    flex: 1,
    fontSize: FONTS.F14,
    fontFamily: defaultFontFamily,
  },
  iconStyle: {
    fontSize: FONTS.F16,
    color: COLORS.black200,
  },
  labelText: {
    fontSize: FONTS.F11,
    fontFamily: defaultFontFamily,
    color: COLORS.gray100,
    marginBottom: RFValue(2),
  },
});
