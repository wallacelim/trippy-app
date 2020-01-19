import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { LoginScreen } from './src/screens/LoginScreen';
import { SignupScreen } from './src/screens/SignupScreen';
import MapScreen from './src/screens/MapScreen';
import { ManageScreen } from './src/screens/ManageScreen';

const AppStack = createStackNavigator(
  {
    //Map: MapScreen,
    Manage: ManageScreen,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Manage',
  }
);
const AuthStack = createSwitchNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  },
  {
    headerMode: 'none',
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Auth: AuthStack,
      App: AppStack,
    },
    {
      initialRouteName: 'App',
    }
  )
);
