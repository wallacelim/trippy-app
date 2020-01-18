import React, { Component } from 'react';

import Wallpaper from '../../components/Wallpaper';
import Logo from '../../components/Logo';
import Form from '../../components/Form';
import Button_Submit from '../../components/Button_Submit';
import Button_Signup from '../../components/Button_Signup';
import Signup_Prompt from './Signup_Prompt';

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo justifyContentSetting="center" />
        <Form />
        <Button_Submit />
        <Signup_Prompt />
        <Button_Signup />
      </Wallpaper>
    );
  }
}
