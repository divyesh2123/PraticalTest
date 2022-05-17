import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';



function Login() {

   const navigate = useNavigate();
   const [cookies, setCookie, removeCookie] = useCookies(['userinfo']);
    const Initial={
        email:"",
        password:"",
      }

      const  currentUser  =localStorage.getItem("token");



  useEffect(() => {
    if (currentUser) {
     
      navigate("/");
    }
  }, [currentUser, navigate]);

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
         
         debugger
         console.log(JSON.stringify({
            "email":InitilaizedValues.email,
            "password":InitilaizedValues.password,
        }));
       
            
          let myObje = {
            username :InitilaizedValues.email,
            password : InitilaizedValues.password
          }

            try {
               axios.post("http://139.59.21.147:8080/api/users/login",myObje).then(response => {
                    console.log(response);
                   
                     if(response.status==200){
                       
                        SetMessage(response.data.message);
                        localStorage.setItem('token',response.data.token);
                        setCookie("userinfo", response.data.token,"/")
                        navigate("/")
                     }else{
                        //SetMessage(data.message);
                     }
                }).catch(error=>{
                    console.log('error');
                });

              } catch (err) {
                console.log(err);
              }
            //SetTheSubmit(false);
         }
         
       
         
         useEffect(()=>{
           console.log(InitilaizedErrors);
          if(Object.keys(InitilaizedErrors).length=== 0 && isSubmit){
            
          }
         },[InitilaizedErrors,isSubmit]);
         
     
   
        const Validate=(values)=>{
         const errors={}
         const regexemail=/[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
         const regexpassword=/[0-9a-z]/
         let error=0;
         if (!values.email) {
            errors.email = "*UserName is required*";
            error=1;
          }
        
          if (!values.password) {
           errors.password = "*password is required*";
           error=1;
         }
         else if(!regexpassword.test(values.password)){
           errors.password = "*InValid password *";
           error=1;
         }
        debugger;
            if(error==0){  
           
          }
        
         return errors;
        }
  return (
    <>
        <form onSubmit={HandleSubmitForm}>
       <div>{message ? <p>{message}</p> : null}</div>
    {Object.keys(InitilaizedErrors).length === 0 && isSubmit && (
        <span className="success-msg">Signed in successfully</span>
      )}
      <div className="container">
        <div className="main container">
          <div className="signinpage mb-5 mt-5">
            <h1 className="mx-5 mt-3">login</h1>
            <div className="form-content input-icons">
                <div className="input-group mt-5 mb-3 w-75 mx-5">
                  <span className="input-group-text fa fa-envelope pa" id="basic-addon1"></span>
                  <input type="text" autoComplete="off" name="email" className="form-control" onChange={ChangingTheValues} placeholder="Enter email...." aria-label="Username" aria-describedby="basic-addon1" >
                  </input>
                </div>
                <p className='mx-5 text-danger'>{InitilaizedErrors.email}</p>
                <div className="input-group mt-5 mb-3 w-75 mx-5">
                  <span className="input-group-text fa fa-lock" id="basic-addon1"></span>
                  <input type="password"  autoComplete="off" name="password" className="form-control" onChange={ChangingTheValues} placeholder="Enter password...."  aria-describedby="basic-addon1">
                  </input>
                </div>
                <p className='mx-5 text-danger'>{InitilaizedErrors.password}</p>
          
                <button onSubmit={HandleSubmitForm} className="btn btn-primary mx-5 mt-4" type='submit' >Create account</button>
              </div>
          </div>
          
          <pre>{JSON.stringify(InitilaizedValues,undefined,2)}</pre>
        </div>
      </div>
      </form>
    </>
  )
}

export default Login