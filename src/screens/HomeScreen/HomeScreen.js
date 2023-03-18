import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CoursePoster from '../../components/CoursePoster';
import IconView from '../../components/IconView';
import ReusableTextInput from '../../components/ReusableTextInput';
import ReusableStyles from '../../styles/ReusableStyles';
import {boldFontFamily, COLORS, defaultFontFamily} from '../../utils/Constants';
import {
  computerScienceCourses,
  engineeringCourses,
  fields,
  recommendedCourses,
  scienceCourses,
} from '../../utils/Data';
import styles from './HomeScreenStyles';
import * as Animatable from 'react-native-animatable';

function HomeScreen() {
  const [selectedField, setSelectedField] = useState(0);
  const renderItemHandler = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedField(index);
        }}
        style={[
          styles.fieldView,
          {
            backgroundColor:
              selectedField === index ? COLORS.mainColor300 : COLORS.gray200,
          },
        ]}>
        <Text
          style={[
            styles.fieldText,
            {
              color: selectedField === index ? COLORS.white100 : COLORS.gray100,
              fontFamily:
                selectedField === index ? boldFontFamily : defaultFontFamily,
            },
          ]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderCourses = ({item, index}) => {
    return (
      <CoursePoster
        style={styles.coursePoster}
        backgroundImage={item.backgroundImage}
        profileImage={item.profileImage}
        courseName={item.courseName}
        name={item.name}
        hours={item.hours}
        mins={item.mins}
        lectures={item.lectures}
        rate={item.rate}
      />
    );
  };
  const returnedDate = () => {
    if (selectedField === 0) return computerScienceCourses;
    else if (selectedField === 1) return engineeringCourses;
    else if (selectedField === 2) return scienceCourses;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerSection1}>
          <View style={styles.imageProfileView}>
            <Image
              style={styles.imageProfile}
              source={require('../../assets/Images/intro.png')}
            />
          </View>
          <View style={styles.nameView}>
            <Text style={ReusableStyles.contentTextBold}>Hi, Abdelrahman</Text>
            <Text style={styles.letsLearn}>Let's start learning !</Text>
          </View>
        </View>
        <View>
          <IconView name="notifications-outline" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.titleView}>
          <Animatable.Text
            animation={'slideInUp'}
            duration={2000}
            style={ReusableStyles.textTitle}>
            What do you want to learn?
          </Animatable.Text>
        </View>
        <Animatable.View
          animation={'slideInUp'}
          duration={2000}
          style={styles.textInputView}>
          <ReusableTextInput
            right
            rightIconName="search"
            borderColor={COLORS.gray100}
            textInputStyle={styles.textInputStyle}
            placeholder="Search"
          />
        </Animatable.View>
        <Animatable.View
          animation={'slideInUp'}
          duration={2000}
          style={styles.flatListView}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={fields}
            renderItem={renderItemHandler}
          />
        </Animatable.View>
        <Animatable.View
          animation={'slideInUp'}
          duration={2000}
          style={styles.coursesView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={returnedDate()}
            renderItem={renderCourses}
          />
        </Animatable.View>
        <Animatable.View
          animation={'slideInUp'}
          duration={2000}
          style={styles.recommendedView}>
          <Text style={ReusableStyles.textTitle}>Recommended</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation={'slideInUp'}
          duration={2000}
          style={styles.coursesView}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={recommendedCourses}
            renderItem={renderCourses}
          />
        </Animatable.View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
