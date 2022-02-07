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
          <PageLogo resizeMode="cover" source={require('../../assets/logo.png')} />
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
            {({ handleChange, handleBlur, handleSubmit, touched, errors, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Full Name"
                  icon="person"
                  placeholder="Abebe Belete Desta"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                  autoCapitalize={'characters'}
                />
                <ValidationMsg>{touched.fullName && errors.fullName}</ValidationMsg>
                <MyTextInput
                  label="Email Address"
                  icon="mail"
                  placeholder="alem@gmail.com"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                  autoCapitalize={'characters'}
                />
                <ValidationMsg>{touched.email && errors.email}</ValidationMsg>
                <MyTextInput
                  label="Phone Number"
                  icon="phone"
                  placeholder="0932456787"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('phoneNumber')}
                  onBlur={handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                  autoCapitalize={'characters'}
                />
                <ValidationMsg>{touched.phoneNumber && errors.phoneNumber}</ValidationMsg>
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <ValidationMsg>{touched.password && errors.password}</ValidationMsg>
                <MsgBox>---</MsgBox>
                <StyledButton onPress={handleSubmit}>
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

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};
export default Signup;
