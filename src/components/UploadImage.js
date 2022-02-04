import React, { useState, useEffect } from 'react';
import { Image, View, Platform, TouchableOpacity, Button, Text, Alert, StyleSheet, Linking } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';

const { darkLight, brand, primary, green } = Colors;

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
  StyledIMGButton,
} from '../components/styles';

export default function UploadImage() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    checkForCameraRollPermission();
  }, []);

  const addImage = async () => {
    let _image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(JSON.stringify(_image));

    if (!_image.cancelled) {
      console.log(_image.uri);
      setImage(_image.uri);
    }
  };

  const checkForCameraRollPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library.');
    }
  };

  return (
    <View style={styles.container}>
      <View onPress={addImage}>
        <StyledTextLabel>{image ? 'Edit' : 'Upload'} Image</StyledTextLabel>
        <AntDesign name="camera" size={30} color="black" />
      </View>
      {image && <Image source={{ uri: image }} style={styles.imageStyle} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
});
