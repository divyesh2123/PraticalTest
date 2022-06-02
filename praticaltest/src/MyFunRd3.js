import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux';
import { Decrement, Increment, Reset } from './action';

// The action creators
export const increment = () => ( Increment());
export const decrement = () => (Decrement());
export const reset = () => (Reset());


const mapStateToProps = (state) => {
    return {
      count: state.conuter
    }
  }

  function MyFunRd3(props) {

  return (
    <div>
      { props.count }
      {props.di}
      <button onClick={()=> {props.increment() }}> + </button>
      <button onClick={()=> {props.decrement() }}> - </button>
      <button  onClick={()=> {props.reset() }}> Reset </button>
    </div>
  )
}




export default connect(mapStateToProps, { increment, decrement, reset }) (MyFunRd3)

 
