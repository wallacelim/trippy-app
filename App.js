import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import NavigationService from './NavigationService';

import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';


const MainNavigator = createStackNavigator(
  {
    //Login: {screen: LoginScreen},
    Signup: {screen: SignupScreen},
  },
  { 
    headerMode: 'none' },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
