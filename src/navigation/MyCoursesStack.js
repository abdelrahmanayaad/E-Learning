import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import MyCoursesScreen from '../screens/MyCoursesScreen/MyCoursesScreen';
import MentorProfileScreen from '../screens/MentorProfileScreen/MentorProfileScreen';

const stack = createStackNavigator();

function MyCoursesStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="MyCoursesScreen" component={MyCoursesScreen} />
      <stack.Screen name="DetailsScreen" component={DetailsScreen} />
      <stack.Screen
        name="MentorProfileScreen"
        component={MentorProfileScreen}
      />
    </stack.Navigator>
  );
}

export default MyCoursesStack;
