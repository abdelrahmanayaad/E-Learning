import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import styles from './SplashScreenStyle';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/ELearning.png')}
      />
    </View>
  );
}
export default SplashScreen;
