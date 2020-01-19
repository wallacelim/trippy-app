import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';

import { Color } from '../../typings/Color';
import { Spacing } from '../../typings/Spacing';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: Color.Gray700,
    opacity: 0.4,
  },
  radioGroup: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    opacity: 1,
    borderTopLeftRadius: Spacing.S,
    borderTopRightRadius: Spacing.S,
    overflow: 'hidden',
  },
});

export const DrawerRadio = ({ visible, hide, children }) => {
  if (!visible) {
    return null;
  }
  return (
    <>
      <TouchableWithoutFeedback onPress={hide}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={styles.radioGroup}>{children}</View>
    </>
  );
};

export * from './useDrawerRadio';
export * from './DrawerRadioItem';
