import React, {useState} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import GeneralButton from '../../components/GeneralButton';
import OrSeperateLine from '../../components/OrSeperateLine';
import ReusableTextInput from '../../components/ReusableTextInput';
import SocialMediaComponent from '../../components/SocialMediaComponent';
import ReusableStyles from '../../styles/ReusableStyles';
import styles from './LoginScreenStyle';
import {COLORS} from '../../utils/Constants';

function LoginScreen() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentStyle}>
        <Image
          source={require('../../assets/Images/login.png')}
          style={[styles.loginImageStyle, styles.marginBottom]}
        />
        <Text
          style={[
            ReusableStyles.AuthTitles,
            styles.marginBottom,
            styles.welcomeText,
          ]}>
          Welcome back!
        </Text>
        <ReusableTextInput
          label="Email address"
          iconName="mail"
          style={styles.marginBottom}
        />
        <ReusableTextInput
          forgetPassword
          secureTextEntry
          label="Password"
          iconName="eye-off"
        />
        <View style={[styles.rememberMeView, styles.marginBottom]}>
          <View style={styles.checkBoxViewStyle}>
            <CheckBox
              tintColors={COLORS.mainColor100}
              // disabled={false}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.rememberMe}>Remember me</Text>
          </View>
          <Text style={styles.forgetPassword}>Forget password</Text>
        </View>
        <OrSeperateLine style={styles.marginBottom} />
        <View style={[styles.socialMediaViewStyle, styles.marginBottom]}>
          <SocialMediaComponent
            source={require('../../assets/Images/google.png')}
          />
          <SocialMediaComponent
            source={require('../../assets/Images/facebook.png')}
          />
        </View>
        <GeneralButton title="Log in" style={styles.marginBottom} />
        <Text style={styles.haveAccountTextStyle}>
          Don't have an account?
          <Text style={styles.signUpText}> Sign up now.</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

export default LoginScreen;
