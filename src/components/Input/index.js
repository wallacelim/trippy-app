import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

import { Color } from '../../typings/Color';
import { Spacing } from '../../typings/Spacing';
import { FontSize } from '../../typings/FontSize';

const styles = StyleSheet.create({
  label: {
    fontSize: FontSize.S,
    fontWeight: 'bold',
    color: Color.Gray600,
    marginBottom: Spacing.XS,
    letterSpacing: Spacing.XXXS,
  },
  input: {
    height: Spacing.XL,
    borderColor: Color.Gray400,
    borderStyle: 'solid',
    borderWidth: Spacing.XXXS,
    borderRadius: Spacing.S,
    fontSize: FontSize.M,
    backgroundColor: Color.White,
    paddingLeft: Spacing.M,
    paddingRight: Spacing.M,
  },
});

export const Input = ({
  style,
  label,
  placeholder,
  hideInput,
  value,
  onChangeText,
  onBlur,
}) => {
  return (
    <View style={style}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={Color.Gray500}
        secureTextEntry={hideInput}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
      />
    </View>
  );
};
