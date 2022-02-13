import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const HouseLocation = (props) => {
  const gpsLocation = props.route.params.gpsLocation;

  const [mapRegion, setmapRegion] = useState({
    latitude: parseFloat(gpsLocation.latitude[0]),
    longitude: parseFloat(gpsLocation.longitude[0]),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.3559,
  });

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={mapRegion}>
        <Marker coordinate={mapRegion} title="Marker" />
      </MapView>
    </View>
  );
};
export default HouseLocation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
    //  alignSelf: 'stretch'
  },
});
