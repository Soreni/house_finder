import React, { useState, useEffect, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as userAction from '../redux/actions/userAction';
const jwtDecode = require('jwt-decode');

import { StyledTextLabel, Avatar, StyledIMGButton, StyledProButton } from '../components/styles';

import AuthContext from '../auth/context';

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const { user, setUser } = useContext(AuthContext);
  const [postedBy, setPostedBy] = useState();
  const [email, setEmail] = useState();
  const [fullName, setFullName] = useState();
  const [token, setToken] = useState();
  const [currentUser, setCurrentUser] = useState();

  //for edit user will be used later
  // const getUser = () => {
  //   try {
  //     console.log('postedby and token', postedBy, token);
  //     dispatch(userAction.fecthUser(postedBy, token))
  //       .then((data) => {
  //         setCurrentUser(data.user);
  //         console.log('data', data.user);
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const AvatarImg = require('../../assets/logo.png');
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Avatar source={require('../../assets/pro.png')} />

          <Text style={styles.name}>{user.fullName}</Text>
          <Text style={styles.userInfo}>{user.email}</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <StyledProButton
          onPress={() => {
            props.navigation.navigate('Feedback');
          }}
        >
          <StyledTextLabel>Feedback</StyledTextLabel>
        </StyledProButton>
      </View>
      <Divider />

      <View>
        <StyledProButton onPress={() => setUser(null)}>
          <StyledTextLabel>Logout</StyledTextLabel>
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
