import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';
import HomeTabs from './HomeTabs';

function AppContainer() {
  return (
    <NavigationContainer>
      <HomeTabs />
    </NavigationContainer>
  );
}

export default AppContainer;
