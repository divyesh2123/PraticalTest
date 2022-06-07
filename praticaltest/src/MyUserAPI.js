import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserData } from './action';

export default function MyUserAPI() {


    const myCounter =  useSelector((state) => state.userdata);

    console.log(myCounter);
    const myDispatch = useDispatch();

    useEffect(()=> {

        myDispatch(GetUserData())

    },[])

  return (
    <div>MyUserAPI</div>
  )
}
