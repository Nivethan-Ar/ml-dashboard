/* eslint-disable no-param-reassign */
import { createSlice, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';

const initialUser = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user') || '{}')
  : null;

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: initialUser,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    logoutSuccess: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export default userSlice.reducer;

const { loginSuccess, logoutSuccess } = userSlice.actions;

//
export const login = (loginCredentials:any, callback:VoidFunction) => async (dispatch:Dispatch) => {
  const { username } = loginCredentials;

  try {
    const res = await axios.post(
      'http://localhost:3000/auth/signin',
      loginCredentials,
    );

    const { accessToken } = res.data;

    localStorage.setItem('jwtToken', accessToken); // remove this token when logout

    dispatch(loginSuccess({ username }));

    // callback to redirect the user from login page
    callback();
  } catch (err:any) {
    console.log(err);
  }
};

export const logout = () => async (dispatch:Dispatch) => {
  try {
    localStorage.removeItem('jwtToken');
    return dispatch(logoutSuccess());
  } catch (err:any) {
    return console.error(err.message);
  }
};
