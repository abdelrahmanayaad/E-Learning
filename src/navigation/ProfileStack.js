import {createStackNavigator} from '@react-navigation/stack';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import MyCoursesScreen from '../screens/MyCoursesScreen/MyCoursesScreen';
import MentorProfileScreen from '../screens/MentorProfileScreen/MentorProfileScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const stack = createStackNavigator();

function ProfileStack() {
  return (
    <stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </stack.Navigator>
  );
}

export default ProfileStack;
