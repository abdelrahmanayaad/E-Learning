import React, {Fragment} from 'react';
import IntroSlider from './src/screens/IntroSliders/IntroSlider';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import IconView from './src/components/IconView';
import {View} from 'react-native-animatable';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import {StatusBar} from 'react-native';
import {COLORS} from './src/utils/Constants';
import CoursePoster from './src/components/CoursePoster';
import DetailsScreen from './src/screens/DetailsScreen/DetailsScreen';
import Header from './src/components/Header';
import LoginWithGoogle from './src/components/LoginWithGoogle';
import AppContainer from './src/navigation/AppContainer';
import ActivityScreen from './src/screens/ActivityScreen/ActivityScreen';
import ActivityCourse from './src/components/ActivityCourse';
import MyCourse from './src/components/MyCourse';
import MyCourses from './src/screens/MyCourses/MyCourses';

function App() {
  return (
    <Fragment>
      <StatusBar backgroundColor={COLORS.mainColor400} />
      {/* <AppContainer /> */}
      {/* <ActivityScreen /> */}
      <MyCourses />
    </Fragment>
  );
}
export default App;
