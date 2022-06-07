import { GET_CURRENT_USER, GET_CURRENT_USER_FAILURE, GET_CURRENT_USER_SUCCESS } from "../constans"

const initialState = {
    loading : false,
    userData : [],
    error : {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case "GET_USERS_REQUESTED":
    return { ...state, loading : true }

    case "GET_USERS_SUCCESS":
        return { ...state, loading : false, userData : payload }

    case "GET_USERS_FAILED":

        return {...state , loading: false, error : payload}
    
  default:
    return state
  }
}
