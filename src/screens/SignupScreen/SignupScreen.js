import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import GeneralButton from '../../components/GeneralButton';
import OrSeperateLine from '../../components/OrSeperateLine';
import ReusableTextInput from '../../components/ReusableTextInput';
import SocialMediaComponent from '../../components/SocialMediaComponent';
import ReusableStyles from '../../styles/ReusableStyles';
import styles from './SignupScreenStyle';

function SignupScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentStyle}>
        <Image
          source={require('../../assets/Images/signup.png')}
          style={[styles.signupImageStyle, styles.marginBottom]}
        />
        <Text style={[ReusableStyles.AuthTitles, styles.marginBottom]}>
          Become a member!
        </Text>
        <ReusableTextInput
          label="Your name"
          iconName="user"
          style={styles.marginBottom}
        />
        <ReusableTextInput
          label="Email address"
          iconName="mail"
          style={styles.marginBottom}
        />
        <ReusableTextInput
          secureTextEntry
          label="Password"
          iconName="eye-off"
          style={styles.marginBottom}
        />
        <OrSeperateLine style={styles.marginBottom} />
        <View style={[styles.socialMediaViewStyle, styles.marginBottom]}>
          <SocialMediaComponent
            source={require('../../assets/Images/google.png')}
          />
          <SocialMediaComponent
            source={require('../../assets/Images/facebook.png')}
          />
        </View>
        <GeneralButton title="Create an account" style={styles.marginBottom} />
        <Text style={styles.haveAccountTextStyle}>
          Already have an account?
          <Text style={styles.signInText}> Sign in.</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

export default SignupScreen;
