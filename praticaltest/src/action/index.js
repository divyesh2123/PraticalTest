import { INCREMENT,DECREMENT,RESET, Product } from "../constans"


export const Increment = () => ({
  type: INCREMENT,
  
})

export const Decrement = () => ({
  type: DECREMENT,
  
})

export const Reset = () => ({
  type: RESET,
 
})

export const GetProduct = (payload) => ({
  type: Product,
  payload
})





