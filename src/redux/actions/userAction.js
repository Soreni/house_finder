export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAIL = 'REGISTER_USER_FAIL';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAIL = 'LOGIN_USER_FAIL';


const BASE_URL = 'http://3982-197-156-107-61.ngrok.io/api/housefinder';

export const registerUser =(userData)=>{
 const {fullName, email,phoneNumber, password} = userData;

 return async dispatch=>{
     //MAKE POST TO REGISTER USER
 const result = await fetch(`${BASE_URL}/users/register`,{ method: 'POST',
   headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
    },
   body:JSON.stringify({
       fullName,
       email,
       phoneNumber, 
       password})
    })
   const data = await result.json();
  
   if(data.success){
    dispatch({
        type: 'REGISTER_USER_SUCCESS',
        payload: data
    })
   }
   else{
    dispatch({
        type: 'REGISTER_USER_FAIL'
      
    })
   }


     return data;
 }
}


export const loginUser =(userData)=>{
    const {email, password} = userData;
    return async dispatch=>{
        //MAKE POST TO LOGIN USER
     const result = await fetch(`${BASE_URL}/users/login`,{ method: 'POST',
     headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
      },
     body:JSON.stringify({
         email,
         password})
      })
     const data = await result.json();

       if(data.success) {
        dispatch({
            type: 'LOGIN_USER_SUCCESS',
            payload: data
        })
       }
       else {
        dispatch({
            type: 'LOGIN_USER_FAIL'
            
        })
       }
       return data;
     
    }
}