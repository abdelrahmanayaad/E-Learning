import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const stack = createStackNavigator();

function HomeStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="HomeScreen" component={HomeScreen} />
      <stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </stack.Navigator>
  );
}

export default HomeStack;
