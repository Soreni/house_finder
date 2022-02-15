import AsyncStorage from '@react-native-async-storage/async-storage';
const jwtDecode = require('jwt-decode');

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL = 'FETCH_USER_FAIL';
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS';
export const EDIT_USER_FAIL = 'EDIT_USER_FAIL';

import BASE_URL from '../../shared/baseUrl';

export const registerUser = (userData) => {
  const { fullName, email, phoneNumber, password } = userData;

  return async (dispatch) => {
    //MAKE POST TO REGISTER USER
    const result = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        phoneNumber,
        password,
      }),
    });
    const data = await result.json();
    console.log(data);
    if (data.success) {
      dispatch({
        type: 'REGISTER_USER_SUCCESS',
        payload: data,
      });
    } else {
      dispatch({
        type: 'REGISTER_USER_FAIL',
      });
    }

    return data;
  };
};

export const loginUser = (userData) => {
  const { email, password } = userData;
  return async (dispatch) => {
    //MAKE POST TO LOGIN USER
    const result = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await result.json();
    if (data.success) {
      dispatch({
        type: 'LOGIN_USER_SUCCESS',
        payload: data,
      });
    } else {
      dispatch({
        type: 'LOGIN_USER_FAIL',
      });
    }
    return data;
  };
};

export const fecthUser = (id, token) => {
  return async (dispatch) => {
    //MAKE GET Request
    let result;
    try {
      result = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'GET',
        headers: {
          'auth-token': token,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }

    const data = await result.json();
    console.log('innside result', data);
    if (data.success) {
      dispatch({
        type: 'FETCH_USER_SUCCESS',
        payload: data,
      });
    } else {
      dispatch({
        type: 'FETCH_USER_FAIL',
        payload: data,
      });
    }
    return data;
  };
};

export const editUser = (userData) => {
  const { fullName, email, phoneNumber, password } = userData;

  return async (dispatch) => {
    //MAKE POST TO REGISTER USER
    const result = await fetch(`${BASE_URL}/users/:id`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName,
        email,
        phoneNumber,
        password,
      }),
    });
    const data = await result.json();
    console.log(data);
    if (data.success) {
      dispatch({
        type: 'EDIT_USER_SUCCESS',
        payload: data,
      });
    } else {
      dispatch({
        type: 'EDIT_USER_FAIL',
      });
    }

    return data;
  };
};
