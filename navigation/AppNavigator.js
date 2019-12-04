import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../constants';

import Intro from '../screens/Intor';
import Login from '../screens/Login';
import Singup from '../screens/Singup';
import ForgetPassword from '../screens/ForgetPassword';

const RootStackNavigator = createStackNavigator(
  {
    Intro: Intro,
    Singup: Singup,
    Login: Login,
    ForgetPassword: ForgetPassword,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 3,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0, // for android
      },
      titleStyle: {
        textAlign: 'center',
      },
      headerBackImage: <Icon name='arrow-right' size={20} color={theme.colors.gray} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: 'center',
        marginLeft: theme.sizes.base * 2,
        paddingRight: theme.sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: theme.sizes.base,
      },
    }
  }
);

export default createAppContainer(RootStackNavigator);