import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { Spacing } from '../../typings/Spacing';
import { Color } from '../../typings/Color';
import { FontSize } from '../../typings/FontSize';

const styles = StyleSheet.create({
  item: {
    height: Spacing.XXL,
    backgroundColor: Color.White,
    paddingHorizontal: Spacing.L,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: FontSize.M,
    fontWeight: 'bold',
    color: Color.Gray800,
  },
  selectedRadio: {
    width: Spacing.L,
    height: Spacing.L,
    backgroundColor: Color.Teal500,
    borderRadius: Spacing.L,
  },
  unselectedRadioOuter: {
    width: Spacing.L,
    height: Spacing.L,
    backgroundColor: Color.Gray400,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Spacing.L,
  },
  unselectedRadioInner: {
    width: Spacing.S,
    height: Spacing.S,
    backgroundColor: Color.White,
    borderRadius: Spacing.S,
  },
});

export const DrawerRadioItem = ({ text, selected, onPress }) => {
  return (
    <TouchableHighlight
      style={styles.item}
      onPress={onPress}
      underlayColor={Color.Gray400}
      activeOpacity={1}
    >
      <>
        <Text style={styles.text}>{text}</Text>
        {selected ? (
          <View style={styles.selectedRadio} />
        ) : (
          <View style={styles.unselectedRadioOuter}>
            <View style={styles.unselectedRadioInner} />
          </View>
        )}
      </>
    </TouchableHighlight>
  );
};
