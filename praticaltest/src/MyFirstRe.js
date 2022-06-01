import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { useSelector,useDispatch } from 'react-redux';


const MyFirstRe = props => {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
  
  
   
     const actionFunc = type => dispatch({type})

    useEffect(() => {
      document.title = `You clicked ${count} times`;
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(result => dispatch({
        type: 'users',
        payload: result
      }))
      // console.log(document.title)
    }, []);

  return (
    <div>
      { count }
      <button onClick={() => actionFunc('increment')}> + </button>
      <button onClick={() => actionFunc('decrement')}> - </button>
      <button  onClick={() => actionFunc('reset')}> Reset </button>
    </div>
  )
}



export default MyFirstRe;
