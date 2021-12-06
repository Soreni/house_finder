import React,{useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import {Formik} from 'formik';
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';
import AsyncStorage  from '@react-native-async-storage/async-storage';
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
    Avatar


 } from '../components/styles';


 const Main = ({navigation})=>{


 const loadProfile = async ()=>{
    const token =  await AsyncStorage.getItem('token');
    const decode = jwtDecode(token);
    console.log(decode);

 }
 useEffect(()=>{
     loadProfile();
 })

   //  const {email, name, photoUrl} = route.params;
     const AvatarImg = require('../../assets/logo.png');
     
     return(
         <>
             <StatusBar style= "dark" />
             <InnerContainer>
       
             <WelcomeImage resizeMode='cover' source= {require('../../assets/flo.png')}/>

                 <WelcomeContainer>
                    <PageTitle welcome={true}>Welcome to House Finder</PageTitle>
                    
                                 
                    <StyledFormArea>
                         <Avatar resizeMode='cover' source= {AvatarImg}/>
                         <Line />
                         <StyledButton onPress={()=>{ navigation.navigate("Login");}}>
                             <ButtonText>Logout</ButtonText>
                         </StyledButton>
                         </ StyledFormArea>             
                 </WelcomeContainer>
             </InnerContainer>
         </>
     );
 }


 const MyTextInput = ({label, icon, isPassword ,hidePassword , setHidePassword,  ...probs})=>{
     return(
         <View>
             <LeftIcon>
                 <Octicons name={icon} size={30} color={brand} />
             </LeftIcon>
             <StyledTextLabel>{label}</StyledTextLabel>
             <StyledTextInput {...probs} />
       
             {isPassword && (
                 
                 <RightIcon onPress={()=>setHidePassword(!hidePassword)}>
                     <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color={darkLight}/>
                 </RightIcon>
             )}

         </View>


     );
 };
 export default Main;