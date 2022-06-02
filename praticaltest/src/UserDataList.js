import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from './action/userAction';


export default function UserDataList() {


  const mydis =  useDispatch();

  const myusers = useSelector((state)=> state.userdata);

  console.log(myusers);

  useEffect(()=> {

    mydis(getUser())

  },[])


  return (
    <div>UserDataList</div>
  )
}
