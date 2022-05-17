import React, { useState } from 'react'
import axios from "axios";

export default function AccountRegistration() {

    const [data,setData] = useState({

        title : "",
        firstName:"",
        lastName : "",
        email: "",
        password : "",
        confirmPassword : "",
        acceptTerms : true

    })

    const myChange = (e)=> {

        const { name, checked, value} = e.target;

       var myObject = {...data,[name] : value}


        setData(myObject);




    }


    const mySubmit = (e)=> {

        e.preventDefault();
        axios.post("http://localhost:4000/accounts/register",data).then(y=> {

        console.log(y);
        })


    }
  return (
    <div>

        <form onSubmit={mySubmit}>

          <input type="text" value={data.title}  name="title"  onChange={myChange}/> 
            <input type="text" value={data.firstName}  name="firstName"  onChange={myChange}/>  
            <input type="text" value={data.lastName}  name="lastName" onChange={myChange}/>
            <input type="text" value={data.email} name="email" onChange={myChange} />
            <input type="text" value={data.password} name="password" onChange={myChange} />
            <input type="text" value={data.confirmPassword} name="confirmPassword"  onChange={myChange}/>
            <input type="checkbox"  value={data.acceptTerms} checked={data.acceptTerms} onChange={myChange}/>
            <input type="submit" value="save" />


        </form>


    </div>
  )
}
