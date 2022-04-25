import { createAction } from '@reduxjs/toolkit';

export const loginSuccess = createAction(
  'user/loginSuccess'
);
export const loginError = createAction('user/loginError');

export const profileDataSuccess = createAction(
  'user/profileDataSuccess'
);
export const profileDataError = createAction(
  'user/profileDataError'
);

export const logoutSuccess = createAction(
  'user/logoutSuccess'
);
