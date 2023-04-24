import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import ActivityStack from './ActivityStack';
import MyCoursesStack from './MyCoursesStack';
import ProfileStack from './ProfileStack';
import Icon from 'react-native-vector-icons/Ionicons';
import {COLORS, boldFontFamily} from '../utils/Constants';
import {Text} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

const Tabs = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const iconNameActive = {
          HomeStack: 'home',
          ActivityStack: 'stats-chart',
          MyCoursesStack: 'videocam',
          ProfileStack: 'person',
        };
        const iconNameDisActive = {
          HomeStack: 'home-outline',
          ActivityStack: 'stats-chart-outline',
          MyCoursesStack: 'videocam-outline',
          ProfileStack: 'person-outline',
        };
        const label = {
          HomeStack: 'Home',
          ActivityStack: 'Activity',
          MyCoursesStack: 'My Courses',
          ProfileStack: 'Account',
        };
        return {
          tabBarIcon: ({focused}) => (
            <Icon
              name={
                focused
                  ? iconNameActive[route.name]
                  : iconNameDisActive[route.name]
              }
              size={RFValue(20)}
              style={{color: focused ? COLORS.mainColor300 : COLORS.gray100}}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: boldFontFamily,
                color: focused ? COLORS.mainColor300 : COLORS.gray100,
              }}>
              {label[route.name]}
            </Text>
          ),
        };
      }}>
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false, tabBarHideOnKeyboard: true}}
      />
      <Tabs.Screen
        name="ActivityStack"
        component={ActivityStack}
        options={{headerShown: false, tabBarHideOnKeyboard: true}}
      />
      <Tabs.Screen
        name="MyCoursesStack"
        component={MyCoursesStack}
        options={{headerShown: false, tabBarHideOnKeyboard: true}}
      />
      <Tabs.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{headerShown: false, tabBarHideOnKeyboard: true}}
      />
    </Tabs.Navigator>
  );
}

export default HomeTabs;
