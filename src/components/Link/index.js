import React from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';

import { Spacing } from '../../typings/Spacing';
import { Color } from '../../typings/Color';

const styles = StyleSheet.create({
  link: {
    padding: Spacing.XXS,
    borderRadius: Spacing.XXS,
  },
  text: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export const Link = ({ color, fontSize, children, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.link}
      onPress={onPress}
      activeOpacity={1}
      underlayColor={Color.Gray400}
    >
      <Text style={[styles.text, { color, fontSize }]}>{children}</Text>
    </TouchableHighlight>
  );
};
