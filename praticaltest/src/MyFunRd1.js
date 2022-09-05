import React, { useEffect } from 'react';
import { connect } from 'react-redux'

import { Decrement, Increment, Reset } from './action';

const mapStateToProps = (state) => {
    return {
      count: state.conuter
    }
  }

  

function MyFunRd1({ count, dispatch }) {
 
    const increment = () => {
        dispatch(Increment())
      }
    
      const decrement = () => {
        dispatch (Decrement())
      }
    
      const reset = () => {
        dispatch (Reset())
      }

  return (
    <div>
      { count }
      <button onClick={() => increment()}> + </button>
      <button onClick={() => decrement()}> - </button>
      <button  onClick={() => reset()}> Reset </button>
    </div>
  )
}

export default connect(mapStateToProps) (MyFunRd1)

