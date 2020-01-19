import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, StatusBar, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import { PrimaryButton } from '../../components/Button';
import { SecondaryButton } from '../../components/Button';
import { Spacing } from '../../typings/Spacing';
import { Color } from '../../typings/Color';
import { FontSize } from '../../typings/FontSize';
import {
  useDrawerRadio,
  DrawerRadioItem,
  DrawerRadio,
} from '../../components/DrawerRadio';

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
  },
  marker: {
    backgroundColor: Color.Gray100,
    width: Spacing.XXL,
    height: Spacing.XXL,
    borderRadius: Spacing.XXL,
    justifyContent: 'center',
    alignItems: 'center',
  },
  markerImage: {
    width: Spacing.XXL - Spacing.S,
    height: Spacing.XXL - Spacing.S,
    borderRadius: Spacing.XXL,
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

const photos = [
  {
    url:
      'https://images.unsplash.com/photo-1579374358521-7b4fa4b276d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1955&q=80',
    latitude: 1.3059746,
    longitude: 103.7754383,
  },
  {
    url:
      'https://images.unsplash.com/photo-1579325010286-1e287f5a03e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    latitude: 1.5543976,
    longitude: 103.7441357,
  },
  {
    url: 'https://trippy-hnr.s3-ap-southeast-1.amazonaws.com/cat.jpg',
    latitude: 1.4564114,
    longitude: 103.6054502,
  },
];

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

  const { visible, show, hide } = useDrawerRadio(false);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.mapView}
        region={region}
        onRegionChangeComplete={setRegion}
        showsUserLocation
      >
        {photos.map(({ url, latitude, longitude }) => (
          <Marker coordinate={{ latitude, longitude }}>
            <View style={styles.marker}>
              <Image style={styles.markerImage} source={{ uri: url }}></Image>
            </View>
          </Marker>
        ))}
      </MapView>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>K</Text>
      </View>
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
        onPress={show}
      />
      <DrawerRadio visible={visible} hide={hide}>
        <DrawerRadioItem text="wacknwoll" selected />
        <DrawerRadioItem text="reliving singapore" />
        <DrawerRadioItem text="mountains" />
      </DrawerRadio>
    </View>
  );
};
