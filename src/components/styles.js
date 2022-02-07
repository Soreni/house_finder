import styled from 'styled-components';
import { View, Image, Text, TouchableOpacity, TextInput, ImageBackground, Platform } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

//colors for
export const Colors = {
  primary: '#ffffff',
  secondary: '#e5e7eb',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#4e62b1',
  geen: '#10B981',
  red: '#EF4444',
  moderateCyan:'#4ecdc4',
  mintBlue: '#88B2CC',
  lightGreen: '#45b15b',
  black: '#000000',
  gray: '#808080',
  lightGray: '#D3D3D3',
  lightPurple: '#CBC3E3',
  light: '#f8f4f4',
  lightb: '#fc5c35',
  blueGrey: '#658EA9',
};

const {
  primary,
  secondary,
  tertiary,
  brand,
  mintBlue,
  darkLight,
  lightGray,
  lightGreen,
  blueGrey,
  geen,
  red,
  lightb,
  lightPurple,
  light,
} = Colors;

export const StyledContainer = styled(View)`
  flex: 1;
  padding: 0px;
  padding-top: ${StatusBarHeight + 1}px;
  background-color: ${primary};
`;
export const InnerContainer = styled(View)`
  flex: 1;
  width: 100%;
  margin-top: 1px;
  margin-bottom: 400px;
  align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled(Image)`
  min-width: 100%;
  height: 50%;
`;
export const PageLogo = styled(Image)`
  width: 100px;
  height: 80px;
`;
export const PageBackground = styled(ImageBackground)`
  width: 100%;
  height: 100%;
  flexdirection: row;
  justify-content: space-between;
  alignitems: flex-end;
`;

export const PageTitle = styled(Text)`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${blueGrey};
  padding: 0px;
  margin-bottom: 50px;

  ${(props) =>
    props.welcome == true &&
    `
    font-size: 35px;

 `};
`;

export const SubTitle = styled(Text)`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${brand};

  ${(props) =>
    props.welcome == true &&
    `
    margin-bottom: 5px;
    font-weight: normal;

 `};
`;

export const StyledFormArea = styled(View)`
  margin-top: 1px;
  width: 90%;
`;

export const StyledTextInput = styled(TextInput)`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 25px;
  font-size: 18px;
  height: 60px;
  margin-vertical: 5px;
  margin-bottom: 5px;
  flex-direction: row;
  color: ${tertiary};
`;

export const StyledTextLabel = styled(Text)`
    color: ${tertiary}
    font-size: 16px;
    text-align: left; 
  
 `;

export const LeftIcon = styled(View)`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled(TouchableOpacity)`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled(TouchableOpacity)`
  padding: 15px;
  background-color: ${blueGrey};
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-vertical: 10px;
  height: 60px;
  width: 100%;
  ${(props) =>
    props.google == true &&
    `
 background-color: ${geen};
 flex-direction: row;
 justify-content:center;
 `};
`;

export const StyledIMGButton = styled(TouchableOpacity)`
  padding: 15px;
  background-color: ${lightPurple};
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-vertical: 5px;
  height: 60px;
`;

export const StyledProButton = styled(TouchableOpacity)`
  padding: 15px;
  background-color: #85b8be;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-vertical: 5px;
  height: 60px;
`;

export const ButtonText = styled(Text)`
  color: ${primary};
  font-size: 16px;

  ${(props) =>
    props.google == true &&
    `
 padding:20px;
 `};
`;

export const MsgBox = styled(Text)`
  text-align: center;
  font-size: 13px;
  color: ${(props) => (props.message == 'SUCESS' ? geen : red)};
`;

export const Line = styled(View)`
  width: 100%;
  height: 1px;
  background-color: ${darkLight};
  margin-vertical: 10px;
`;

export const ExtraView = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled(Text)`
  flex-direction: row;
  justify-content: center;
  align-content: center;
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled(Text)`
  color: ${brand};
  font-size: 15px;
`;
export const ValidationMsg = styled(Text)`
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: red;
`;
