import React, { useState } from 'react'

export default function Registration() {

    const [data,setData] = useState({
        title : "",
        firstName: "",
        lastName: "",
        email: "",
        confirmPassword: "",
        acceptTerms: true
    })

    const handleFirstName = (e)=> {
          
        setData({...data, firstName : e.target.value})
    }


  return (
    <div>
        <form>

        <div class="form-group">
    <label for="firstName">FirstName:</label>
    <input type="text" class="form-control" id="firstName" onChange={handleFirstName}  value={data.firstName}/>
  </div>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" id="pwd"/>
  </div>
  <div class="checkbox">
    <label><input type="checkbox"/> Remember me</label>
  </div>
  <button type="submit" class="btn btn-default">Submit</button>


        </form>

    </div>
  )
}
