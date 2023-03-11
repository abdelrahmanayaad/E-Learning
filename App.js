import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {ScaledSheet, s, vs} from 'react-native-size-matters';
import ReusableTextInput from './src/components/ReusableTextInput';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
function App() {
  return <LoginScreen />;
}
export default App;
