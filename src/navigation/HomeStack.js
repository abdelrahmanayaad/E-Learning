import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import MentorProfileScreen from '../screens/MentorProfileScreen/MentorProfileScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const stack = createStackNavigator();

function HomeStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="HomeScreen" component={HomeScreen} />
      <stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <stack.Screen
        name="MentorProfileScreen"
        component={MentorProfileScreen}
      />
    </stack.Navigator>
  );
}

export default HomeStack;
