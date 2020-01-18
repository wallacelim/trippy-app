import React from 'react';
import { StyleSheet, TouchableHighlight, Text } from 'react-native';

import { Spacing } from '../../typings/Spacing';
import { FontSize } from '../../typings/FontSize';

const styles = StyleSheet.create({
  button: {
    height: Spacing.XL,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Spacing.S,
  },
  text: {
    fontSize: FontSize.M,
    fontWeight: 'bold',
  },
});

export const BaseButton = ({
  style,
  text,
  onPress,
  backgroundColor,
  pressedBackgroundColor,
  color,
}) => {
  return (
    <TouchableHighlight
      style={[styles.button, { backgroundColor }, style]}
      onPress={onPress}
      underlayColor={pressedBackgroundColor}
      activeOpacity={1}
    >
      <Text style={[styles.text, { color }]}>{text}</Text>
    </TouchableHighlight>
  );
};
