import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, View, CheckBox,Switch,Text } from 'react-native';
import { Slider} from 'react-native-elements'
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import * as yup from 'yup';
import AsyncStorage  from '@react-native-async-storage/async-storage';




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

const AddHome = ()=>{
    const [isFurnished, setIsFurnished] = useState(false);
    const toggleSwitch = () => setIsFurnished(previousState => !previousState);
    return (
        <KeyboardAvoidingWrapper>
            <StyledContainer>
                <StatusBar style="dark" />
                <InnerContainer>

                <StyledFormArea>
             
                 <MyTextInput
                  label="House Type"
                  placeholderTextColor={darkLight}/>
                  <MyTextInput
                  label="Rental Price"
                  placeholderTextColor={darkLight}/>
                 <MyTextInput 
                 label="Image"
                 PlaceholderContent={<ActivityIndicator />}
                 />
                 <MyTextInput
                  label="House Number"
                  placeholderTextColor={darkLight}/>              
                  <StyledTextLabel>
                  isFurnished
                  </StyledTextLabel>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isFurnished ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                   
                    value={isFurnished}
                    size= "large"
                    
                  />
                 <MyTextInput
                  label="Unit Structure"
                  placeholderTextColor={darkLight}/>
                 <MyTextInput
                  label="Address"
                  placeholderTextColor={darkLight}
                  multiline/>
                 <MyTextInput
                  label="Description"
                  placeholderTextColor={darkLight}
                  multiline={true}/>

                <StyledButton>
                <ButtonText>Add Home</ButtonText>
                </StyledButton>
                </StyledFormArea>
                </InnerContainer>
        <View>
        <ExtraText></ExtraText>
        </View>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
}

const MyTextInput = ({ label, icon, ...probs }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand} />
            </LeftIcon>
            <StyledTextLabel>{label}</StyledTextLabel>
            <StyledTextInput {...probs} />

        </View>


    );
};

export default AddHome;