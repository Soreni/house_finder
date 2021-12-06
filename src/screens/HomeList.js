import React,{useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, TouchableOpacity, Alert} from 'react-native';


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
    ValidationMsg


 } from '../components/styles';

 const {darkLight, brand, primary, green} = Colors;

 //keyboard avoiding view 
 import  KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

const Homelist = ()=>{
    return (
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style= "dark" />
            <InnerContainer>
            <View>
      
            </View>
        </InnerContainer>
         </StyledContainer>
         </KeyboardAvoidingWrapper>
    );
}

export default Homelist;