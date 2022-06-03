import { INCREMENT,DECREMENT,RESET, Product,IncrementAsync } from "../constans"


export const Increment = () => ({
  type: INCREMENT,
  
})

export const IncrementAsyncAction = () => ({
  type: IncrementAsync,
  
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





