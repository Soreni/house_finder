import React from 'react';
import { Text, View, StyleSheet, TouchableWithoutFeedback, ImageBackground } from 'react-native';

import { SubTitle, StyledTextInput, StyledTextLabel, Colors } from './styles';

const CardComponent = (props) => {
  // console.log('imagebuffer:', props.images);
  //const imageUri = props.images.forEach((imageUri) => Buffer.from(imageUri).toString('base64'));

  // console.log('imagebuffer:', imageUri);
  return (
    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('HomeDetails', { houseId: props.houseId })}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <SubTitle>
            {props.title} {props.houseType}
          </SubTitle>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground style={styles.image} source={require('../../assets/house1.png')}>
            <Text style={styles.price}>$ {props.price}</Text>
            <View style={styles.year}>
              <StyledTextLabel style={styles.yearText}>{props.localAreaName}</StyledTextLabel>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.description}>
          <StyledTextLabel>{props.description}</StyledTextLabel>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    elevation: 5,
    height: 300,
    marginBottom: 20,
    overflow: 'hidden',
    // card: {
    //   borderRadius: 15,
    //   backgroundColor: Colors.primary,
    //   marginBottom: 20,
    //   overflow: 'hidden',
    // },
  },
  titleContainer: {
    height: '15%',
    padding: 10,
  },

  imageContainer: {
    width: '100%',
    height: '65%',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 30,
    color: '#fff',
    margin: 10,
  },
  year: {
    margin: 10,
    backgroundColor: '#2652B0',
    height: 25,
    width: 80,
    borderRadius: 5,
  },
  yearText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  description: {
    margin: 10,
  },
});
export default CardComponent;
