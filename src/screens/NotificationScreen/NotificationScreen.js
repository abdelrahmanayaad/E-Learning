import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../../components/Header';
import Notification from '../../components/Notification';
import {notification} from '../../utils/Data';
import styles from './NotificationScreenStyles';

function NotificationScreen() {
  const renderNotificationsHandler = ({item, index}) => {
    return (
      <Notification
        image={item.image}
        instructor={item.instructor}
        iconName={item.iconName}
        course={item.course}
        time={item.time}
      />
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header title="Notifications" left />
      </View>
      <View style={styles.todayTitleView}>
        <Text style={styles.day}>Today</Text>
        <Text style={styles.markAllText}>Mark all as read</Text>
      </View>
      <FlatList data={notification} renderItem={renderNotificationsHandler} />
      <Text style={[styles.day, styles.lastDays]}>Yesterday</Text>
      <FlatList data={notification} renderItem={renderNotificationsHandler} />
    </View>
  );
}

export default NotificationScreen;
