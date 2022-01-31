import {
  FETCH_FEEDBACKS_SUCCESS,
  FETCH_FEEDBACKS_FAIL,
  CREATE_FEEDBACKS_SUCCESS,
  CREATE_FEEDBACKS_FAIL,
} from '../actions/feedbackAction';

const initialState = {
  feedbacks: {},
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_FEEDBACKS_SUCCESS:
      return {
        ...state,
        feedbacks: action.payload,
      };
    case FETCH_FEEDBACKS_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
    case CREATE_FEEDBACKS_SUCCESS:
      return {
        ...state,
        feedbacks: action.payload,
      };
    case CREATE_FEEDBACKS_FAIL:
      return {
        ...state,
        errors: action.payload,
      };
  }
  return state;
}
