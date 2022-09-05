import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux';
import { Decrement, Reset,Increment } from './action';

const mapStateToProps = (state) => {
    return {
      count: state.conuter
    }
  }

  function MyFunRd2(data) {

   
     console.log(data);
 
   

  return (
    <div>
      { data.count }
      <button onClick={()=> {data.increment()}}> + </button>
      <button onClick={()=> {data.decrement() }}> - </button>
      <button  onClick={()=> {data.reset()}}> Reset </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
    return {
      // dispatching plain actions
      increment: () => dispatch(Increment()),
      decrement: () => dispatch(Decrement()),
      reset: () => dispatch(Reset()),
    }
  }

 

  export default connect(mapStateToProps,mapDispatchToProps) (MyFunRd2);


