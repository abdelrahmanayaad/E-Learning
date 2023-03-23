import React, {useEffect, useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Header from '../../components/Header';
import IconView from '../../components/IconView';
import ReusableStyles from '../../styles/ReusableStyles';
import styles from './DetailsScreenStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GeneralButton from '../../components/GeneralButton';
import {
  boldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
} from '../../utils/Constants';
import Icon from 'react-native-vector-icons/AntDesign';
import LessonList from '../../components/LessonList';

function DetailsScreen({props, route, navigation}) {
  const data = route.params.data;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          leftOnPress={() => navigation.goBack()}
          title="Details"
          left
          right="heart-outline"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={data.backgroundImage} style={styles.image} />
        <Text style={ReusableStyles.textTitle}>{data.courseName}</Text>
        <Text style={styles.instractorName}>
          Course by <Text style={styles.name}>{data.name}</Text>
        </Text>
        <View style={styles.courseInformation}>
          <View style={styles.courseInformationSection1}>
            <View style={styles.rateView}>
              <FontAwesome name="star" style={styles.starIconStyle} />
              <Text style={styles.rate}> {data.rate}</Text>
            </View>
            <View style={styles.timeView}>
              <AntDesign name="clockcircleo" style={styles.clockIcon} />
              <Text style={styles.timeText}>
                {' ' + data.hours}h {data.mins}mins
              </Text>
            </View>
          </View>
          <View style={styles.priceView}>
            <Text style={styles.price}>$ {data.price}</Text>
          </View>
        </View>
        <View style={styles.descriptionTitle}>
          <Text style={ReusableStyles.textTitle}>Description</Text>
        </View>
        <View style={styles.descriptionView}>
          <Text numberOfLines={3} style={styles.description}>
            {data.description}
          </Text>
        </View>
        <View>
          <Text style={ReusableStyles.textTitle}>Lessons</Text>
        </View>
        <LessonList data={data.lessons} />
      </ScrollView>
      <GeneralButton style={styles.button} title="Enroll Now" />
    </View>
  );
}

export default DetailsScreen;
