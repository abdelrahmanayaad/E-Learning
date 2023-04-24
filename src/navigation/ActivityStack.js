import {createStackNavigator} from '@react-navigation/stack';
import ActivityScreen from '../screens/ActivityScreen/ActivityScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import MentorProfileScreen from '../screens/MentorProfileScreen/MentorProfileScreen';

const stack = createStackNavigator();

function ActivityStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="ActivityScreen" component={ActivityScreen} />
      <stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <stack.Screen
        name="MentorProfileScreen"
        component={MentorProfileScreen}
      />
    </stack.Navigator>
  );
}

export default ActivityStack;
