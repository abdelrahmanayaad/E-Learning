const fields = [
  {
    title: 'Computer Science',
  },
  {
    title: 'Engineering',
  },
  {
    title: 'Science',
  },
  {
    title: 'Math',
  },
  {
    title: 'Technology',
  },
  {
    title: 'Statistics',
  },
  {
    title: 'Artificial intelligence',
  },
];

const computerScienceCourses = [
  {
    id: 1,
    backgroundImage: require('../assets/Images/computer.png'),
    profileImage: require('../assets/Images/instractor2.png'),
    name: 'Moustafa Saad',
    courseName: 'Machine Learning Fundamental',
    hours: 35,
    mins: 22,
    lectures: 70,
    rate: 4.6,
  },
  {
    id: 2,
    backgroundImage: require('../assets/Images/dataStructure.jpg'),
    profileImage: require('../assets/Images/intro.png'),
    name: 'Mohamed Eldesoky',
    courseName: 'Data Structure',
    hours: 20,
    mins: 45,
    lectures: 32,
    rate: 4.8,
  },
  {
    id: 3,
    backgroundImage: require('../assets/Images/reactnative.png'),
    profileImage: require('../assets/Images/intro.png'),
    name: 'Maximilian',
    courseName: 'React Native',
    hours: 42,
    mins: 33,
    lectures: 230,
    rate: 4.9,
  },
];
const engineeringCourses = [
  {
    id: 1,
    backgroundImage: require('../assets/Images/computer.png'),
    profileImage: require('../assets/Images/intro.png'),
    name: 'Abdelrahman Ayad',
    courseName: 'Engineering Fundamental',
    hours: 35,
    mins: 22,
    lectures: 70,
    rate: 4.6,
  },
];
const scienceCourses = [
  {
    id: 2,
    backgroundImage: require('../assets/Images/science.png'),
    profileImage: require('../assets/Images/intro.png'),
    name: 'Nasa',
    courseName: 'Science Fundamental',
    hours: 5,
    mins: 34,
    lectures: 30,
    rate: 4.2,
  },
];

const recommendedCourses = [
  {
    id: 1,
    backgroundImage: require('../assets/Images/math.png'),
    profileImage: require('../assets/Images/intro.png'),
    name: 'DR. Waleed',
    courseName: 'Mathematical Fundamental',
    hours: 67,
    mins: 22,
    lectures: 129,
    rate: 4.7,
  },
  {
    id: 2,
    backgroundImage: require('../assets/Images/designer.png'),
    profileImage: require('../assets/Images/intro.png'),
    name: 'Hanaa Baker',
    courseName: 'Learn How To Become Designer',
    hours: 6,
    mins: 45,
    lectures: 21,
    rate: 4.3,
  },
];

export {
  fields,
  computerScienceCourses,
  engineeringCourses,
  scienceCourses,
  recommendedCourses,
};
