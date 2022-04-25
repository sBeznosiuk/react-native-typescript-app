import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useState } from 'react';
import { View, Image, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../redux/auth/actions';
import { getCurrentUser } from '../redux/auth/selectors';
import styles from './styles/styles';

const Profile: FC = () => {
  const user = useSelector(getCurrentUser);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState('light');

  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');

    dispatch(logoutSuccess());
  };

  const handleTheme = async () => {
    theme === 'light'
      ? setTheme('dark')
      : setTheme('light');

    await AsyncStorage.setItem('theme', theme);
  };

  return (
    <View style={styles.container}>
      {user && (
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={{
              uri: user.avatar,
            }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.profileText}>
              {user.first_name} {user.last_name}
            </Text>
            <Text style={styles.profileText}>
              {user.email}
            </Text>
          </View>
        </View>
      )}
      <Button
        style={styles.profileButton}
        onPress={handleTheme}
        title={`Change theme to: ${
          theme === 'light' ? 'dark' : 'light'
        }`}
        color="#841584"
        accessibilityLabel="Logout"
      />
      <Button
        style={styles.profileButton}
        onPress={handleLogout}
        title="Logout"
        color="#841584"
        accessibilityLabel="Logout"
      />
    </View>
  );
};

export default Profile;
