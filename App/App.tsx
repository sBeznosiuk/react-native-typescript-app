import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import AuthPage from './Components/AuthPage';
import Main from './Components/Main';
import { getIsAuthenticated } from './redux/auth/selectors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Profile from './Components/Profile';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  const isAuthenticated: boolean = useSelector(
    getIsAuthenticated
  );

  return (
    <>
      <Tab.Navigator>
        {isAuthenticated ? (
          <>
            <Tab.Screen name="Feeds" component={Main} />
            <Tab.Screen
              name="Profile"
              component={Profile}
            />
          </>
        ) : (
          <Tab.Screen name="Login" component={AuthPage} />
        )}
      </Tab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: '1',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
