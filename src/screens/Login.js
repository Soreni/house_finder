import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View, Alert } from 'react-native';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigationContainerRef } from '@react-navigation/native';
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
  ValidationMsg,
} from '../components/styles';

const { darkLight, brand, primary, green } = Colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';
//actions handling
import * as userAction from '../redux/actions/userAction';
import AuthContext from '../auth/context';

const formSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);
  const navigationRef = useNavigationContainerRef();
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  //handleSubmit ()
  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message, type);
    setMessageType(type);
  };

  return (
    <>
      <KeyboardAvoidingWrapper>
        <StyledContainer>
          <StatusBar style="dark" />
          <InnerContainer>
            <PageLogo resizeMode="cover" source={require('../../assets/hplogo.png')} />
            <PageTitle>House Finder</PageTitle>
            {/* <SubTitle>Experience the Reliable</SubTitle> */}

            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={formSchema}
              onSubmit={(values, actions) => {
                dispatch(userAction.loginUser(values))
                  .then(async (result) => {
                    if (result.success) {
                      try {
                        await AsyncStorage.setItem('token', result.token);
                        const user = jwtDecode(result.token);
                        authContext.setUser(user);
                        console.log(user);
                        //navigationRef.navigate('MainTab');
                        actions.resetForm();
                      } catch (err) {
                        console.log(err);
                      }
                    } else {
                      Alert.alert(result.message);
                    }
                  })
                  .catch((err) => console.log(err));
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                <StyledFormArea>
                  <MyTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="alem@gmail.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  <ValidationMsg>{touched.email && errors.email}</ValidationMsg>
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
                  <MsgBox type={messageType}>{message}</MsgBox>
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                  <Line />

                  <ExtraView>
                    <ExtraText>Don't have an account yet?</ExtraText>
                    <TextLink onPress={() => navigation.navigate('Signup')}>
                      <TextLinkContent> SignUp </TextLinkContent>
                    </TextLink>
                  </ExtraView>
                </StyledFormArea>
              )}
            </Formik>
          </InnerContainer>
        </StyledContainer>
      </KeyboardAvoidingWrapper>
    </>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...probs }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledTextLabel>{label}</StyledTextLabel>
      <StyledTextInput {...probs} />

      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight} />
        </RightIcon>
      )}
    </View>
  );
};
export default Login;
