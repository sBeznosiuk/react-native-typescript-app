import {
  createReducer,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {
  loginError,
  loginSuccess,
  logoutSuccess,
  profileDataSuccess,
} from './actions';
import mainReducer from '../main/reducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialUserState = {
  email: null,
  password: null,
};

const user = createReducer(initialUserState, {
  [loginSuccess]: (_, { payload }: any) => payload,
});

const userInfo = createReducer(null, {
  [profileDataSuccess]: (_, { payload }: any) => payload,
});

const isAuthenticated = createReducer(
  AsyncStorage.getItem('token') ? true : false,
  {
    [loginSuccess]: () => true,
    [loginError]: () => false,
    [logoutSuccess]: () => false,
  }
);

const authReducer = combineReducers({
  user,
  isAuthenticated,
  userInfo,
});

const rootReducer = combineReducers({
  auth: authReducer,
  main: mainReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
