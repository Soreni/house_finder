import {
  FETCH_HOUSES_SUCCESS,
  FETCH_HOUSES_FAIL,
  CREATE_HOUSES_SUCCESS,
  CREATE_HOUSES_FAIL,
} from '../actions/houseAction';

const initialState = {
  house: [],
  errors: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_HOUSES_SUCCESS:
      return {
        ...state,
        house: action.payload,
      };
    case FETCH_HOUSES_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case CREATE_HOUSES_SUCCESS:
      return {
        ...state,
        house: action.payload,
      };
    case CREATE_HOUSES_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
  return state;
}
