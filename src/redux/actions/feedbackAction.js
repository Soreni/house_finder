export const FETCH_FEEDBACKS_SUCCESS = 'FETCH_FEEDBACKS_SUCCESS';
export const FETCH_FEEDBACKS_FAIL = 'FETCH_FEEDBACKS_FAIL';
export const CREATE_FEEDBACKS_SUCCESS = 'CREATE_FEEDBACKS_SUCCESS';
export const CREATE_FEEDBACKS_FAIL = 'CREATE_FEEDBACKS_FAIL';

import BASE_URL from '../../../../../../../ACT/HouseFinder/House-Finder-Frontend/house_finder/src/shared/baseUrl';

export const fecthFeedback = () => {
  return async (dispatch) => {
    //MAKE GET Request
    const result = await fetch(`${BASE_URL}/feedbacks/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await result.json();
    console.log(data);
    if (data.success) {
      dispatch({
        type: 'FETCH_FEEDBACKS_SUCCESS',
        payload: data,
      });
    } else {
      dispatch({
        type: 'FETCH_FEEDBACKS_FAIL',
      });
    }
    return data;
  };
};
export const createFeedbacks = (feedbackData) => {
  const { message, postedBy } = feedbackData;

  return async (dispatch) => {
    //MAKE GET Request
    const result = await fetch(`${BASE_URL}/feedbacks/register`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message,
        postedBy,
      }),
    });
    console.log('after save');
    const data = await result.json();
    console.log('inside dispach');
    console.log(data);
    if (data.success) {
      dispatch({
        type: 'CREATE_FEEDBACKS_SUCCESS',
        payload: data,
      });
    } else {
      dispatch({
        type: 'CREATE_FEEDBACKS_FAIL',
      });
    }
    return data;
  };
};
