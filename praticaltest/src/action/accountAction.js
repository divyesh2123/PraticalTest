import axios from "axios";
import {  Account_Failed, Account_Start, Account_SUCCESS, Registration_Failed, Registration_Start, Registration_SUCCESS, } from "../constans";

export  const accountData = () => {
   
    return (dispatch) => {     //nameless functions
      // Initial action dispatched
        dispatch({ type: Account_Start });
      // Return promise with success and failure actions
      return auth.get('/accounts').then(  
        user => dispatch({ type: Account_SUCCESS, payload: user.data }),
        err => dispatch({ type: Account_Failed, payload :  err })
      );
    };
  };