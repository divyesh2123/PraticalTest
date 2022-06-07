import { Registration_Failed, Registration_Start, Registration_SUCCESS } from "../constans"

const initialState = {
    loading : false,
    userData : {},
    error : {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case Registration_Start:
    return { ...state, loading : true }

  case Registration_SUCCESS:
    return { ...state, loading : false, userData: payload }

  case Registration_Failed:
    return { ...state, loading : false, error: payload }

  default:
    return state
  }
}
