import { StyleSheet, Text, View } from 'react-native';
import React, { Component} from 'react';

import Wallpaper from './Wallpaper';
import Logo from './Logo';
import Form from './Form';
import Button_Submit from './Button_Submit';
import Signup_Prompt from './Signup_Prompt';
import Button_Signup from './Button_Signup';

export default class LoginScreen extends Component {
    render() {
      return (
        <Wallpaper>
          <Logo justifyContentSetting='center'/>
          <Form />
          <Button_Submit/>
          <Signup_Prompt/>
          <Button_Signup/>
        </Wallpaper>
      );
    }
  }
