import React, { useState } from 'react'
import ReactSelect from "react-select";

export default function FullFormFunction() {


   const[state,setState] =useState({
    form: {
        name: "divyesh",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
        gender: null,
        language: ["english"],
        country: "Canada",
        zipCode: ""
      },
      formErrors: {
        name: "FirstName is required",
        email: null,
        mobile: null,
        password: null,
        confirmPassword: null,
        gender: "",
        language: null,
        country: null,
        
      }
   });

   const countryList = [
    { value: "india", label: "India" },
    { value: "us", label: "US" },
    { value: "australia", label: "Australia" },
    { value: "Canada", label: "Canada" }
  ];
  const languageList = [
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" }
  ];


  var  validateNumber = evt => {
        var theEvent = evt || window.event;
    
        // Handle paste
      
          // Handle key press
          var key = theEvent.keyCode || theEvent.which;
        //  alert(key);
    
          key = String.fromCharCode(key);
    
          
        

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
        if (name === "language") {
    
         
          // handle the change event of language field
          if (checked) {
            // push selected value in list
            formObj = { ...form };
            formObj[name].push(value);
          } else {
            // remove unchecked value from the list
            formObj = {
              ...form,
              [name]: form[name].filter(x => x !== value)
            };
          }
        } else {
          // handle change event except language field
          formObj = {
            ...form,
            [name]: value
          };
        }


        if (Object.keys(formErrors).includes(name) == false) return;
        
        let formErrorsObj = {};
        if (name === "password" || name === "confirmPassword") {
          let refValue = formObj[
            name === "password" ? "confirmPassword" : "password"
          ];
          const errorMsg = validateField(name, value, refValue);
          formErrorsObj = { ...formErrors, [name]: errorMsg };
          // if (!errorMsg && refValue) {
          //   formErrorsObj.confirmPassword = null;
          //   formErrorsObj.password = null;
          // }
        } else {
          const errorMsg = validateField(
            name,
            formObj[name]
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
          case "country":
            if (!value) errorMsg = "Please select Country.";
            break;
          case "gender":
            if (!value) errorMsg = "Please select Gender.";
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
          case "language":
            if (value.length === 0) errorMsg = "Please select Language.";
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
        if (Object.keys(errorObj).length !== 0) {
          setState({...state, formErrors: { ...formErrors, ...errorObj } });
          return false;
        }
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
                  Name:<span className="asterisk">*</span>
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
              <div className="form-group">
                <label className="mr-3">
                  Language:<span className="asterisk">*</span>
                </label>
                <div className="form-control border-0 p-0 pt-1">
                  {languageList.map((x, i) => {
                    return (
                      <label key={i} className="mr-2">
                        <input
                          type="checkbox"
                          name="language"
                          value={x.value}
                          checked={state.form.language.includes(x.value)}
                          onChange={handleChange}
                        />{" "}
                        {x.label}
                      </label>
                    );
                  })}
                </div>
                {state.formErrors.language && (
                  <span className="err">{state.formErrors.language}</span>
                )}
              </div>
            </div>
            <div className="col-md-6">
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
              <div className="form-group">
                <label className="mr-3">
                  Gender:<span className="asterisk">*</span>
                </label>
                <div className="form-control border-0 p-0 pt-1">
                  <label className="mr-2">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={state.form.gender === "male"}
                      onChange={handleChange}
                    />{" "}
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={state.form.gender == "female"}
                      onChange={handleChange}
                    />{" "}
                    Female
                  </label>
                </div>
                {state.formErrors.gender && (
                  <span className="err">{state.formErrors.gender}</span>
                )}
              </div>
              <div className="form-group">
                <label>Zip Code:</label>
                <input
                  className="form-control"
                  type="text"
                  name="zipCode"
                  value={state.form.zipCode}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>
                  Country:<span className="asterisk">*</span>
                </label>
                <ReactSelect
                  name="country"
                  options={countryList}
                  value={countryList.find(x => x.value === state.form.country)}
                  onChange={e =>
                    handleChange({
                      target: {
                        name: "country",
                        value: e.value
                      }
                    })
                  }
                />
                {state.formErrors.country && (
                  <span className="err">{state.formErrors.country}</span>
                )}
              </div>
            </div>
          </div>

          <div className="form-group">
            <input
              type="button"
              className="btn btn-primary"
              value="Submit"
              onClick={handleSubmit}
            />
          </div>
        </div>
        
      </>
  )
}