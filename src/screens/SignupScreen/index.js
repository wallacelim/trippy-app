import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

import Logo from '../../components/Logo';

export default class SignupScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Logo justifyContentSetting="flex-start"></Logo>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#4FD1C5',
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
