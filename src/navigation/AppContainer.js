import {NavigationContainer} from '@react-navigation/native';
import HomeTabs from './HomeTabs';
import AuthStack from './AuthStack';
import {useEffect} from 'react';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

function AppContainer({isAuth}) {
  useEffect(() => {}, []);
  return (
    <NavigationContainer>
      {isAuth ? <HomeTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default AppContainer;
