import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { accountData } from './action/accountAction';

export default function Home() {

  var mydispatch = useDispatch();

  var  mySelector =  useSelector((state)=> state.accountData);

  console.log(mySelector);

  useEffect(()=> {

    mydispatch(accountData());

  },[])


  return (
    <div>Home</div>
  )
}
