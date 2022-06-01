import { Product } from "../constans"

const initialState = {

    items : []

}

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case Product:
    return { ...state, items : payload }

  default:
    return state
  }
}
