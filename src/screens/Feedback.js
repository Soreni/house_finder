import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
const jwtDecode = require('jwt-decode');

import {
  StyledContainer,
  InnerContainer,
  StyledFormArea,
  StyledTextInput,
  StyledTextLabel,
  LeftIcon,
  RightIcon,
  StyledButton,
  ButtonText,
  Colors,
  ExtraText,
  ValidationMsg,
  StyledIMGButton,
} from '../components/styles';

const { darkLight, brand, primary, green } = Colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

//import Feedbacks action
import * as feedbackAction from '../redux/actions/feedbackAction';

const formSchema = yup.object({
  message: yup.string().required(),
});

const Feedback = ({ navigation }) => {
  const dispatch = useDispatch();
  const [postedBy, setPostedBy] = useState();

  const loadProfile = async () => {
    const token = await AsyncStorage.getItem('token');
    const decode = jwtDecode(token);
    setPostedBy(decode._id);
    console.log(decode);
  };
  useEffect(() => {
    loadProfile();
  });
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <Formik
            initialValues={{
              message: '',
              postedBy: '',
            }}
            validationSchema={formSchema}
            onSubmit={(values) => {
              values.postedBy = postedBy;
              console.log(values);
              dispatch(feedbackAction.createFeedbacks(values))
                .then(() => {
                  Alert.alert('Feedback Registered Successfully');
                  navigation.navigate('Profile');
                })
                .catch((err) => {
                  console.log(err);
                  Alert.alert('An Error has Occured');
                });
            }}
          >
            {(props) => (
              <StyledFormArea>
                <StyledTextLabel>Please healp us improve this application</StyledTextLabel>
                <MyTextInput
                  icon="message"
                  placeholder="Any additional information..."
                  placeholderTextColor={darkLight}
                  multiline={true}
                  numberOfLines={10}
                  onChangeText={props.handleChange('message')}
                  onBlur={props.handleBlur('message')}
                  value={props.values.message}
                  style={{ height: 200, textAlignVertical: 'top' }}
                />
                <ValidationMsg>{props.touched.message && props.errors.message}</ValidationMsg>
                <StyledButton>
                  <ButtonText onPress={props.handleSubmit}>Submit</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
        <View>
          <ExtraText></ExtraText>
        </View>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, ...probs }) => {
  return (
    <View>
      <LeftIcon>
        <MaterialIcons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledTextLabel>{label}</StyledTextLabel>
      <StyledTextInput {...probs} />
    </View>
  );
};

export default Feedback;
