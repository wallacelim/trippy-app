import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import Logo from './Logo.png';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 160,
  },
});

export const TrippyLogo = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.logo} source={Logo} />
    </View>
  );
};
