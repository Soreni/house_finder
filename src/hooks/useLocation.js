import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
  const [gpsLocation, setGpsLocation] = useState();

  const checkLocationPermission = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        return;
      }
      const {
        coords: { altitude, longitude, latitude },
      } = await Location.getCurrentPositionAsync({});

      setGpsLocation({ altitude, longitude, latitude });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkLocationPermission();
  }, []);
  console.log({ gpsLocation });
  return gpsLocation;
};

export default useLocation;
