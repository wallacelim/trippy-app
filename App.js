import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

export default createAppContainer(
  createStackNavigator(
    {
      Login: LoginScreen,
      Signup: SignupScreen,
    },
    {
      headerMode: 'none',
      initialRouteName: 'Login',
    }
  )
);
