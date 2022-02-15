import React, { useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

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
} from '../components/styles';

const HomeDetails = ({ route }) => {
  const navigation = useNavigation();
  const { houseId } = route.params;
  const house = useSelector((state) => state.house.house.house.filter((house) => house._id === houseId));
  console.log('house', house);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{house[0].unitStructure}</Text>
        </View>
        <View>
          {/* <Image
            source={{
              uri: base64String, //data.data in your case
            }}
            style={styles.image}
          /> */}
          <Image source={require('../../assets/house1.png')} style={styles.image} />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>House Type: </Text>
          <Text style={styles.value}>{house[0].houseType}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Price: </Text>

          <Text style={styles.value}>{house[0].price}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Location: </Text>
          <Text style={styles.value}>{house[0].localAreaName}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.value}>This is the Address</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Contact Person: </Text>
          <Text style={styles.value}>{house[0].postedBy.phoneNumber}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.value}>{house[0].description}</Text>
        </View>
        <StyledButton>
          <ButtonText onPress={() => navigation.navigate('HouseLocation', { gpsLocation: house[0].GPSLocation })}>
            View House Location on the Map
          </ButtonText>
        </StyledButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
  },
  image: {
    width: '100%',
    height: 200,
  },
  group: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1,
  },
});
export default HomeDetails;
