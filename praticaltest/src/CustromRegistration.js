import React, { useState } from 'react'
import { postRegistrati } from './action/registrationAction';
import { useDispatch, useSelector } from 'react-redux'

export default function CustromRegistration() {



    const [myData,setmyData] = useState({

        title : "",
        firstName: "",
        lastName: "",
        email : "",
        password : "",
        confirmPassword: "",
        acceptTerms : true


    })

    const onHandelChange = (e)=> {
        const {name,value,checked} = e.target;

        if(name == "acceptTerms")
        {
            setmyData({...myData,acceptTerms : checked });
        }
        else
        {
            setmyData({...myData,[name]: value});
        }

    }

    

    const myReigstation =  useSelector((state) => state.registration);

    console.log(myReigstation);



    const myDispatch = useDispatch();



    const onHandelSubmit=(e)=> {

        e.preventDefault();


        console.log(myData);

        myDispatch(postRegistrati(myData));



    }

  
  return (
    <div>

    <form onSubmit={onHandelSubmit}>
        
    <input type="text" value={myData.title} placeholder="title" name="title"  onChange={onHandelChange}/>
    <input type="text" value={myData.firstName} placeholder="firstName"   name="firstName"  onChange={onHandelChange}/>
    <input type="text" value={myData.lastName} placeholder="lastName"  name="lastName" onChange={onHandelChange} />
    <input type="text" value={myData.email} placeholder="email" name="email" onChange={onHandelChange} />
    <input type="password" value={myData.password} placeholder="password" name="password" onChange={onHandelChange} />
    <input type="confirmPassword" value={myData.confirmPassword}  placeholder="confirmPassword" name="confirmPassword"  onChange={onHandelChange}/>

    <input type="checkbox"  checked={myData.acceptTerms} value={myData.acceptTerms} name="acceptTerms" />
            
    <input type="submit" />
            
    </form>
    
    </div>
  )
}
