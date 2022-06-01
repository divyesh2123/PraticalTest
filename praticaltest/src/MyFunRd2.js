import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      count: state.count
    }
  }

  function MyFunRd2(data) {

   
    
 
   

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
      increment: () => dispatch({ type: 'increment' }),
      decrement: () => dispatch({ type: 'decrement' }),
      reset: () => dispatch({ type: 'reset' }),
    }
  }

  export default connect(mapStateToProps,mapDispatchToProps) (MyFunRd2);


