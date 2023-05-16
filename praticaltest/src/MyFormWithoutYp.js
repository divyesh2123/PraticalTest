import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { Formik, Field, Form, ErrorMessage } from 'formik';

export default class MyFormWithoutYp extends Component {
    constructor(props) {
        super(props);
        this.handlxeSubmit = this.handleSubmit.bind(this);
      }
    
       validateEmployee = empData => {

        console.log(empData);
        const errors = {};
      
        if (!empData.fullname) {
          errors.fullname = 'Please Enter Employee Name';
        } else if (empData.fullname.length > 20) {
          errors.fullname = 'Name cannot exceed 20 characters';
        }
      
        
      
        if (!empData.email) {
          errors.email = 'Please Enter Email ID';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.EmailId)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
    
      handleSubmit(data) {

        
        console.log(JSON.stringify(data));
      }
    
      render() {
        const initialValues = {
          fullname: '',
          username: '',
          email: '',
          password: '',
          confirmPassword: '',
          acceptTerms: false,
        };
    
        return (
          <div className="register-form">
            <Formik
              initialValues={initialValues}
              validate={this.validateEmployee}
              onSubmit={this.handleSubmit}
            >
              {({ resetForm }) => (
                <Form>
                  <div className="form-group">
                    <label>Full Name</label>
                    <Field name="fullname" type="text"
                     className="form-control" />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="username"> Username </label>
                    <Field name="username" type="text" className="form-control" />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="email"> Email </label>
                    <Field name="email" type="text" className="form-control" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="password"> Password </label>
                    <Field
                      name="password"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <label htmlFor="confirmPassword"> Confirm Password </label>
                    <Field
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                    />
                    <ErrorMessage
                      name="confirmPassword"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group form-check">
                    <Field
                      name="acceptTerms"
                      type="checkbox"
                      className="form-check-input"
                    />
                    <label htmlFor="acceptTerms" className="form-check-label">
                      I have read and agree to the Terms
                    </label>
                    <ErrorMessage
                      name="acceptTerms"
                      component="div"
                      className="text-danger"
                    />
                  </div>
    
                  <div className="form-group">
                    <button type="submit" 
                    className="btn btn-primary">
                      Register
                    </button>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="btn btn-warning float-right"
                    >
                      Reset
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        );
      }
}