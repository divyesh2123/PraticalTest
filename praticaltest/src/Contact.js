import React, { useState } from 'react'

export default function Contact() {

  const [data,setData] =useState({
      firstname:"",
      lastnme:"",
      list=[]
    })
   
   const handleChange=()=>{
       const {name,value} =e.target
       setData(...data,[name]=value)
   }
   

  return (
    <div>
        <input type="text" onChange={handleChange} name="fname" placeholder='FIRSTNAME'/>
        <input type="text" name="lname" placeholder='LASTNAME'/>
        <button>ADD</button>


    </div>
  )
}
