import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../utils/Constants';
import styles from './ActivityScreenStyles';
import Header from '../../components/Header';
import GeneralButton from '../../components/GeneralButton';
import {
  VictoryChart,
  VictoryBar,
  VictoryAxis,
  VictoryTheme,
} from 'victory-native';
import ReusableStyles from '../../styles/ReusableStyles';
import ActivityCourse from '../../components/ActivityCourse';
import {ongoingCourses} from '../../utils/Data';

const data = [
  {day: 'Sun', hours: 1},
  {day: 'Mon', hours: 5},
  {day: 'Tues', hours: 3},
  {day: 'Wed', hours: 4},
  {day: 'Thur', hours: 5},
  {day: 'Fri', hours: 6},
  {day: 'Sat', hours: 1},
];
const ongoingCoursesHandler = ({item, index}) => {
  return (
    <ActivityCourse
      ratio={item.ratio}
      courseName={item.courseName}
      image={item.image}
    />
  );
};
function ActivityScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Activity" left right="settings-outline" />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewStyle}>
        <View style={styles.totalHoursView}>
          <Text style={[ReusableStyles.textTitle, styles.totalTitle]}>
            Total hours
          </Text>
          <Text style={[styles.totalTitle, styles.totalHours]}>
            25/<Text style={styles.week}>Week</Text>
          </Text>
        </View>
        <View style={styles.chartView}>
          <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={RFValue(15)}>
            <VictoryAxis
              tickFormat={['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat']}
            />
            <VictoryAxis dependentAxis tickFormat={x => `${x} h`} />
            <VictoryBar
              style={{
                data: {
                  fill: COLORS.mainColor300,
                  width: RFValue(28),
                  emptyCells: 'red',
                },
              }}
              data={data}
              x="day"
              y="hours"
            />
          </VictoryChart>
        </View>
        <GeneralButton title="Download Report" style={styles.button} />
        <View style={styles.ongoingCourseView}>
          <Text style={ReusableStyles.textTitle}>Ongoing Course</Text>
          <Text style={styles.seeAll}>See All</Text>
        </View>
        <FlatList data={ongoingCourses} renderItem={ongoingCoursesHandler} />
      </ScrollView>
    </View>
  );
}

export default ActivityScreen;
