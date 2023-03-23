import React, {useEffect} from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth, {firebase} from '@react-native-firebase/auth';
import SocialMediaComponent from './SocialMediaComponent';

function LoginWithGoogle() {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '877385371387-60lq5c9ofmhmf9rdc76cknjqgmdq1qa7.apps.googleusercontent.com',
    });
  }, []);

  const onGoogleButtonPress = async () => {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      // Google Account disconnected from your app.
      // Perform clean-up actions, such as deleting data associated with the disconnected account.
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SocialMediaComponent
      onPress={() => {
        onGoogleButtonPress()
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      }}
      source={require('../assets/Images/google.png')}
    />
  );
}

export default LoginWithGoogle;
