import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';

function AppContainer() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

export default AppContainer;
