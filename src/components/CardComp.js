import React from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native';

import { Colors } from './styles';

//{ title, subTitle, imageUrl, onPress }
function Card({ title, houseType, price, localAreaName, description, images, ...props }) {
  return (
    <TouchableWithoutFeedback onPress={() => props.navigation.navigate('HomeDetails', { houseId: props.houseId })}>
      <View style={styles.card}>
        <Image style={styles.image} source={require('../../assets/house.png')} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title} {houseType}
          </Text>
          <Text style={styles.subTitle}>{price}</Text>
          <Text style={styles.normalText}>{localAreaName}</Text>
          <Text style={styles.normalText}>{description}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.primary,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subTitle: {
    color: Colors.moderateCyan,
    fontWeight: 'bold',
  },
  normalText: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  title: {
    marginBottom: 7,
  },
});

export default Card;
