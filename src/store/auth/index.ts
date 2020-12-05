import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { Dispatch } from 'react';
import { AUTH_TOKEN_KEY, AUTH_USER_PAYLOAD_KEY } from '~/constants';
import { setAuthorizationToken } from '~/utils';
import { AppDispatch } from '..';
import {
  AuthState, ILoginState, ISetCurrentUser, ISignupState,
} from './auth.interface';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: { }, isAuthenticated: false } as AuthState,
  reducers: {
    setCurrentUser(state: AuthState, action: PayloadAction<ISetCurrentUser>) {
      const { user } = action.payload;

      state.user = user;
      state.isAuthenticated = user === null ? false : !!Object.keys(user).length;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

export const fetchUser = () => async (dispatch: Dispatch<PayloadAction<ISetCurrentUser>>) => {
  const { data } = await axios.get('/user/dashboard');

  localStorage.setItem(AUTH_USER_PAYLOAD_KEY, JSON.stringify(data.data));
  dispatch(setCurrentUser({ user: data.data }));
};

export const login = (formData: ILoginState) => async (
  dispatch: AppDispatch,
) => {
  const { data } = await axios.post('/user/login', formData);
  const token = data.data.access_token;
  localStorage.setItem(AUTH_TOKEN_KEY, token);
  setAuthorizationToken(token);
  await dispatch(fetchUser());
};

export const register = (formData: ISignupState) => async (
  dispatch: AppDispatch,
) => {
  await axios.post('/user/register', formData);
  await dispatch(login({ username: formData.username, password: formData.password }));
};

export const logout = () => (dispatch: Dispatch<PayloadAction<ISetCurrentUser>>) => {
  localStorage.removeItem(AUTH_TOKEN_KEY);
  localStorage.removeItem(AUTH_USER_PAYLOAD_KEY);
  setAuthorizationToken('');
  return dispatch(setCurrentUser({ user: null }));
};

export default authSlice.reducer;
