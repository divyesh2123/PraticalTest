import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux';

// The action creators
export const increment = () => ({ type: "increment" });
export const decrement = () => ({ type: "decrement" });
export const reset = () => ({ type: "reset" });


const mapStateToProps = (state) => {
    return {
      count: state.count
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

 
