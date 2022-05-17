import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
function Admin() {
    const Initial={
        first_name:"",
        last_name:"",
        Email:"",
        Password:null,
      }
       const [InitilaizedValues,SetTheValues] =useState(Initial);
       const [InitilaizedErrors,SetTheErrors] =useState({});
       const [isSubmit,SetTheSubmit] =useState(false);
       const [message,SetMessage] =useState("")
   
       const ChangingTheValues=(e)=>{
         const {name,value} =e.target;
         SetTheValues({
              ...InitilaizedValues, [name]:value
         });
       } 
       const HandleSubmitForm=(e)=>{
          e.preventDefault();
         SetTheErrors(Validate(InitilaizedValues));
         if(SetTheErrors.length==0){
            try {
                let res =  fetch("http://174.138.21.74:8000/admin/auth/create_account", {
                  method: "POST",
                  body: JSON.stringify(InitilaizedValues),
                })
                .then(response => response.json())
                .then(data =>{
                    if(data.status_code===200){
                      SetMessage("you have been succesfully created..")
                    }
                    else{
                        SetMessage(data.message)
                    } 
                    SetMessage("you have been created susceessfully")
                });
              } catch (err) {
                console.log(err);
              }
            SetTheSubmit(true)
         }
         
       }
         
         useEffect(()=>{
           console.log(InitilaizedErrors);
          if(Object.keys(InitilaizedErrors).length=== 0 && isSubmit){
            
          }
         },[InitilaizedErrors,isSubmit]);
        const Validate=(values)=>{
         const errors={}
         const regexUserName=/[a-zA-Z]/
         const regexEmail=/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
         const regexPassword=/[0-9a-z]/
         if(!values.first_name){
               errors.first_name="*first Name is required*";
         }else if(!regexUserName.test(values.first_name)){
           errors.first_name="*first Name is not valid*";
              
         }
         if(!values.last_name){
            errors.last_name="*last Name is required*";
      }else if(!regexUserName.test(values.last_name)){
        errors.last_name="*last Name is not valid*";
           
      }
         if (!values.Email) {
            errors.Email = "*Email is required*";
          }
          else if(!regexEmail.test(values.Email)){
           errors.Email = "*InValid Email  address*";
         }
          if (!values.Password) {
           errors.Password = "*Password is required*";
         }
         else if(!regexPassword.test(values.Password)){
           errors.Password = "*InValid Password *";
         }   
         return errors;
        }
  return (
    <form  onSubmit={HandleSubmitForm}>
       <div>{message ? <p>{message}</p> : null}</div>
    {Object.keys(InitilaizedErrors).length === 0 && isSubmit && (
        <span className="success-msg">Signed in successfully</span>
      )}
      <div className="container">
        <div className="main container">
          <div className="signinpage mb-5 mt-5">
            <h1 className="mx-5 mt-3">sign in</h1>
            <div className="form-content input-icons">
                <div className="input-group mt-5 mb-3 w-75 mx-5">
                  <span className="input-group-text fa fa-user" id="basic-addon1"></span>
                  <input type="text"  autoComplete="off" name="first_name" onChange={ChangingTheValues} className="form-control " placeholder="Enter FirstName...." aria-label="Username" aria-describedby="basic-addon1" >
                  </input>
                </div>
                <p className='mx-5 text-danger'>{InitilaizedErrors.first_name}</p>
                <div className="input-group mt-5 mb-3 w-75 mx-5">
                  <span className="input-group-text fa fa-user" id="basic-addon1"></span>
                  <input type="text"  autoComplete="off" name="last_name" onChange={ChangingTheValues} className="form-control " placeholder="Enter LastName...." aria-label="Username" aria-describedby="basic-addon1" >
                  </input>
                </div>
                <p className='mx-5 text-danger'>{InitilaizedErrors.last_name}</p>
                <div className="input-group mt-5 mb-3 w-75 mx-5">
                  <span className="input-group-text fa fa-envelope pa" id="basic-addon1"></span>
                  <input type="text" autoComplete="off" Name="Email" className="form-control" onChange={ChangingTheValues} placeholder="Enter Email...." aria-label="Username" aria-describedby="basic-addon1" >
                  </input>
                </div>
                <p className='mx-5 text-danger'>{InitilaizedErrors.Email}</p>
                <div className="input-group mt-5 mb-3 w-75 mx-5">
                  <span className="input-group-text fa fa-lock" id="basic-addon1"></span>
                  <input type="Password "  autoComplete="off" name="Password" className="form-control" onChange={ChangingTheValues} placeholder="Enter Password...." aria-label="Username" aria-describedby="basic-addon1">
                  </input>
                </div>
                <p className='mx-5 text-danger'>{InitilaizedErrors.Password}</p>
                <button onSubmit={HandleSubmitForm} className="btn btn-primary mx-5 mt-4" type='submit' >Create account</button>
              </div>
          </div>
          <pre>{JSON.stringify(InitilaizedValues,undefined,2)}</pre>
        </div>
      </div>
      </form>
  )
}

export default Admin