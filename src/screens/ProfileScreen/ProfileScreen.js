import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import IconView from '../../components/IconView';
import ReusableStyles from '../../styles/ReusableStyles';
import styles from './ProfileScreenStyles';

function ProfileScreen() {
  const list = (icon, name, right) => {
    return (
      <TouchableOpacity style={styles.listView}>
        <View style={styles.nameIconView}>
          <IconView iconViewStyle={styles.iconViewStyle} name={icon} />
          <Text style={styles.listName}>{name}</Text>
        </View>
        <View>
          {right && (
            <IconView
              iconViewStyle={styles.rightIconViewStyle}
              name={'chevron-forward-sharp'}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Header title="Profile" right="settings-outline" />
      </View>
      <View style={styles.profileImageViewStyle}>
        <ImageBackground
          resizeMode="contain"
          borderRadius={RFValue(60)}
          source={require('../../assets/Images/intro.png')}
          style={styles.profileImageStyle}>
          <TouchableOpacity style={styles.penView}>
            <FontAwesome5 name="pen" style={styles.penIcon} />
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.nameView}>
        <Text style={[ReusableStyles.textTitle, styles.name]}>
          Abdelrahman Ayad
        </Text>
        <Text style={styles.email}>abdelrahmanayad74@gmail.com</Text>
      </View>
      {list('person-outline', 'User Details', true)}
      {list('school-outline', 'Certificate', true)}
      {list('ios-qr-code-outline', 'Payment', true)}
      {list('md-document-text-outline', 'Document', true)}
      {list('ios-exit-outline', 'Logout')}
    </View>
  );
}

export default ProfileScreen;
