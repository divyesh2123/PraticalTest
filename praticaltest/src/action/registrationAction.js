import axios from "axios";
import {  Registration_Failed, Registration_Start, Registration_SUCCESS, } from "../constans";

export  const postRegistrati = (data) => {
    debugger;
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: Registration_Start });
      // Return promise with success and failure actions
      return axios.post('http://localhost:4000/accounts/register',data).then(  
        user => dispatch({ type: Registration_SUCCESS, payload: user }),
        err => dispatch({ type: Registration_Failed, payload :  err })
      );
    };
  };