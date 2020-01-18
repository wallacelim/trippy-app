import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

import logoImg from '../images/logo.png';

export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{height: 170, backgroundColor: 'transparent'}} />
        <Image source={logoImg} style={styles.image} />
        <Text style={styles.text}>TRIPPY</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    fontSize: 50,
    marginTop: 20,
  },
});
