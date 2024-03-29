import {
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAIL,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
} from '../actions/userAction';

const initialState = {
  user: [],
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case REGISTER_USER_FAIL:
      return {
        ...state,
        error: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        error: true,
      };
    case FETCH_USER_FAIL:
      return {
        ...state,
        error: true,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        error: true,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        error: true,
      };
  }
  return state;
}
