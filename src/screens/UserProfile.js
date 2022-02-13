import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as userAction from '../redux/actions/userAction';
const jwtDecode = require('jwt-decode');

import { StyledTextLabel, Avatar, StyledIMGButton, StyledProButton } from '../components/styles';

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const [postedBy, setPostedBy] = useState();
  const [token, setToken] = useState();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    loadProfile();
    getUser();
  });
  const loadProfile = async () => {
    const _token = await AsyncStorage.getItem('token');
    setToken(_token);
    const decode = jwtDecode(_token);
    setPostedBy(decode._id);
  };
  const getUser = () => {
    if (postedBy) {
      dispatch(userAction.fecthUser(postedBy, token))
        .then((data) => {
          setCurrentUser(data.user);
          console.log('data', data.user);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const logOut = () => {
    AsyncStorage.removeItem('token');
    props.navigation.navigate('Login');
  };

  const AvatarImg = require('../../assets/logo.png');
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Avatar source={require('../../assets/logo.png')} />

          <Text style={styles.name}>{currentUser.fullName}</Text>
          <Text style={styles.userInfo}>{currentUser.email}</Text>
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
          <StyledTextLabel onPress={logOut}>Logout</StyledTextLabel>
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

export default UserProfile;
