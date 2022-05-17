import React from 'react'
import ReactSelect from 'react-select'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Registration() {

    const navigate = useNavigate();
    const[state,setState] =useState({
        form: {
            name: "",
            email: "",
            mobile: "",
            password: "",
            confirmPassword: "",
            name_of_business: "",
            industry: "",
            contact_person_name: "",
            walletVisible: 0,
            orderVisible :0,
            productVisible: 0,
            role_id : 0
          },
          formErrors: {
            name: "",
            email: null,
            mobile: null,
            password: null,
            confirmPassword: null,
            name_of_business: "",
            industry: "",
            contact_person_name: null,
            walletVisible: "",
            OrderVisible :"",
            ProductVisible: "",
            role_id : ""
            
          }
       });
    
       const industry = [
        { value: "Machine Operator", label: "Machine Operator" },
        { value: "Software", label: "Software" },
        { value: "IT Servicies", label: "IT Servicies" }
      ];

      const roleList = [
        { value: "0", label: "Admin" },
        { value: "1", label: "User" },
        { value: "2", label: "Data" }
      ];
   
    
    
      var  validateNumber = evt => {
            var theEvent = evt || window.event;
        
            // Handle paste
            if (theEvent.type === "paste") {
              key = theEvent.clipboardData.getData("text/plain");
            } else {
              // Handle key press
              var key = theEvent.keyCode || theEvent.which;
            //  alert(key);
        
              key = String.fromCharCode(key);
        
              
            }
    
            if(key)
            var regex = /[0-9]|\./;
            if (!regex.test(key)) {
              theEvent.returnValue = false;
              if (theEvent.preventDefault) theEvent.preventDefault();
            }
          }
        
       var   handleChange = e => {
            
            
            const { name, value, checked } = e.target;
            const { form, formErrors } = state;
            let formObj = {};
            if (name === "walletVisible") {
        
             
              // handle the change event of language field
              if (checked) {
                // push selected value in list
                formObj = { ...form };
                formObj[name] = 1;
              } else {
                // remove unchecked value from the list
                formObj[name] = 0;
              }
            } else {
              // handle change event except language field
              formObj = {
                ...form,
                [name]: value
              };
            }
    
    
            if (!Object.keys(formErrors).includes(name)) return;
            let formErrorsObj = {};
            if (name === "password" || name === "confirmPassword") {
              let refValue = state.form[
                name === "password" ? "confirmPassword" : "password"
              ];
              const errorMsg = validateField(name, value, refValue);
              formErrorsObj = { ...formErrors, [name]: errorMsg };
              if (!errorMsg && refValue) {
                formErrorsObj.confirmPassword = null;
                formErrorsObj.password = null;
              }
            } else {
              const errorMsg = validateField(
                name,
                value
              );
              formErrorsObj = { ...formErrors, [name]: errorMsg };
            }
            setState({...state ,formErrors: formErrorsObj,form: formObj });
          
          };
        
        var  validateField = (name, value, refValue) => {
            let errorMsg = null;
            switch (name) {
              case "name":
                if (!value) errorMsg = "Please enter Name.";
                break;
              case "email":
                if (!value) errorMsg = "Please enter Email.";
                else if (
                  !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    value
                  )
                )
                  errorMsg = "Please enter valid Email.";
                break;
              case "mobile":
                if (!value) errorMsg = "Please enter Mobile.";
                break;
           
              case "password":
                // refValue is the value of Confirm Password field
                if (!value) errorMsg = "Please enter Password.";
                else if (refValue && value !== refValue)
                  errorMsg = "Password and Confirm Password does not match.";
                break;
              case "confirmPassword":
                // refValue is the value of Password field
                if (!value) errorMsg = "Please enter Confirm Password.";
                else if (refValue && value !== refValue)
                  errorMsg = "Password and Confirm Password does not match.";
                break;
             
              default:
                break;
            }
            return errorMsg;
          };
        
        var  validateForm = (form, formErrors, validateFunc) => {
            const errorObj = {};
            Object.keys(formErrors).map(x => {
              let refValue = null;
              if (x === "password" || x === "confirmPassword") {
                refValue = form[x === "password" ? "confirmPassword" : "password"];
              }
              const msg = validateFunc(x, form[x], refValue);
              if (msg) errorObj[x] = msg;
            });
            return errorObj;
          };
        
         var handleSubmit = () => {
            const { form, formErrors } = state;
            const errorObj = validateForm(form, formErrors, validateField);
            debugger;
            if (Object.keys(errorObj).length !== 0) {
              setState({...state, formErrors: { ...formErrors, ...errorObj } });
              return false;
            }

            let registrationObect = {
                "username": state.form.name,
"password": state.form.password,
"email_address": state.form.email,
"phone_number": state.form.mobile,
"name_of_business": state.form.name_of_business,
"industry": state.form.industry,
"contact_person_name":  state.form.contact_person_name,
"walletVisible":state.form.walletVisible,
"OrderVisible":state.form.orderVisible,
"ProductVisible": state.form.productVisible,
"role_id":state.form.role_id
            }

            axios.post("http://139.59.21.147:8080/api/users/signup", registrationObect)
            .then(y=> {
                if(y.status==200){
                       
                  
                    navigate("/login")
                 }else{
                    //SetMessage(data.message);
                 }
            })

            console.log("Data: ", form);
          };
    
      return (
        <>
            <div className="signup-box">
              <p className="title">Sign up</p>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                     User Name:<span className="asterisk">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      value={state.form.name}
                      onChange={handleChange}
                      onBlur={handleChange}
                    />
                    {state.formErrors.name && (
                      <span className="err">{state.formErrors.name}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Email:<span className="asterisk">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      value={state.form.email}
                      onChange={handleChange}
                      onBlur={handleChange}
                    />
                    {state.formErrors.email && (
                      <span className="err">{state.formErrors.email}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Password:<span className="asterisk">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      value={state.form.password}
                      onChange={handleChange}
                      onBlur={handleChange}
                    />
                    {state.formErrors.password && (
                      <span className="err">{state.formErrors.password}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label>
                      Confirm Password:<span className="asterisk">*</span>
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirmPassword"
                      value={state.form.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleChange}
                    />
                    {state.formErrors.confirmPassword && (
                      <span className="err">{state.formErrors.confirmPassword}</span>
                    )}
                  </div>
                
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>
                    industry:<span className="asterisk">*</span>
                    </label>
                    <ReactSelect
                      name="industry"
                      options={industry}
                      value={industry.find(x => x.value === state.form.industry)}
                      onChange={e =>
                        handleChange({
                          target: {
                            name: "industry",
                            value: e.value
                          }
                        })
                      }
                    />
                    {state.formErrors.industry && (
                      <span className="err">{state.formErrors.industry}</span>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="mr-3">
                    Contact Person Name:<span className="asterisk">*</span>
                    </label>

                    <input
                      className="form-control"
                      type="text"
                      name="contact_person_name"
                      value={state.form.contact_person_name}
                      onChange={handleChange}
                      onBlur={handleChange}
                      
                    />
                   
                    {state.formErrors.contact_person_name && (
                      <span className="err">{state.formErrors.contact_person_name}</span>
                    )}
                  </div>

                  <div class="form-check form-group">
  <input class="form-check-input" type="checkbox" name='walletVisible' checked={state.form.walletVisible}  value={state.formErrors.walletVisible} onChange={handleChange}/>
  <label class="form-check-label" for="inlineCheckbox1"> Is walletVisible</label>
</div>
                  
                  <div className="form-group">
                    <label>
                      Role:<span className="asterisk">*</span>
                    </label>
                    <ReactSelect
                      name="role_id"
                      options={roleList}
                      value={roleList.find(x => x.value === state.form.role_id)}
                      onChange={e =>
                        handleChange({
                          target: {
                            name: "role_id",
                            value: e.value
                          }
                        })
                      }
                    />
                    {state.formErrors.role_id && (
                      <span className="err">{state.formErrors.role_id}</span>
                    )}
                  </div>

                  <div className="form-group">
                <label>
                  Mobile:<span className="asterisk">*</span>
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="mobile"
                  value={state.form.mobile}
                  onChange={handleChange}
                  onBlur={handleChange}
                  onKeyPress={validateNumber}
                />
                {state.formErrors.mobile && (
                  <span className="err">{state.formErrors.mobile}</span>
                )}
              </div>
                </div>
              </div>
    
              <div className="form-group">
                <input
                  type="button"
                  className="btn btn-xxl btn-primary "
                  value="Submit"
                  onClick={handleSubmit}
                />
              </div>
            </div>
            
          </>
      )
    }