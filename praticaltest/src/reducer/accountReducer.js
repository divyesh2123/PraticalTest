import { Account_Failed, Account_Start, Account_SUCCESS } from "../constans"

const initialState = {
    data : [],
    loadding : false,
    error : {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case Account_Start:
    return { ...state, loadding : true }

  case Account_SUCCESS:

    return {...state , data: payload, loadding : false}

  case Account_Failed :

    return {...state, error : payload, loadding : false}
  default:
    return state
  }
}
