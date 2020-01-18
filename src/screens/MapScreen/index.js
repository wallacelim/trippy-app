import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
});

export const MapScreen = () => {
  const [region, setRegion] = useState({
    latitude: 1.2974437,
    longitude: 103.7834531,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setRegion(region => ({ ...region, latitude, longitude }));
      },
      console.log,
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      }
    );
  }, [setRegion]);

  return (
    <MapView
      style={styles.mapView}
      region={region}
      onRegionChangeComplete={setRegion}
      showsUserLocation
    />
  );
};
