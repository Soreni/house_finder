import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, FlatList } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';

import Card from '../components/Card__';
import ActivityIndicator from '../components/ActivityIndicator';
import * as houseAction from '../redux/actions/houseAction';

const Homelist = (props) => {
  const dispatch = useDispatch();
  const isMounted = useRef(null);
  const [house, setHouse] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUris, setImageUris] = useState();

  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      dispatch(houseAction.fecthHouses())
        .then((data) => {
          setHouse([...data.house]);
        })
        .catch((err) => {
          console.error(err);
        });
    }

    return () => (isMounted.current = false);
  }, [dispatch, isMounted.current]);

  // const getHouses = () => {
  //   //setLoading(true);
  //   dispatch(houseAction.fecthHouses())
  //     .then((data) => {
  //       //  setLoading(false);
  //       if (!data.success) setError(true);

  //       setError(false);
  //       setHouse([...data.house]);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  return (
    <View style={styles.container}>
      <FlatList
        data={house}
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
});
export default Homelist;
