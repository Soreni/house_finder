export const FETCH_HOUSES_SUCCESS= 'FETCH_HOUSES_SUCCESS';
export const FETCH_HOUSES_FAIL = 'FETCH_HOUSES_FAIL';
export const CREATE_HOUSES_SUCCESS= 'CREATE_HOUSES_SUCCESS';
export const CREATE_HOUSES_FAIL = 'CREATE_HOUSES_FAIL';



const BASE_URL = 'http://290f-197-156-86-147.ngrok.io/api/housefinder';

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
    const { houseType, unitstructure, price,  image,  houseNumber,
        isFurnished,  localAreaName,GPSLocation, description,   postedBy} = houseData;
                
    return async dispatch =>{
    //MAKE GET Request
    const result = await fetch(`${BASE_URL}/houses/register`,{ method: 'POST',
    headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
    },
    body:JSON.stringify({
        houseType,
        unitstructure,
        price,
        image,
        houseNumber,
        isFurnished,
        localAreaName,
        GPSLocation,
        description,
        postedBy,
        
     
    })
    })
   
        const data = await result.json();
        console.log('inside dispach');
        console.log(data)
    //    if(data.success){
        dispatch({
            type: 'CREATE_HOUSES_SUCCESS',
            payload: data,
         
         })
  /*  } else {
        dispatch({
            type: 'CREATE_HOUSES_FAIL',
            payload: data
        })
    }*/
       return data;
    }
}




