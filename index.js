/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppGuide from './src/loginflow/AppGuide';
import App from './src/App';
import Test from './src/Homeflow/Test';

AppRegistry.registerComponent(appName, () => Test);
