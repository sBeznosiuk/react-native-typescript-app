import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { FC, useEffect } from 'react';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../redux/auth/operations';
import * as EmailValidator from 'email-validator';
import styles from './styles/styles';

const AuthPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [error, setError] = useState('');
  const dispatch: any = useDispatch();

  const handleAuth = async () => {
    if (email && password) {
      if (!EmailValidator.validate(email)) {
        return setEmailError('Email not valid');
      }
      if (password.length < 8) {
        return setPasswordError(
          'Password length min 8 charts '
        );
      }

      await AsyncStorage.setItem('token', uuidv4());
      dispatch(login({ email, password }));
    } else {
      setError('Fill all the fields');
    }
  };

  return (
    <View style={styles.container}>
      {error ? <Text>{error}</Text> : null}
      {emailError ? <Text>{emailError}</Text> : null}

      <TextInput
        value={email}
        placeholder="Email..."
        name="email"
        onChangeText={setEmail}
      />

      {passwordError ? <Text>{passwordError}</Text> : null}

      <TextInput
        value={password}
        placeholder="Password..."
        name="pass"
        onChangeText={setPassword}
      />

      <Button title="Войти" onPress={handleAuth} />
    </View>
  );
};

export default AuthPage;
