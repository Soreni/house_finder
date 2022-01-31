export const FETCH_HOUSES_SUCCESS = 'FETCH_HOUSES_SUCCESS';
export const FETCH_HOUSES_FAIL = 'FETCH_HOUSES_FAIL';
export const CREATE_HOUSES_SUCCESS = 'CREATE_HOUSES_SUCCESS';
export const CREATE_HOUSES_FAIL = 'CREATE_HOUSES_FAIL';

const BASE_URL = 'http://e412-197-156-86-67.ngrok.io/api/housefinder';

export const fecthHouses = () => {
  return async (dispatch) => {
    //MAKE GET Request
    const result = await fetch(`${BASE_URL}/houses/`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const data = await result.json();
    console.log('house action: pass json');
    console.log(data);
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
    // console.log(`check data ${data}`);
    return data;
  };
};
export const createHouses = (houseData) => {
  const {
    houseType,
    unitStructure,
    price,
    image,
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
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        houseType,
        unitStructure,
        price,
        image,
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
