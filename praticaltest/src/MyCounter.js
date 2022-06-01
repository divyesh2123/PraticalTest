import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Decrement, Increment, Reset } from './action';

export default function MyCounter() {

    const myCounter =  useSelector((state) => state.conuter);

    console.log(myCounter);
    const myDispatch = useDispatch();


  return (
    <div>
        {myCounter}
        <button onClick={()=> {myDispatch(Increment())} }>Increment</button>
        <button onClick={()=> {myDispatch(Decrement())} }>Decrement</button>
        <button onClick={()=> {myDispatch(Reset())} }>Reset</button>


    </div>
  )
}
