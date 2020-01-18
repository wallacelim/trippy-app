import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ImageBackground} from 'react-native';

import bgSrc from '../images/background.gif';

export default class Wallpaper extends Component {
  render() {
    return (
      <ImageBackground style={styles.picture} source={bgSrc}>
        {this.props.children}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  picture: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
