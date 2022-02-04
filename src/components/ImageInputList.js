import React, { useRef } from 'react';
import { Image, View, StyleSheet, ScrollView } from 'react-native';
import { Colors } from './styles';

import ImageInput from './ImageInput';

const { darkLight, brand, primary, green } = Colors;

const ImageInputList = ({ imageUris = [], onDeleteImage, onAddImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd({ animated: true })}
      >
        <View style={styles.containerList}>
          {imageUris.length > 0 &&
            imageUris.map((uri) => (
              <View key={uri} style={styles.imageStyle}>
                <ImageInput imageUri={uri} onChangeImage={() => onDeleteImage(uri)} />
              </View>
            ))}

          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerList: {
    flexDirection: 'row',
  },
  imageStyle: {
    marginRight: 10,
  },
});

export default ImageInputList;
