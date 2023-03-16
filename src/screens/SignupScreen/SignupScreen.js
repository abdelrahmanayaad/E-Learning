import React, {useState} from 'react';
import {ScrollView, Text, View, Image} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import GeneralButton from '../../components/GeneralButton';
import OrSeperateLine from '../../components/OrSeperateLine';
import ReusableTextInput from '../../components/ReusableTextInput';
import SocialMediaComponent from '../../components/SocialMediaComponent';
import ReusableStyles from '../../styles/ReusableStyles';
import {COLORS} from '../../utils/Constants';
import styles from './SignupScreenStyle';

function SignupScreen() {
  const [focus, setFocus] = useState({
    name: false,
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

  const onFocusHandler = key => {
    if (key === 'name') setFocus({name: true, email: false, password: false});
    else if (key === 'email')
      setFocus({name: false, email: true, password: false});
    else setFocus({name: false, email: false, password: true});
  };
  const onBlur = () => {
    setFocus({
      name: false,
      email: false,
      password: false,
    });
  };
  const changeSecureEntry = () => {
    setSecure(!secure);
  };

  const onSubmit = () => {
    reset();
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentStyle}>
        <Image
          source={require('../../assets/Images/signup.png')}
          style={[styles.signupImageStyle, styles.marginBottom]}
        />
        <Text
          style={[
            ReusableStyles.AuthTitles,
            styles.marginBottom,
            styles.title,
          ]}>
          Become a member!
        </Text>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => {
            return (
              <View style={styles.inputErrorView}>
                <ReusableTextInput
                  onFocus={() => {
                    onFocusHandler('name');
                  }}
                  onBlur={onBlur}
                  borderColor={
                    (focus.name ? COLORS.mainColor100 : COLORS.gray100,
                    errors.name
                      ? COLORS.red100
                      : focus.name
                      ? COLORS.mainColor100
                      : COLORS.gray100)
                  }
                  label="Your name"
                  iconName="user"
                  value={value}
                  onChangeText={onChange}
                />
                <Text style={[styles.errorTextStyle]}>
                  {errors.name?.type === 'required' ? 'Must Enter Name' : ''}
                </Text>
              </View>
            );
          }}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: true,
            pattern: /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/,
          }}
          render={({field: {onChange, value}}) => {
            return (
              <View style={styles.inputErrorView}>
                <ReusableTextInput
                  onFocus={() => {
                    onFocusHandler('email');
                  }}
                  onBlur={onBlur}
                  borderColor={
                    (focus.email ? COLORS.mainColor100 : COLORS.gray100,
                    errors.email
                      ? COLORS.red100
                      : focus.email
                      ? COLORS.mainColor100
                      : COLORS.gray100)
                  }
                  label="Email address"
                  iconName="mail"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={value}
                  onChangeText={onChange}
                />
                <Text style={[styles.errorTextStyle]}>
                  {errors.email?.type === 'required'
                    ? 'Must Enter Email'
                    : errors.email?.type === 'pattern'
                    ? 'Enter Correct Email'
                    : ''}
                </Text>
              </View>
            );
          }}
        />
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
              <View style={styles.inputErrorView}>
                <ReusableTextInput
                  onFocus={() => {
                    onFocusHandler('Password');
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
                  secure={secure}
                  secureTextEntry={secure}
                  onPress={changeSecureEntry}
                  password
                  label="Password"
                  iconName="eye-off"
                  value={value}
                  onChangeText={onChange}
                />
                <Text style={[styles.errorTextStyle]}>
                  {errors.email?.type === 'required'
                    ? 'Must Enter Password'
                    : errors.password?.type === 'pattern'
                    ? 'Enter Correct password include at least 8 chars and at least 1 special char'
                    : ''}
                </Text>
              </View>
            );
          }}
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
        <GeneralButton
          onPress={handleSubmit(onSubmit)}
          title="Create an account"
          style={styles.marginBottom}
        />
        <Text style={styles.haveAccountTextStyle}>
          Already have an account?
          <Text style={styles.signInText}> Sign in.</Text>
        </Text>
      </ScrollView>
    </View>
  );
}

export default SignupScreen;
