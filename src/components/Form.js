import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, KeyboardAvoidingView, Text } from 'react-native';

import UserInput from './UserInput';

import usernameImg from '../../images/username.png';
import passwordImg from '../../images/password.png';

export default class Form extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <Text style={styles.text}>Email</Text>
        <UserInput
          source={usernameImg}
          placeholder="Enter your email"
          autoCapitalize={'none'}
          returnKeyType={'done'}
          autoCorrect={false}
        />
        <Text style={styles.text}>Password</Text>
        <UserInput
          source={passwordImg}
          secureTextEntry={true}
          placeholder="Enter your password"
          returnKeyType={'done'}
          autoCapitalize={'none'}
          autoCorrect={false}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    flex: 0.08,
    textAlign: 'left',
    alignSelf: 'stretch',
    paddingLeft: 60,
    fontWeight: 'bold',
  },
});
