import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';

const HomeDetails = (props) => {
  const { houseId } = props.route.params;
  //const house = useSelector((state) => state.house.find((house) => house._id == houseId));

  console.log(`detail house : ${house}`);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>{house.unitstructure}</Text>
        </View>
        <View>
          <Image source={require('../../assets/house.png')} style={styles.image} />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Home Type: </Text>
          <Text style={styles.value}>{house.houseType}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Price: </Text>
          <Text style={styles.value}>$200,000</Text>
          <Text style={styles.value}>{house.price}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Year Built: </Text>
          <Text style={styles.value}>2020</Text>
          <Text style={styles.value}>{house.localAreaName}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.value}>This is the Address</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Contact Person: </Text>
          <Text style={styles.value}>{house.postedBy.phoneNumber}</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.value}>{house.description}</Text>
        </View>
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
