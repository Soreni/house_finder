export const FETCH_HOUSES_SUCCESS= 'FETCH_HOUSES_SUCCESS';
export const FETCH_HOUSES_FAIL = 'FETCH_HOUSES_FAIL';
export const CREATE_HOUSES_SUCCESS= 'CREATE_HOUSES_SUCCESS';
export const CREATE_HOUSES_FAIL = 'CREATE_HOUSES_FAIL';



const BASE_URL = 'http://4099-197-156-95-48.ngrok.io/api/housefinder';

export const fecthHouses =()=>{

    return async dispatch =>{
    //MAKE GET Request
     const result = await fetch(`${BASE_URL}/houses/`,{ method: 'GET',
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
     }
      })
        const data = await result.json();
        console.log(data);
 
        dispatch({
            type: 'FETCH_HOUSES_SUCCESS',
            payload: data
        })
  //  }
  /*  else {
        dispatch({
            type: 'FETCH_HOUSES_FAIL',
            payload: data
        })
    }*/
    return data;
    console.log(`check data ${data}`);
    }
}
export const createHouses =(houseData)=>{
    return async dispatch =>{
        const data = await result.json();
  
        if(data.success){
        dispatch({
            type: 'CREATE_HOUSES_SUCCESS',
            payload: data
        })
    } else {
        dispatch({
            type: 'CREATE_HOUSES_FAIL',
            payload: data
        })
    }
       return date;
    }
}




