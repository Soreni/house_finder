export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export const FETCH_HOUSES_FAIL = 'FETCH_HOUSES_FAIL';
export const CREATE_HOUSES_SUCCESS = 'CREATE_HOUSES_SUCCESS';
export const CREATE_HOUSES_FAIL = 'CREATE_HOUSES_FAIL';

import BASE_URL from '../../shared/baseUrl';
export const fecthHouses = () => {
  return async (dispatch) => {
    let result;
    let data;
    //MAKE GET Request
    try {
      result = await fetch(`${BASE_URL}/houses/`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      data = await result.json();

      if (data.success) {
        dispatch({
          type: 'FETCH_HOUSES_SUCCESS',
          payload: data,
        });
      } else {
        dispatch({
          type: 'FETCH_HOUSES_FAIL',
        });
      }
    } catch (err) {
      console.log(err);
    }
    return data;
  };
};
export const createHouses = (houseData, token) => {
  const {
    houseType,
    unitStructure,
    price,
    images,
    houseNumber,
    isFurnished,
    localAreaName,
    GPSLocation,
    description,
    postedBy,
  } = houseData;

  return async (dispatch) => {
    //MAKE GET Request
    const result = await fetch(`${BASE_URL}/houses/register`, {
      method: 'POST',
      headers: {
        'auth-token': token,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        houseType,
        unitStructure,
        price,
        images: arraybuffer,
        houseNumber,
        isFurnished,
        localAreaName,
        GPSLocation,
        description,
        postedBy,
      }),
    });

    const data = await result.json();
    if (data.success) {
      dispatch({
        type: 'CREATE_HOUSES_SUCCESS',
        payload: data,
      });
    } else {
      dispatch({
        type: 'CREATE_HOUSES_FAIL',
      });
    }
    return data;
  };
};
