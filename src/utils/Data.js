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
    price: 46,
    description:
      'course talk about Machine Learning Fundamental and get deep into this field contain all topics to get work after course and more ...',
    lessons: [
      {
        name: 'Introduction',
        videos: 1,
      },
      {
        name: 'Chapter 1',
        videos: 7,
      },
      {
        name: 'Chapter 2',
        videos: 10,
      },
    ],
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
    price: 120,
    description:
      'course talk about Data Structure and get deep into this field contain all topics of Data Structure and more ... ',
    lessons: [
      {
        name: 'Introduction',
        videos: 2,
      },
      {
        name: 'Chapter 1',
        videos: 5,
      },
      {
        name: 'Chapter 2',
        videos: 20,
      },
      {
        name: 'Chapter 3',
        videos: 8,
      },
    ],
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
    price: 69.9,
    description:
      'course talk about React Native and get deep into this field contain all topics and more ... ',
    lessons: [
      {
        name: 'Introduction',
        videos: 1,
      },
      {
        name: 'Component',
        videos: 7,
      },
      {
        name: 'JavaScript',
        videos: 24,
      },
      {
        name: 'React Hooks',
        videos: 8,
      },
      {
        name: 'React Redux',
        videos: 31,
      },
    ],
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
    price: 130,
    description:
      'course talk about Engineering Fundamental and get deep into this field contain all topics and more ... ',
    lessons: [
      {
        name: 'Introduction',
        videos: 1,
      },
      {
        name: 'Engineering Fundamental',
        videos: 6,
      },
      {
        name: 'Engineering',
        videos: 10,
      },
    ],
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
    price: 46,
    description:
      'course talk about Science Fundamental and get deep into this field contain all topics and more ... ',
    lessons: [
      {
        name: 'Introduction',
        videos: 3,
      },
      {
        name: 'Chapter 1',
        videos: 40,
      },
      {
        name: 'Chapter 2',
        videos: 3,
      },
    ],
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
    price: 46,
    description:
      'course talk about Mathematical Fundamental and get deep into this field contain all topics and more ... ',
    lessons: [
      {
        name: 'Introduction',
        videos: 3,
      },
      {
        name: 'Chapter 1',
        videos: 3,
      },
      {
        name: 'Chapter 2',
        videos: 6,
      },
      {
        name: 'Chapter 3',
        videos: 13,
      },
    ],
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
    price: 46,
    description:
      'course talk about Learn How To Become Designer and get deep into this field contain all topics and more  ... ',
    lessons: [
      {
        name: 'Introduction',
        videos: 1,
      },
      {
        name: 'Chapter 1',
        videos: 7,
      },
      {
        name: 'Chapter 2',
        videos: 6,
      },
    ],
  },
];

const ongoingCourses = [
  {
    image: require('../assets/Images/reactnative.png'),
    courseName: 'React Native',
    ratio: 90,
  },
  {
    image: require('../assets/Images/dataStructure.jpg'),
    courseName: 'Data Structure',
    ratio: 40,
  },
  {
    image: require('../assets/Images/math.png'),
    courseName: 'Mathematical Fundamental',
    ratio: 60,
  },
];

const myCourses = [
  {
    id: 1,
    image: require('../assets/Images/computer.png'),
    courseName: 'Machine Learning Fundamental',
    hours: 35,
    mins: 22,
    lessons: 70,
    rate: 4.6,
  },
  {
    id: 2,
    image: require('../assets/Images/dataStructure.jpg'),
    courseName: 'Data Structure',
    hours: 20,
    mins: 45,
    lessons: 32,
    rate: 4.8,
  },
  {
    id: 3,
    image: require('../assets/Images/reactnative.png'),
    courseName: 'React Native',
    hours: 42,
    mins: 33,
    lessons: 230,
    rate: 4.9,
  },
  {
    id: 4,
    image: require('../assets/Images/designer.png'),
    courseName: 'Learn How To Become Designer',
    hours: 6,
    mins: 45,
    lessons: 21,
    rate: 4.3,
  },
  {
    id: 5,
    image: require('../assets/Images/math.png'),
    courseName: 'Mathematical Fundamental',
    hours: 67,
    mins: 22,
    lessons: 129,
    rate: 4.7,
  },
  {
    id: 6,
    image: require('../assets/Images/science.png'),
    courseName: 'Science Fundamental',
    hours: 5,
    mins: 34,
    lessons: 30,
    rate: 4.2,
  },
];
const notification = [
  {
    image: require('../assets/Images/instractor2.png'),
    instructor: 'Abdelrahman Ayad',
    iconName: 'paper-plane',
    course: 'Mathematical Fundamental',
    time: '4:16 PM',
  },
  {
    image: require('../assets/Images/intro.png'),
    instructor: 'Mohamed Eldesoky',
    iconName: 'checkmark-done-sharp',
    course: 'C++ Basics',
    time: '2:02 PM',
  },
  {
    image: require('../assets/Images/instractor2.png'),
    instructor: 'DR. Waleed',
    iconName: 'paper-plane',
    course: 'Data Structure and Algorithms',
    time: '2:47 PM',
  },
];

export {
  fields,
  computerScienceCourses,
  engineeringCourses,
  scienceCourses,
  recommendedCourses,
  ongoingCourses,
  myCourses,
  notification,
};
