import { createAction } from '@reduxjs/toolkit';

const registerRequest = createAction('register/sendRequest');
const registerSuccess = createAction('register/registerSuccess');
const registerFeilure = createAction('register/registerFeilure');

const loginRequest = createAction('login/loginRequest');
const loginSuccess = createAction('login/loginSuccess');
const loginFeilure = createAction('login/loginFeilure');

const logoutRequest = createAction('logout/logoutRequest');
const logoutSuccess = createAction('logout/logoutSuccess');
const logoutFeilure = createAction('logout/logoutFeilure');

const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
const getCurrentUserFeilure = createAction('auth/getCurrentUserError');

export default {
  registerRequest,
  registerSuccess,
  registerFeilure,
  loginRequest,
  loginSuccess,
  loginFeilure,
  logoutRequest,
  logoutSuccess,
  logoutFeilure,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserFeilure,
};
