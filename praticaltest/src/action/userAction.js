import axios from "axios";
import { GET_CURRENT_USER,GET_CURRENT_USER_FAILURE, GET_CURRENT_USER_SUCCESS, } from "../constans";

export  const getUser = () => {
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: GET_CURRENT_USER });
      // Return promise with success and failure actions
      return axios.get('https://jsonplaceholder.typicode.com/users').then(  
        user => dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: user }),
        err => dispatch({ type: GET_CURRENT_USER_FAILURE, payload :  err })
      );
    };
  };