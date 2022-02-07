import React, { useEffect } from 'react';
import { Image, View, TextLabel, Alert, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { Colors, StyledTextLabel } from './styles';

const { lightGray } = Colors;

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    checkForCameraRollPermission();
  }, []);

  const checkForCameraRollPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to access the library.');
    }
  };
  const handleImage = () => {
    if (!imageUri) {
      uploadImage();
    } else {
      Alert.alert('Delete', 'Are you sure you want to delete this image?', [
        { text: 'Yes', onPress: () => onChangeImage(null) },
        { text: 'No' },
      ]);
    }
  };
  const uploadImage = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
        base64: true,
      });
      console.log('result', result);
      if (!result.cancelled) {
        onChangeImage(result.uri);
      }
    } catch (error) {
      console.log('Error reading an image', error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={handleImage}>
      <View style={styles.container}>
        {!imageUri && (
          <>
            <MaterialCommunityIcons name="camera" size={40} color="black" />
            <StyledTextLabel>Upload</StyledTextLabel>
          </>
        )}

        {imageUri && (
          <>
            <Image source={{ uri: imageUri }} style={styles.imageStyle} />
          </>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: lightGray,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
