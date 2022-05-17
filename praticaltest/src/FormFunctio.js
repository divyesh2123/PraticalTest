import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required.')
    .min(3, 'Minimum 3 characters required'),
  lastName: yup.string().required('Last name is required'),
  emailId: yup
    .string()
    .required('Email ID is required')
    .email('Enter valid email id'),
  mobileNumber: yup.number()
});
export default function FormFunctio() {




 

    const formik = useFormik(
        {
        initialValues: {
          firstName: '',
          lastName: '',
          emailId: '',
          mobileNumber: undefined,
          gender: '',
          address: ''
        },
        onSubmit: values => {
          alert(
            'Registration Form Submitted \n ' + JSON.stringify(values, null, 2)
          );
          formik.resetForm();
        },
        validationSchema: validationSchema
      });
    
      const renderErrorMessage = field => {
        return (
          formik.touched[field] && (
            <div class="text-error">{formik.errors[field]}</div>
          )
        );
      };
    
      console.log(formik);
      return (
        <div class="root">
          <div class="form">
            <h1> Registration </h1>
            <form onSubmit={formik.handleSubmit}>
              <div class="form-group">
                <label> First Name </label>
                <div>
                  <input type="text"  
                  {...formik.getFieldProps('firstName')} />
                  {renderErrorMessage('firstName')}
                </div>
              </div>
              <div class="form-group">
                <label> Last Name </label>
                <div>
                  <input type="text"
                   {...formik.getFieldProps('lastName')} />
                  {renderErrorMessage('lastName')}
                </div>
              </div>
              <div class="form-group">
                <label> Email Id </label>
                <div>
                  <input type="text" {...formik.getFieldProps('emailId')} />
                  {renderErrorMessage('emailId')}
                </div>
              </div>
              <div class="form-group">
                <label> Mobile Number </label>
                <input type="text" {...formik.getFieldProps('mobileNumber')} />
              </div>
              <div class="form-group">
                <label> Gender </label>
                <select {...formik.getFieldProps('gender')}>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="form-group">
                <label> Address </label>
                <textarea type="text" {...formik.getFieldProps('address')} />
              </div>
              <div>
                <button type="submit" class="btn-primary">
                  Submit
                </button>
                <button
                  type="reset"
                  class="btn-secondary"
                  onClick={formik.resetForm}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
          <div class="form-state">
            <h4>Form State</h4>
            <h5>Dirty: {JSON.stringify(formik.dirty)}</h5>
            <h5>isValid: {JSON.stringify(formik.isValid)}</h5>
            <h5>values:</h5>
            <code>
              <pre>{JSON.stringify(formik.values, null, 2)}</pre>
            </code>
            <h5>Errors:</h5>
            <code>
              <pre>{JSON.stringify(formik.errors, null, 2)}</pre>
            </code>
            <h5>Touched:</h5>
            <code>
              <pre>{JSON.stringify(formik.touched, null, 2)}</pre>
            </code>
          </div>
        </div>
      );
}