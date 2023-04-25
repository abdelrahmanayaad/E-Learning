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
import {useForm, Controller} from 'react-hook-form';
import LoginWithGoogle from '../../components/LoginWithGoogle';

function LoginScreen({navigation}) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [focus, setFocus] = useState({
    email: false,
    password: false,
  });
  const [secure, setSecure] = useState(true);
  const {
    control,
    handleSubmit,
    reset,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    setFocus({email: false, password: false});
    reset();
  };
  const onFocusHandler = key => {
    if (key === 'email') {
      setFocus({email: true, password: false});
    } else {
      setFocus({email: false, password: true});
    }
  };
  const onBlur = () => {
    setFocus({email: false, password: false});
  };
  const changeSecureEntry = () => {
    setSecure(!secure);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        // keyboardShouldPersistTaps="always"
        contentContainerStyle={styles.contentStyle}>
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
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
          }}
          render={({field: {onChange, value}}) => {
            return (
              <ReusableTextInput
                textInputStyle={styles.textInputStyle}
                onBlur={onBlur}
                onFocus={() => {
                  onFocusHandler('email');
                }}
                borderColor={
                  (focus.email ? COLORS.mainColor100 : COLORS.gray100,
                  errors.email
                    ? COLORS.red100
                    : focus.email
                    ? COLORS.mainColor100
                    : COLORS.gray100)
                }
                keyboardType="email-address"
                autoCapitalize="none"
                label="Email address"
                iconName="mail"
                onChangeText={onChange}
                value={value}
              />
            );
          }}
        />
        <Text style={[styles.errorTextStyle]}>
          {errors.email?.type === 'required'
            ? 'Must Enter Email'
            : errors.email?.type === 'pattern'
            ? 'Enter Correct Email'
            : ''}
        </Text>
        <Controller
          name="password"
          control={control}
          rules={{
            required: true,
            pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,20}$/,
            maxLength: 20,
          }}
          render={({field: {onChange, value}}) => {
            return (
              <ReusableTextInput
                textInputStyle={styles.textInputStyle}
                secureTextEntry={secure}
                password
                secure={secure}
                onPress={changeSecureEntry}
                onFocus={() => {
                  onFocusHandler('password');
                }}
                onBlur={onBlur}
                borderColor={
                  (focus.password ? COLORS.mainColor100 : COLORS.gray100,
                  errors.password
                    ? COLORS.red100
                    : focus.password
                    ? COLORS.mainColor100
                    : COLORS.gray100)
                }
                value={value}
                onChangeText={onChange}
                forgetPassword
                label="Password"
                iconName="eye-off"
              />
            );
          }}
        />
        <Text style={[styles.errorTextStyle]}>
          {errors.password?.type === 'required'
            ? 'Must Enter Password'
            : errors.password?.type === 'pattern'
            ? 'Enter Correct Password'
            : null}
        </Text>
        <View style={[styles.rememberMeView, styles.marginBottom]}>
          <View style={styles.checkBoxViewStyle}>
            <CheckBox
              tintColors={{true: COLORS.mainColor100, false: COLORS.black200}}
              value={toggleCheckBox}
              onValueChange={newValue => setToggleCheckBox(newValue)}
            />
            <Text style={styles.rememberMe}>Remember me</Text>
          </View>
          <Text style={styles.forgetPassword}>Forget password</Text>
        </View>
        <OrSeperateLine style={styles.marginBottom} />
        <View style={[styles.socialMediaViewStyle, styles.marginBottom]}>
          <LoginWithGoogle />
          <SocialMediaComponent
            source={require('../../assets/Images/facebook.png')}
          />
        </View>
        <GeneralButton
          title="Log in"
          style={styles.marginBottom}
          onPress={handleSubmit(onSubmit)}
        />
        <Text style={styles.haveAccountTextStyle}>
          Don't have an account?
          <Text
            onPress={() => navigation.navigate('SignupScreen')}
            style={styles.signUpText}>
            {' '}
            Sign up now.
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
}

export default LoginScreen;
