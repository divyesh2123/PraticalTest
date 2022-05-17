import axios from 'axios'
import React, { useState } from 'react'

export default function RegistrationForm() {

    const [data,setData]  = useState( {

        title : "",
        firstName : "",
        lastName : "",
        email : "",
        password: "",
        confirmPassword : "",
        acceptTerms : true


    })

    const [validationError, setError] = useState( {
        title : "",
        firstName : "",
        lastName : "",
        email : "",
        password: "",
        confirmPassword : "",
        acceptTerms : true

    }) 

    const handleChangeForFirstName = (e)=> {

        setData({...data, firstName : e.target.value})

        if(data.firstName == "")
        {

            setError({...validationError, firstName : "FirstName is required"})

        }
        else if(data.firstName.length > 12)
        {

            setError({...validationError, firstName : "Invalid first Name"})
        }
        else
        {
            setError({...validationError, firstName : ""})
        }


    }

    const handleChangeForLastName = (e)=> {

        setData({...data, lastName : e.target.value})
    }

    const handleChangeForPassword = (e) => {

        setData({...data, password : e.target.value});
    }

    const handleChangeForConfirmPassword = (e) => {

        setData({...data, confirmPassword : e.target.value});
    }

    const handleChangeForTitle = (e) => {

        setData({...data, title : e.target.value});
    }

    const handleEmail = (e) => {


        setData({...data, email : e.target.value});

    }

    const handleChangeTerm = (e) => {

        setData({...data , acceptTerms : e.target.checked})

       


    }

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post("http://localhost:4000/accounts/register",data).then(y=> {


        console.log(y);

        })


    }



  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type="text" value={data.title} onChange = {handleChangeForTitle} />

       
            <input type="text" value={data.firstName} onChange = {handleChangeForFirstName} />
            <span>{validationError?.firstName}</span>
            <input type="text" value={data.lastName} onChange = {handleChangeForLastName} />
            <input type="text" value={data.email} onChange = {handleEmail} />
            <input type="text" value={data.password} onChange = {handleChangeForPassword} />
            <input type="text" value={data.confirmPassword} onChange = {handleChangeForConfirmPassword} />

            <input type="checkbox" value={data.acceptTerms} checked={data.acceptTerms} onChange ={handleChangeTerm} />

            <input type="submit"   value="save"/>


        </form>


    </div>
  )
}
