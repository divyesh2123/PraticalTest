import { Login_Failed, Login_Start, Login_SUCCESS } from "../constans"

const initialState = { 

    loading : false,
    userData : {},
    error : {},
    isLogedId : false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case Login_Start:
    return { ...state, loading: true}

  case Login_SUCCESS:
    return { ...state, loading: false, userData : payload, isLogedId: true}
    
  case Login_Failed:

    return { ...state, loading: false, error: payload,isLogedId: false}

  default:
    return state
  }
}
