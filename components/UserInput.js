import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Image } from 'react-native';

export default class UserInput extends Component {
  render() {
    return (
      <View style={styles.inputWrapper}>
        <Image source={this.props.source} style={styles.inlineImg} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={this.props.placeholder}
            secureTextEntry={this.props.secureTextEntry}
            autoCorrect={this.props.autoCorrect}
            autoCapitalize={this.props.autoCapitalize}
            returnKeyType={this.props.returnKeyType}
            placeholderTextColor="white"
            underlineColorAndroid="transparent"
          />
        </View>
      </View>
    );
  }
}

UserInput.propTypes = {
  source: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCorrect: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  returnKeyType: PropTypes.string,
};

// const DEVICE_WIDTH = Dimensions.get('window').width;
// const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  input: {
    width: 250,
    height: 50,
    marginHorizontal: 10,
  },
  inputContainer: {
    backgroundColor: 'rgba(230, 255, 255, 0.4)',
    width: 250,
    height: 50,
    marginHorizontal: 20,
    paddingLeft: 45,
    borderRadius: 20,
  },
  inputWrapper: {
    flex: 0.3,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 22,
    height: 25,
    left: 35,
    top: 11,
  },
});
