import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

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
  PageBackground,
} from './styles';

const CardComponent = (props) => {
  console.log('card component');
  console.log(props.houseId);
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate('HomeDetails', { houseId: props.houseId })}>
      <View style={styles.card}>
        <View style={styles.titleContainer}>
          <SubTitle>
            {props.title} {props.houseType}
          </SubTitle>
        </View>
        <View style={styles.imageContainer}>
          <ImageBackground style={styles.image} source={require('../../assets/house.png')}>
            <Text style={styles.price}>{props.price}</Text>
            <View style={styles.year}>
              <StyledTextLabel style={styles.yearText}>{props.localAreaName}</StyledTextLabel>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.description}>
          <StyledTextLabel>{props.description}</StyledTextLabel>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    elevation: 5,
    height: 300,
    margin: 10,
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
