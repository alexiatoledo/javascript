/* eslint-disable import/no-unresolved */
import { AppRegistry } from 'react-native';
// eslint-disable-next-line import/no-unresolved
import App from './src/App';
// eslint-disable-next-line import/named
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
