import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import { Spacing } from '../../typings/Spacing';
import { Color } from '../../typings/Color';
import { FontSize } from '../../typings/FontSize';
import Logo from './Logo.png';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  logo: {
    width: Spacing.XXL,
    height: Spacing.XXL,
  },
  text: {
    color: Color.Gray600,
    fontWeight: 'bold',
    fontSize: FontSize.XL,
  },
});

export const TrippyLogo = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.logo} source={Logo} />
      <Text style={styles.text}>Trippy</Text>
    </View>
  );
};
