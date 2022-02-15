import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, TouchableOpacity, Alert, CheckBox } from 'react-native';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';

//formik
import { Formik } from 'formik';
//yup for input validation
import * as yup from 'yup';
//icons
import { Octicons, Ionicons, Fontisto, MaterialIcons } from '@expo/vector-icons';

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
  ValidationMsg,
} from '../components/styles';

const { darkLight, brand, primary, green } = Colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

//actions handling
import * as userAction from '../redux/actions/userAction';

const formSchema = yup.object({
  fullName: yup.string().required(),
  email: yup.string().email().required(),
  phoneNumber: yup.string().required(),
  password: yup.string().required().min(6),
});

const Signup = ({ navigation }) => {
  const dispatch = useDispatch();
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('../../assets/hplogo.png')} />
          <PageTitle>House Finder</PageTitle>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              phoneNumber: '',
              password: '',
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
              dispatch(userAction.registerUser(values))
                .then(async (result) => {
                  console.log(result);
                  if (result.success) {
                    try {
                      Toast.show({
                        topOffset: 60,
                        type: 'success',
                        text1: 'Registration Succeeded',
                        text2: 'Please Login into your account',
                      });

                      navigation.navigate('Login');
                      actions.resetForm();
                    } catch (error) {
                      Toast.show({
                        topOffset: 60,
                        type: 'error',
                        text1: 'Something went wrong',
                        text2: 'Please try again',
                      });
                    }
                  } else {
                    Alert.alert(result.message);
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }}
          >
            {(props) => (
              <StyledFormArea>
                <MyTextInput
                  label="Full Name"
                  icon="person"
                  placeholder="Abebe Belete Desta"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('fullName')}
                  onBlur={props.handleBlur('fullName')}
                  value={props.values.fullName}
                />
                <ValidationMsg>{props.touched.fullName && props.errors.fullName}</ValidationMsg>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="alem@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('email')}
                  onBlur={props.handleBlur('email')}
                  value={props.values.email}
                  keyboardType="email-address"
                />
                <ValidationMsg>{props.touched.email && props.errors.email}</ValidationMsg>
                <MyTextInput
                  label="Phone Number"
                  icon="phone"
                  placeholder="0932456787"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('phoneNumber')}
                  onBlur={props.handleBlur('phoneNumber')}
                  value={props.values.phoneNumber}
                />
                <ValidationMsg>{props.touched.phoneNumber && props.errors.phoneNumber}</ValidationMsg>
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={props.handleChange('password')}
                  onBlur={props.handleBlur('password')}
                  value={props.values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <ValidationMsg>{props.touched.password && props.errors.password}</ValidationMsg>
                <MsgBox>---</MsgBox>
                <StyledButton onPress={props.handleSubmit}>
                  <ButtonText>Signup</ButtonText>
                </StyledButton>
                <Line />
                <ExtraView>
                  <ExtraText>Have an account?</ExtraText>
                  <TextLink onPress={() => navigation.navigate('Login')}>
                    <TextLinkContent> Login </TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...probs }) => {
  return (
    <View>
      <LeftIcon>
        <MaterialIcons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledTextLabel>{label}</StyledTextLabel>
      <StyledTextInput {...probs} />

      <TouchableOpacity>
        <StyledTextInput {...probs} />
      </TouchableOpacity>
      {/* 
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )} */}
    </View>
  );
};
export default Signup;
