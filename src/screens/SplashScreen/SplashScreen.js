import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import styles from './SplashScreenStyle';
import {useEffect} from 'react';

function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('IntroSlider');
    }, 3000);
  }, []);
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
