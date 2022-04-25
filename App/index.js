import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import store from './redux/auth/reducer';

const RNRedux = () => (
  <Provider store={store}>
    <NavigationContainer>
      <App />
    </NavigationContainer>
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
