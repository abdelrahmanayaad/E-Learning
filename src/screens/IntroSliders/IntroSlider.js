import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './IntroSliderStyles';
import Icon from 'react-native-vector-icons/AntDesign';
import * as Animatable from 'react-native-animatable';

function IntroSlider({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/Images/intro.png')}
      style={styles.image}>
      <Animatable.View
        animation={'slideInUp'}
        duration={1000}
        style={styles.footerView}>
        <Text style={styles.titleText}>Best Online Course</Text>
        <Text style={styles.contentText}>
          Discover the things you want to learn and grow with them.
        </Text>
        <Animatable.View animation={'bounceInLeft'} duration={3000}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreen')}
            style={styles.button}>
            <Icon name="arrowright" style={styles.icon} />
          </TouchableOpacity>
        </Animatable.View>
      </Animatable.View>
    </ImageBackground>
  );
}

export default IntroSlider;
