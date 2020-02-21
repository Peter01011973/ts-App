import { AuthState, AUTH_SUCCESS, AUTH_LOGOUT, AuthActionTypes } from './types';

export function authSuccess(auth: AuthState): AuthActionTypes {
  return {
    type: AUTH_SUCCESS,
    payload: auth
  }
}

export function authLogout(): AuthActionTypes {
  return {
    type: AUTH_LOGOUT
  }
}