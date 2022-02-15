import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View, FlatList, TextInput, Icon } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { MaterialIcons } from '@expo/vector-icons';

import Card from '../components/Card__';
import ActivityIndicator from '../components/ActivityIndicator';
import * as houseAction from '../redux/actions/houseAction';

import { Colors, RightIcon } from '../components/styles';

const Homelist = (props) => {
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUris, setImageUris] = useState();
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [houseData, setHouseData] = useState([]);

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      try {
        dispatch(houseAction.fecthHouses())
          .then((data) => {
            if (data) {
              setFilteredData([...data.house]);
              setHouseData([...data.house]);
            }
          })
          .catch((err) => {
            console.error(err);
          });
      } catch (err) {
        console.log(err);
      }
    }

    return () => (isMounted.current = false);
  }, [dispatch]);

  const searchHouse = (text) => {
    // const current = gpsLocation.map((loc)=>{loc.la})
    // Check if searched text is not blank
    if (text) {
      // Filter the houseData and update FilteredData
      const newData = filteredData.filter((item) => {
        // Applying filter for the inserted text in search bar
        const itemData = item.localAreaName ? item.localAreaName.toUpperCase() : ''.toUpperCase();

        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredData(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with houseData
      setFilteredData(houseData);
      setSearch(text);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchHouse(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Local Area Name"
          inlineImageLeft="username"
        />
        <RightIcon>
          <MaterialIcons name="search" size={30} color={Colors.mintBlue} paddingTop="10px" />
        </RightIcon>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Card
            navigation={props.navigation}
            title={item.unitStructure}
            houseType={item.houseType}
            price={item.price}
            images={item.images}
            address={item.address}
            description={item.description}
            localAreaName={item.localAreaName}
            houseId={item._id}
          />
        )}
      />

      <FloatingAction
        position="right"
        animated={false}
        showBackground={false}
        onPressMain={() => props.navigation.navigate('AddHome')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    height: 60,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
  },
});
export default Homelist;
