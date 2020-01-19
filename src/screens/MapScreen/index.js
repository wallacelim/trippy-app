import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import MapView from 'react-native-maps';

import { PrimaryButton } from '../../components/Button';
import { SecondaryButton } from '../../components/Button';
import { Spacing } from '../../typings/Spacing';
import { Color } from '../../typings/Color';
import { FontSize } from '../../typings/FontSize';

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
  footerContainer: {
    position: 'absolute',
    right: Spacing.L,
    bottom: Spacing.L,
    flexDirection: 'column-reverse',
  },
  projectSelect: {
    position: 'absolute',
    left: Spacing.L,
    bottom: Spacing.L,
  },
  avatar: {
    position: 'absolute',
    top: Spacing.L + StatusBar.currentHeight,
    right: Spacing.L,
    backgroundColor: Color.Teal500,
    width: Spacing.XL,
    height: Spacing.XL,
    borderRadius: Spacing.XL,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: FontSize.L,
    fontWeight: 'bold',
    color: Color.White,
  },
});

export const MapScreen = ({ navigation }) => {
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
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.mapView}
        region={region}
        onRegionChangeComplete={setRegion}
        showsUserLocation
      />
      <View style={styles.footerContainer}>
        <PrimaryButton
          style={{ marginTop: Spacing.S }}
          text="Camera"
          onPress={() => {}}
        />
        <SecondaryButton text="Details" onPress={() => {}} />
      </View>
      <SecondaryButton
        style={styles.projectSelect}
        text="wacknwoll"
        onPress={() => {}}
      />
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>K</Text>
      </View>
    </View>
  );
};
