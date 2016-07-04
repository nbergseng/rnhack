import {
  AppRegistry,
} from 'react-native';
import Reactotron from 'reactotron';
Reactotron.connect({ enabled: __DEV__ });

import App from './app/app';

AppRegistry.registerComponent('tt', () => App);
