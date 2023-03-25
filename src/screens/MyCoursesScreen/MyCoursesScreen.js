import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../../components/Header';
import MyCourse from '../../components/MyCourse';
import {myCourses} from '../../utils/Data';
import styles from './MyCoursesScreenStyles';

function MyCoursesScreen(props) {
  const renderMyCoursesHandler = ({item, index}) => {
    return (
      <MyCourse
        image={item.image}
        courseName={item.courseName}
        hours={item.hours}
        mins={item.mins}
        rate={item.rate}
        lessons={item.lessons}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Header title="My Courses" right="notifications-outline" profileImage />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={myCourses}
        renderItem={renderMyCoursesHandler}
      />
    </View>
  );
}

export default MyCoursesScreen;
