import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import IntroSlider from '../screens/IntroSliders/IntroSlider';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import SignupScreen from '../screens/SignupScreen/SignupScreen';

const stack = createStackNavigator();

function AuthStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="SplashScreen" component={SplashScreen} />
      <stack.Screen name="IntroSlider" component={IntroSlider} />
      <stack.Screen name="LoginScreen" component={LoginScreen} />
      <stack.Screen name="SignupScreen" component={SignupScreen} />
    </stack.Navigator>
  );
}

export default AuthStack;
