import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {
  getCurrentUserError,
  getCurrentUserSuccess,
  loginError,
  loginSuccess,
  logoutError,
  logoutSuccess,
  profileDataError,
  profileDataSuccess,
} from './actions';

export const login =
  (credentials: { email: string; password: string }) =>
  async dispatch => {
    try {
      dispatch(loginSuccess(credentials));

      await AsyncStorage.setItem(
        'email',
        credentials.email
      );
    } catch (e) {
      dispatch(loginError(e));
    }
  };

export const profileData = () => async dispatch => {
  try {
    const { data } = await axios.get(
      `https://reqres.in/api/users/${Math.floor(
        Math.random() * 10
      )}`
    );

    console.log(data.data);

    dispatch(profileDataSuccess(data.data));
  } catch (e) {
    dispatch(profileDataError(e));
  }
};
