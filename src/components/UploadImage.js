import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity,Button, Text, Alert, StyleSheet, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';


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
    StyledIMGButton


} from '../components/styles';

export default function UploadImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    checkForCameraRollPermission()
  }, []);

  const addImage = async () => {

    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4,3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      console.log(_image.uri)
      setImage(_image.uri);
      
    }
  }
 
  const  checkForCameraRollPermission= async()=>{
    const { status } = await ImagePicker.getMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
    //  alert("Please grant camera roll permissions inside your system's settings");
     Alert.alert(
        'Please Allow Access',
        [
            'House Finder app needs access to your photo library to upload images.',
            '\n\n',
            'Please go to Settings of your device and grant permissions.',
        ].join(''),
        [
            { text: 'Not Now', style: 'cancel' },
            { text: 'Settings', onPress: () => Linking.openURL('app-settings:') },
        ],
    );
    }else{
      console.log('Media Permissions are granted')
    }
  
}


  return (
            <View >
                {
                    image  && <Image source={{ uri: image }} style={styles.imageStyle} />
                }
                    
                    <View >
                        <StyledIMGButton onPress={addImage} >
                        <StyledTextLabel>{image ? 'Edit' : 'Upload'} Image</StyledTextLabel>
                        <AntDesign name="camera" size={30} color="black" />                           
                        </StyledIMGButton>
                       
                    </View>


            </View>
   
  );
}

const styles=StyleSheet.create({
    imageStyle: { 
        width: 200, 
        height: 200 
    },
})