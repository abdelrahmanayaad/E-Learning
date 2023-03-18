import {RFValue} from 'react-native-responsive-fontsize';

const defaultFontFamily = 'RCB500';
const boldFontFamily = 'RCB';

const COLORS = {
  // mainColor100: '#8A44FD',
  mainColor100: '#C287FC',
  mainColor200: '#D1A5FD',
  mainColor300: '#623EB5',
  mainColor400: '#4E3685',
  white100: '#fff',
  gray100: '#AEADAF',
  gray200: '#eee',
  gray500: '#FAF8F8',
  black100: '#000',
  // black200: '#1D233E',
  black200: '#282F4D',
  bgInput: '#FAF8F8',
  red100: '#f00',
  lightBlue: '#E3ECFD',
};

const PADDINGS = {
  P5: RFValue(5),
  P10: RFValue(10),
  P15: RFValue(15),
};

const MARGINS = {
  M5: RFValue(5),
  M10: RFValue(10),
  M15: RFValue(15),
  M20: RFValue(20),
  M22: RFValue(22),
  M25: RFValue(25),
};

const FONTS = {
  F10: RFValue(10),
  F11: RFValue(11),
  F12: RFValue(12),
  F14: RFValue(14),
  F15: RFValue(15),
  F16: RFValue(16),
  F18: RFValue(18),
  F20: RFValue(20),
};

export {defaultFontFamily, boldFontFamily, COLORS, PADDINGS, FONTS, MARGINS};
