import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginData } from './action/loginAction';
import { useEffect } from 'react';

export default function MyLogin() {

  const [myData,setData] = useState({
    email : '',
    password : ''

  });

  const mydispatch = useDispatch();

  const myNavigate = useNavigate();

  const myUser = useSelector((state)=> state.loginData.isLogedId);

  console.log(myUser);

  const handleChange = (e)=> {

    const {name, value} = e.target;

    setData({...myData,[name]: value})

   

  }

  useEffect(() => {
    if (myUser) {
      myNavigate("/");
    }
  }, [myUser, myNavigate]);

  const handleSubmit = (e)=>
  {
    e.preventDefault();

    mydispatch(loginData(myData))


  } 


  return (
    <div>MyLogin  
        <form onSubmit={handleSubmit}>

            <label>UserName</label>
            <input type="text" name='email'  value={myData.email} onChange={handleChange}/>

            <label>Password</label>
            <input type="text"  name='password'  value={myData.password} onChange={handleChange}/>

            <input type="submit"  value="Save"/>

        </form>




    </div>
  )
}
