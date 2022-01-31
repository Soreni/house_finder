import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Divider } from 'react-native-paper';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const jwtDecode = require('jwt-decode');

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledTextInput,
  StyledTextLabel,
  LeftIcon,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  TextLinkContent,
  TextLink,
  ExtraView,
  ExtraText,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
  StyledIMGButton,
  StyledProButton,
} from '../components/styles';

const Profile = (props) => {
  const [postedBy, setPostedBy] = useState();

  useEffect(() => {
    loadProfile();
  });
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    const decode = jwtDecode(token);
    setPostedBy(decode._id);
    console.log(decode);
  };
  //  const {email, name, photoUrl} = route.params;
  const AvatarImg = require('../../assets/logo.png');
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Avatar source={require('../../assets/logo.png')} />
          <Text style={styles.name}>Abebe Kebede </Text>
          <Text style={styles.userInfo}>abe2020@mail.com </Text>
          <Text style={styles.userInfo}>Addis Ababa </Text>
        </View>
      </View>
      <View style={styles.btn}>
        <StyledProButton>
          <StyledTextLabel
            onPress={() => {
              props.navigation.navigate('Feedback');
            }}
          >
            Feedback
          </StyledTextLabel>
        </StyledProButton>
      </View>
      <Divider />
      <View>
        <StyledProButton onPress={() => {}}>
          <StyledTextLabel
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            Logout
          </StyledTextLabel>
        </StyledProButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#DCDCDC',
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: '#778899',
    fontWeight: '600',
  },
  body: {
    height: 500,
    paddingRight: 200,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5,
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  btn: {
    marginTop: 40,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: '#FFFFFF',
  },
});

export default Profile;
