import { I18nManager } from 'react-native';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React from 'react';

import { Feather } from '@expo/vector-icons';
import AppNavigator from './navigation/AppNavigator';
import MainNavigator from './navigation/MainNavigator';

const images = [
  require('./assets/icons/back.png'),
  require('./assets/icons/about.png'),
  require('./assets/icons/dislike.png'),
  require('./assets/icons/like.png'),
  require('./assets/icons/heart.png'),
  require('./assets/icons/menu1.png'),
  require('./assets/icons/message.png'),
  require('./assets/icons/settings.png'),
  require('./assets/icons/store.png'),
  require('./assets/icons/user.png'),
  require('./assets/images/avatar.png'),
];

I18nManager.forceRTL(true);

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoadingComplete: false,
      fontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'droid-arabic-kufi': require('./assets/fonts/DroidKufi-Regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    if ( !this.state.isLoadingComplete  && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <AppNavigator />
      );
    }
  }

  loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync(images),
      await Font.loadAsync(Feather.font),
      await Font.loadAsync({
        'droid-arabic-kufi': require('./assets/fonts/DroidKufi-Regular.ttf'),
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

export default App;